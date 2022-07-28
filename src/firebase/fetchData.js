import { 
    getFirestore, 
    collection, 
    doc, 
    getDoc,
    getDocs, 
    query,
    where 
} from "firebase/firestore"; 
import { getCurrUserId } from "./auth";
import { addAllNotes } from "../redux/notesRedux";

const db = getFirestore();

async function getUserNotes(dispatch, userId){

    try{
        const userUid = getCurrUserId() ? getCurrUserId() : userId;
        const querySnapshot = await getDocs(collection(db, userUid));

        const notes = [];
        querySnapshot.forEach((doc) => {
            const noteItem = {...doc.data(), createdDate: doc.data().createdDate.toString(), _id: doc.id};
            notes.push(noteItem);
        });
        dispatch(addAllNotes(notes));
        return notes;
    }
    catch(error){
        console.log(error);
        throw error;
    }

}

export { getUserNotes };