import { configureStore } from "@reduxjs/toolkit";
import cinemateReducer from "./cinemateSlice";

const store = configureStore({
  reducer: {
    cinemateData : cinemateReducer
  },
});


export default store;