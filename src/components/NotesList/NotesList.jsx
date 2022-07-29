import './NotesList.css'
import NoteCard from '../NoteCard/NoteCard';


const NotesList = ({notes}) => {
    
    return (
        <div className="notesList">
            {notes && notes.map(item => (item ? <NoteCard noteData={item} key={item._id} /> : ''))}
        </div>
    )
}

export default NotesList;