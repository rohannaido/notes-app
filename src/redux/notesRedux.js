import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    allNotes: [],
  },
  reducers: {
    addAllNotes: (state, action) => {
        console.log("FETCH ALL FOR NOTES STATE ");
        state.allNotes = [...action.payload];
    },
    deleteNoteState: (state, action) => {
        console.log("DELETE REDUCERRR");
        state.allNotes = [...state.allNotes.filter(item => (item._id != action.payload))];
    },
    addNoteState: (state, action) => {
      console.log("ADD NOTE REDUCER ");
      state.allNotes.unshift(action.payload)
    },
    clearNotesState: (state) => {
      state.allNotes = [];
    },
    editNoteState: (state, action) => {
      console.log("EDIT NOTE REDUCER ");
      const { _id, title, text } = action.payload;
      state.allNotes.map(item => {
          if(item._id === _id){
            item.title = title;
            item.text = text;
          }
      });
    }
  },
});

export const { addAllNotes, deleteNoteState, addNoteState, clearNotesState, editNoteState } = notesSlice.actions;
export default notesSlice.reducer;