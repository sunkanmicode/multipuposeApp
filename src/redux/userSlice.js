import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "authUser",
  initialState: {
    // email: "softamos@gmail.com",
    // password: "softamos",
    data:{},
    isLoggedIn: false,
  },
  reducers: {
    LoginUser: (state, action) => {
        // state.email = action.payload.email
        // state.password = action.payload.password;
        state.data = action.payload
        state.isLoggedIn = true

    },
  },
});
export const { LoginUser } = usersSlice.actions;
export default usersSlice.reducer;
