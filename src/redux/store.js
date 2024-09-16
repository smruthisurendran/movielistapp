import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";

const store = configureStore({
  reducer: {
    content: movieReducer,
  },
});

export default store;
