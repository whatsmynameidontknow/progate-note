import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NoteForm from '../components/NoteForm';
import Button from '../components/ui/Button';
import NoteContext from '../contexts/NoteContext';

export default function Edit() {
    const { updateNote, setCurrentPage } = useContext(NoteContext);
    const styles = StyleSheet.create({
        pageTitle: {
            fontSize: 40,
            fontWeight: '900',
            textAlign: 'center',
            marginBottom: 10,
        },
        form: {
            marginBottom: 10,
        },
        backHomeButton: {
            backgroundColor: 'gray',
            padding: 10,
        },
    });
    return (
        <View>
            <Text style={styles.pageTitle}>Edit Note</Text>
            <NoteForm
                onSubmit={updateNote}
                buttonText="Update"
                style={styles.form}
            />
            <Button
                text="Back To Home"
                onPress={() => setCurrentPage('home')}
                buttonStyle={styles.backHomeButton}
            />
        </View>
    );
}
