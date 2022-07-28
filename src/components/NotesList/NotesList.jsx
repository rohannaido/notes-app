import './NotesList.css'
import NoteCard from '../NoteCard/NoteCard';


const NotesList = ({notes}) => {
    
    console.log(notes);
    return (
        <div className="notesList">
            {notes.map(item => <NoteCard noteData={item} />)}
        </div>
    )
}

export default NotesList;