import { configureStore } from "@reduxjs/toolkit";
import { cinemateSlice } from "./cinemateSlice";

const store = configureStore({
  reducer: {
    cinemateData : cinemateSlice
  },
});


export default store;