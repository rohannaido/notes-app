import './NotesPage.css'
import NotesList from "../../components/NotesList/NotesList";
import { useState, useEffect } from 'react';
// import notes from '../../data/notes';
import { getUserNotes } from '../../firebase/fetchData';
import { createNote } from '../../firebase/service';

const NotesPage = () => {

    const [notesArr, setNotesArr] = useState([]);
    const [ showCreateNote, setShowCreateNote] = useState(false);
    const [ newNoteItem, setNewNoteItem ] = useState({
        title: "",
        text: "",
    })

    const loadNotes = async () => {
        const data = await getUserNotes();
        console.log(data);
        setNotesArr(data);
    }

    useEffect(() => {
        loadNotes();

    },[])

    return (
        <div className="notesPage">

            <div className="notesPage_createNotePanel">
                {!showCreateNote ? 
                <input className='notesPage_takeNoteInputButton' type='text' placeholder='Take a note...' onClick={() => 
                    setShowCreateNote(true)} 
                    onChange={(e) => {
                        setNewNoteItem(prev => ({...prev, text: e.target.value }))
                        setShowCreateNote(true)} } 
                    value={newNoteItem.text} />
                
                :
                
                <div className='notesPage_takeNoteDiv'>
                    <input className='notesPage_takeNoteInput title' type='text' placeholder='Title' 
                        onChange={(e) => { setNewNoteItem(prev => ({...prev, title: e.target.value }))}} 
                        value={newNoteItem.title}
                    />
                    <textarea className='notesPage_takeNoteInput text' type='text' placeholder='Take a note...' 
                        onChange={(e) => { setNewNoteItem(prev => ({...prev, text: e.target.value }))}} 
                        value={newNoteItem.text}
                        autoFocus/>
                    <div className='notesPage_takeNoteBottomRow'>
                        <button className='notesPage_saveButton' onClick={() => { 
                            createNote(newNoteItem).then(() => {
                                loadNotes();
                                setNewNoteItem({
                                    title: "",
                                    text: "",
                                })
                                setShowCreateNote(false);
                            }).catch(error => console.log(error))
                            }}>
                            Save
                        </button>
                    </div>
                </div>
                }
            </div>
            
            <NotesList notes={notesArr} />
        </div>
    )

}

export default NotesPage;