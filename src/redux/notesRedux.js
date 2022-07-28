import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    allNotes: [],
  },
  reducers: {
    addAllNotes: (state, action) => {
        state.allNotes = [...action.payload];
    },
    deleteNoteState: (state, action) => {
        console.log("deleteNotessss ",state.allNotes);
        state.allNotes = [...state.allNotes.filter(item => item._id != action.payload)];
    },
    addNoteState: (state, action) => {
      state.allNotes.unshift(action.payload)
    },
    clearNotesState: (state) => {
      state.allNotes = [];
    }
  },
});

export const { addAllNotes, deleteNoteState, addNoteState, clearNotesState } = notesSlice.actions;
export default notesSlice.reducer;