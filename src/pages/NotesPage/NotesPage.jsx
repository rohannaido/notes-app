import './NotesPage.css'
import NotesList from "../../components/NotesList/NotesList";
import { useState, useEffect } from 'react';
import { getUserNotes } from '../../firebase/fetchData';
import { createNote } from '../../firebase/service';
import { useDispatch, useSelector } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';

const NotesPage = () => {

    const dispatch = useDispatch();
    const notesData = useSelector(state => state.notes.allNotes);
    const userId = useSelector(state => {
        return state.user.value.uid});
    
    const [ showCreateNote, setShowCreateNote] = useState(false);
    const [ newNoteItem, setNewNoteItem ] = useState({
        title: "",
        text: "",
    });

    return (
        <div className="notesPage">

            <div className="notesPage_createNotePanel">
                {!userId ? <span className='notesPage_loginMessage' >Please login to see your notes...</span> : 
                !showCreateNote ? 
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
                            createNote(dispatch, newNoteItem).then(() => {
                                // getUserNotes(dispatch, userId);
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
            
            {notesData && <NotesList notes={notesData} />}
        </div>
    )

}

export default NotesPage;