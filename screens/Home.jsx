import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NoteList from '../components/NoteList';
import Button from '../components/ui/Button';
import NoteContext from '../contexts/NoteContext';

export default function Home({ notes }) {
    const { setCurrentPage } = useContext(NoteContext);
    const styles = StyleSheet.create({
        homeContainer: {
            flex: 1,
        },
        pageHeader: {
            flex: 1,
            marginBottom: 50,
            gap: 5,
        },
        pageTitleText: {
            fontSize: 40,
            fontWeight: '900',
            textAlign: 'center',
        },
        addNoteButton: {
            padding: 10,
        },
        notesContainer: {
            flex: 9,
        },
        emptyNotes: {
            container: {
                flex: 1,
                justifyContent: 'center',
            },
            text: {
                fontSize: 80,
                fontWeight: '900',
                textAlign: 'center',
            },
        },
    });

    return (
        <View style={styles.homeContainer}>
            <View style={styles.pageHeader}>
                <Text style={styles.pageTitleText}>Note App</Text>
                <Button
                    text="Add Note"
                    onPress={() => {
                        setCurrentPage('add');
                    }}
                    buttonStyle={styles.addNoteButton}
                />
            </View>
            <View style={styles.notesContainer}>
                {notes.length > 0 ? (
                    <NoteList notes={notes} />
                ) : (
                    <View style={styles.emptyNotes.container}>
                        <Text style={styles.emptyNotes.text}>No Notes</Text>
                    </View>
                )}
            </View>
        </View>
    );
}
