import { 
    getFirestore, 
    collection,
    doc, 
    getDoc, 
    addDoc,
    updateDoc, 
    arrayUnion, 
    deleteField, 
    deleteDoc,
    serverTimestamp} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getCurrUserId } from './auth'
import { deleteNoteState, addNoteState, editNoteState } from "../redux/notesRedux";

const db = getFirestore();

async function createNote(dispatch, noteData){

    const { title, text } = noteData;

    try{
        const userUid = getCurrUserId();
        console.log('userUid: ', userUid);
        const docRef = await addDoc(collection(db, userUid ), {
            title,
            text,
            createdDate: serverTimestamp()
        });
        console.log("ADDED NOTE" ,docRef.id);
        dispatch(addNoteState({...noteData, _id: docRef.id}))
        return docRef;
    }
    catch(error) {
        console.log(error);
        throw error;
    }
}

async function deleteNote(dispatch, noteId){

    try{
        const userUid = getCurrUserId();
        const docRef = await deleteDoc(doc(db, userUid, noteId));
        dispatch(deleteNoteState(noteId))
        return docRef;
    }
    catch(error) {
        console.log(error);
        throw error;
    }
}

async function editNote(dispatch, noteData){

    const { _id, title, text } = noteData;
    try{
        const userUid = getCurrUserId();
        const noteRef = doc(db, userUid , _id);
        const updatedNote = await updateDoc(noteRef, {
          title,
          text,
        });
        console.log(updatedNote);
        dispatch(editNoteState(noteData));
    }
    catch(error){
        console.log("EDIT NOTE: ", error);
        throw error;
    }
}

export { createNote, deleteNote, editNote};