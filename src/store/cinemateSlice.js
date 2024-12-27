import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerData : [],
};

export const cinemateSlice = createSlice({
  name: "cinemate",
  initialState,
  reducers: {
    setBannerData : (state, action) => {
      state.bannerData = action.payload;
    },
  },
});

export const {setBannerData} = cinemateSlice.actions;
export default cinemateSlice.reducer; 