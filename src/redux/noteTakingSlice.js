import { createSlice } from "@reduxjs/toolkit";

export const noteTakingSlice = createSlice({
  name: "noteTaking",
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {
    addNoteToList: (state, action) => {
      state.data.push(action.payload)
      
    },
    removeNote: (state, action) =>{
       state.data = state.data.filter((item) => item !== action.payload)
    }
  },
});
export const { addNoteToList, removeNote } = noteTakingSlice.actions;
export default noteTakingSlice.reducer;
