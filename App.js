import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import NoteContext from './contexts/NoteContext';
import Add from './screens/Add';
import Edit from './screens/Edit';
import Home from './screens/Home';

export default function App() {
    const [currentPage, setCurrentPage] = useState(Pages.HOME);
    const [notes, setNotes] = useState([]);
    const addNote = (note) => {
        setNotes([...notes, note]);
    };
    const deleteNote = (id) => {
        setNotes(notes.filter((note) => note.ID !== id));
    };
    const updateNote = (newNote) => {
        setNotes(
            notes.map((note) => {
                if (note.ID === newNote.ID) {
                    return newNote;
                }
                return note;
            })
        );
    };

    const [note, setNote] = useState({
        title: '',
        content: '',
    });

    return (
        <View style={styles.container}>
            <NoteContext.Provider
                value={{
                    deleteNote,
                    setCurrentPage,
                    note,
                    setNote,
                    addNote,
                    updateNote,
                }}
            >
                <ScreenSwitcher
                    page={currentPage}
                    notes={notes}
                    activeNote={note}
                />
            </NoteContext.Provider>
        </View>
    );
}

const ScreenSwitcher = ({ page, notes }) => {
    switch (page) {
        case 'home':
            return <Home notes={notes} />;
        case 'add':
            return <Add />;
        case 'edit':
            return <Edit />;
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 48,
    },
});
