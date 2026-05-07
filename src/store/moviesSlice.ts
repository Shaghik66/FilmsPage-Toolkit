import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import moviesAPI from "../api/getMovies";
import type { IMovies, IMovieObj } from "../shared/types/genralTypes";

export const moviesThunk = createAsyncThunk("moviesThunk", async () => {
  const response = await moviesAPI.getMovies();
  return response.data.results;
});

const initialState: IMovies = {
  page: null,
  results: [],
  total_pages: null,
  total_results: null,
};

const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(moviesThunk.fulfilled, (state, action : PayloadAction<IMovieObj[]>) => {
      state.results = action.payload;
    });
  },
});

export default movieSlice.reducer;
