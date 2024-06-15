import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import NoteContext from './contexts/NoteContext';
import Add from './screens/Add';
import Edit from './screens/Edit';
import Home from './screens/Home';

export default function App() {
    const [currentPage, setCurrentPage] = useState('home');
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

    const [activeNote, setActiveNote] = useState({
        title: '',
        content: '',
        ID: 0,
    });

    return (
        <View style={styles.container}>
            <NoteContext.Provider
                value={{ deleteNote, setCurrentPage, setActiveNote }}
            >
                <ScreenSwitcher
                    page={currentPage}
                    notes={notes}
                    onAdd={addNote}
                    onUpdate={updateNote}
                    activeNote={activeNote}
                    setCurrentPage={setCurrentPage}
                />
            </NoteContext.Provider>
        </View>
    );
}

const ScreenSwitcher = ({
    page,
    notes,
    onAdd,
    setCurrentPage,
    onUpdate,
    activeNote,
}) => {
    switch (page) {
        case 'home':
            return <Home setCurrentPage={setCurrentPage} notes={notes} />;
        case 'add':
            return <Add onAdd={onAdd} setCurrentPage={setCurrentPage} />;
        case 'edit':
            return (
                <Edit
                    onUpdate={onUpdate}
                    activeNote={activeNote}
                    setCurrentPage={setCurrentPage}
                />
            );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 48,
    },
});
