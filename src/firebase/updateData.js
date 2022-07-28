import { 
    getFirestore, 
    collection,
    doc, 
    getDoc, 
    addDoc,
    updateDoc, 
    arrayUnion, 
    deleteField, 
    serverTimestamp} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getCurrUserId } from './auth'

const db = getFirestore();

async function createNote(noteData){

    const { title, text } = noteData;

    try{
        const userUid = getCurrUserId();
        console.log('userUid: ', userUid);
        const docRef = await addDoc(collection(db, userUid ), {
            title,
            text,
            createdDate: serverTimestamp()
        });
        console.log(docRef);
        return docRef;
    }
    catch(error) {
        console.log(error);
        throw error;
    }
}

export { createNote };