import firebaseConfig from "./firebaseConfig.js";
import { initializeApp } from "firebase/app";
import { loginApp, signOutApp } from "./auth.js";
import { getUserNotes } from "./fetchData.js";
// import { updateHistory, clearHistory } from "./updateUserData.js";
import { createNote, deleteNote } from "./updateData.js";

const app = initializeApp(firebaseConfig);

export { loginApp, signOutApp, getUserNotes, createNote, deleteNote };