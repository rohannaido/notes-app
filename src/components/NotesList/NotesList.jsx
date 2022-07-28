import './NotesList.css'
import NoteCard from '../NoteCard/NoteCard';


const NotesList = ({notes}) => {
    
    return (
        <div className="notesList">
            {notes && notes.map(item => <NoteCard noteData={item} />)}
        </div>
    )
}

export default NotesList;