import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import moviesAPI from "../api/getMovies";

export const moviesThunk = createAsyncThunk("moviesThunk", async () => {
  const response = await moviesAPI.getMovies();
  return response.data;
});

const initialState = {
  results: {},
};

const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(moviesThunk.fulfilled, (state, action) => {
      state.results = action.payload;
    });
  },
});

export default movieSlice.reducer;
