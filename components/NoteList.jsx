import { FlatList } from 'react-native';
import NoteCard from './NoteCard';

export default function NoteList({ notes }) {
    console.log(notes);
    return (
        <FlatList
            data={notes}
            keyExtractor={(item) => item.ID}
            renderItem={({ item }) => <NoteCard note={item} />}
        />
    );
}
