import './NoteCard.css'
import { AiOutlineDelete } from 'react-icons/ai'
import { deleteNote } from '../../firebase/service'
import { useDispatch } from 'react-redux';

const NoteCard = ({noteData}) => {
    
    const { _id, title, text } = noteData;
    const dispatch = useDispatch();

    return (
        <div className="noteCard">
            <h4 className='noteCard_title'>{title}</h4>
            <p className='noteCard_text'>{text}</p>
            <div className='noteCard_bottomRow'>
                <span className='noteCard_deleteIcon'>
                    <AiOutlineDelete onClick={() => deleteNote(dispatch, _id)} />
                </span>
            </div>
        </div>
    )
}

export default NoteCard;