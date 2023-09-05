import { createSlice } from "@reduxjs/toolkit";

export const newsFeedSlice = createSlice({
  name: "newsFeed",
  initialState: {
    newsFeedInfo: {
      data: [],
      loading: false,
      error: null,
    },
  },
  reducers: {
    getNewsFeedStart: (state, action) => {
      state.newsFeedInfo.loading = true;
    },
    getNewsFeedSuccess: (state, action) => {
      state.newsFeedInfo.loading = false;
      state.newsFeedInfo.data = action.payload;
      state.newsFeedInfo.error = null;
    },
    getNewsFeedFail: (state, action) => {
      state.newsFeedInfo.loading = false;
      state.newsFeedInfo.error = action.payload;
    },
  },
});
export const { getNewsFeedStart, getNewsFeedSuccess, getNewsFeedFail } =
  newsFeedSlice.actions;
export default newsFeedSlice.reducer;


//APi call



