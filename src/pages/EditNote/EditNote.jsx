import { useEffect } from 'react';
import './EditNote.css'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { editNote } from '../../firebase/service';

const EditNote = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const noteId = location.pathname.split('/')[2];
    const data = useSelector(state => state.notes.allNotes.find((item) => item._id === noteId));
    const dispatch = useDispatch();
    const [noteData, setNoteData] = useState(data)
    useEffect(() => {

    },[])

    return (
        <div className='editNote'>
            <form className='editNote_form'>
                <label>
                    <span className='editNote_labelText'>Title</span>
                    <input className='editNote_titleInput' placeholder="Title" value={noteData.title} onChange={(e) => setNoteData(prev => 
                        ({...prev, title: e.target.value})) } />
                </label>
                <label>
                    <span className='editNote_labelText'>Text</span>
                    <textarea className='editNote_textInput' placeholder="Take a note..." value={noteData.text} onChange={(e) => setNoteData(prev => 
                        ({...prev, text: e.target.value})) } />
                </label>
                <div className='editNote_bottomRow'>
                    <button className='editNote_saveButton' onClick={(e) => {
                        e.preventDefault();
                        console.log(noteData);
                        editNote(dispatch, noteData);
                        navigate('/');
                    }}>
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditNote;