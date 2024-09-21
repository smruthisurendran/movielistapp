import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDataPage } from "../services/dataApi";

import { FORBIDDEN_MSG } from "../core/utils/constant";

//Async thunk to fetch the images
export const loadContent = createAsyncThunk(
  "content/loadContent",
  async (pageNum, { rejectWithValue }) => {
    try {
      const response = await fetchDataPage(pageNum);
      if (response.forbidden) {
        return rejectWithValue(FORBIDDEN_MSG);
      }
      return response.data.page["content-items"].content;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//Defined the initial state
const initialState = {
  content: [],
  currentPage: 1,
  hasMore: true,
  status: false,
  searchQuery: "",
  error: null,
  forbiddenPages: false,
  navTitle: "",
};

//Creation of slice
const movieSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setNavTitle: (state, action) => {
      state.navTitle = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadContent.pending, (state, action) => {
        state.status = true;
        state.error = null;
      })
      .addCase(loadContent.fulfilled, (state, action) => {
        if (action.payload.length > 0) {
          state.content = [...state.content, ...action.payload];
          state.currentPage += 1;
          state.status = false;
        } else {
          state.hasMore = false;
        }
      })
      .addCase(loadContent.rejected, (state, action) => {
        state.status = false;
        if (action.payload === FORBIDDEN_MSG) {
          state.forbiddenPages = true;
        } else {
          state.error = action.payload;
        }
      });
  },
});

export const { setSearchQuery, setNavTitle } = movieSlice.actions;
export default movieSlice.reducer;
