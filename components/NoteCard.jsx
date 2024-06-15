import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NoteContext from '../contexts/NoteContext';
import Button from './ui/Button';

export default function NoteCard({ note }) {
    const { deleteNote, setActiveNote, setCurrentPage } =
        useContext(NoteContext);
    const styles = StyleSheet.create({
        card: {
            borderWidth: 2,
            borderColor: '#ddd',
            padding: 5,
            marginVertical: 10,
        },
        item: {
            paddingHorizontal: 10,
            marginBottom: 10,
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 5,
        },
        action: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
        },
        editButton: {
            backgroundColor: 'green',
            padding: 10,
            width: 100,
        },
        deleteButton: {
            backgroundColor: 'red',
            padding: 10,
            width: 100,
        },
    });

    return (
        <View style={styles.card}>
            <View style={styles.item}>
                <Text style={styles.title}>{note.title}</Text>
                <Text>{note.content}</Text>
            </View>
            <View style={styles.action}>
                <View>
                    <Button
                        text={'Edit'}
                        onPress={() => {
                            setActiveNote(note);
                            setCurrentPage('edit');
                        }}
                        buttonStyle={styles.editButton}
                    />
                </View>
                <View>
                    <Button
                        text={'Delete'}
                        onPress={() => {
                            deleteNote(note.ID);
                        }}
                        buttonStyle={styles.deleteButton}
                    />
                </View>
            </View>
        </View>
    );
}
