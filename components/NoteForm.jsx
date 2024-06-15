import { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import NoteContext from '../contexts/NoteContext';
import Button from './ui/Button';
import InputText from './ui/TextInput';

export default function NoteForm({
    initialNote = {
        title: '',
        content: '',
    },
    onSubmit,
    buttonText,
    style = {},
}) {
    const [note, setNote] = useState(initialNote);
    const { setCurrentPage } = useContext(NoteContext);
    const isNoteEmpty = () =>
        note.title.length === 0 || note.content.length === 0;
    const styles = StyleSheet.create({
        inputForm: {
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            marginBottom: 10,
        },
        submitButton: {
            backgroundColor: isNoteEmpty() ? '#DDD' : 'blue',
            padding: 10,
        },
    });

    return (
        <View style={style}>
            <View style={styles.inputForm}>
                <InputText
                    name="Title"
                    placeholder="Enter note title"
                    value={note.title}
                    onChangeText={(title) => {
                        setNote({
                            ...note,
                            title: title,
                        });
                    }}
                    required
                />
                <InputText
                    name="Content"
                    placeholder="Enter note content"
                    value={note.content}
                    onChangeText={(content) => {
                        setNote({
                            ...note,
                            content: content,
                        });
                    }}
                    multiline
                    required
                />
            </View>
            <Button
                text={buttonText}
                onPress={() => {
                    onSubmit({
                        ...note,
                        ID: initialNote.ID || Date.now(),
                    });
                    setCurrentPage('home');
                }}
                buttonStyle={styles.submitButton}
                disabled={isNoteEmpty()}
            />
        </View>
    );
}
