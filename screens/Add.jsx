import { StyleSheet, Text, View } from 'react-native';
import NoteForm from '../components/NoteForm';
import Button from '../components/ui/Button';

export default function Add({ onAdd, setCurrentPage }) {
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
            <Text style={styles.pageTitle}>Add Note</Text>
            <NoteForm onSubmit={onAdd} buttonText="Add" style={styles.form} />
            <Button
                onPress={() => setCurrentPage('home')}
                text="Back To Home"
                buttonStyle={styles.backHomeButton}
            />
        </View>
    );
}
