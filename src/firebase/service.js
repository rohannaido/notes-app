import firebaseConfig from "./firebaseConfig.js";
import { initializeApp } from "firebase/app";
import { loginApp, signOutApp, createUser } from "./auth.js";
import { getUserNotes } from "./fetchData.js";
// import { updateHistory, clearHistory } from "./updateUserData.js";
import { createNote, deleteNote, editNote } from "./updateData.js";

const app = initializeApp(firebaseConfig);

export { loginApp, signOutApp, getUserNotes, createUser , createNote, deleteNote, editNote };