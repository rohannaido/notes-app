import './NoteCard.css'

const NoteCard = ({noteData}) => {
    
    const { title, text } = noteData;

    return (
        <div className="noteCard">
            <h4 className='noteCard_title'>{title}</h4>
            <p className='noteCard_text'>{text}</p>
        </div>
    )
}

export default NoteCard;