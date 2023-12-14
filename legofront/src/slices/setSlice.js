import { createSlice } from "@reduxjs/toolkit";

const setSlice = createSlice({
  name: "sets",
  initialState: {
    posts: [],
  },
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
  },
});

export const { setPosts } = setSlice.actions;
export const selectPosts = (state) => state.sets.posts;

export default setSlice.reducer;
