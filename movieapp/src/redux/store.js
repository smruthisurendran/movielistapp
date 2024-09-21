import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";

//Redux store
const store = configureStore({
  reducer: {
    content: movieReducer,
  },
});

export default store;
