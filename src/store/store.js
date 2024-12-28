import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "./cinemateSlice";

const store = configureStore({
  reducer: {
    cinemateData : bannerReducer
  },
});


export default store;