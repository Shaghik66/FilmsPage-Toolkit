import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import moviesAPI from "../api/getMovies";
import type { IMovies, IMovieObj } from "../shared/types/genralTypes";

export const moviesThunk = createAsyncThunk("moviesThunk", async () => {
  const response = await moviesAPI.getMovies();
  return response.data.results;
});

export const oneMovieThunk = createAsyncThunk(
  "oneMovieThunk",
  async (id: string) => {
    const response = await moviesAPI.getOneMovie(id);
    return response.data;
  },
);

export const searchMovieThunk = createAsyncThunk(
  "searchMovieThunk",
  async (text: string) => {
    const response = await moviesAPI.searchMovie(text);
    console.log(response.data.results);
  },
);

const initialState: IMovies = {
  page: null,
  results: [],
  total_pages: null,
  total_results: null,
  result: null,
};

const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      moviesThunk.fulfilled,
      (state, action: PayloadAction<IMovieObj[]>) => {
        state.results = action.payload;
      },
    );
    builder.addCase(oneMovieThunk.fulfilled, (state, action) => {
      state.result = action.payload;
    });
    builder.addCase(searchMovieThunk.fulfilled, (state, action) => {
      state.results = action.payload;
    });
  },
});

export default movieSlice.reducer;
