import './NotesPage.css'
import NotesList from "../../components/NotesList/NotesList";
import { useState } from 'react';
import notes from '../../data/notes';
import { v4 as uuid } from 'uuid';

const NotesPage = () => {

    const [notesArr, setNotesArr] = useState(notes);
    const [ showCreateNote, setShowCreateNote] = useState(false);
    const [ newNoteItem, setNewNoteItem ] = useState({
        title: "",
        text: "",
    })

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
                            setNotesArr(prev => ([newNoteItem, ...prev]) ); 
                            setNewNoteItem({
                                title: "",
                                text: "",
                            })
                            setShowCreateNote(false);
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