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

const db = getFirestore();

async function getUserNotes(){

    try{
        const userUid = getCurrUserId();
        const querySnapshot = await getDocs(collection(db, userUid));

        const notes = [];
        querySnapshot.forEach((doc) => {
            notes.push(doc.data());
        });
        return notes;
    }
    catch(error){
        console.log(error);
    }

}

export { getUserNotes };