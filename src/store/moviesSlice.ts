import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import moviesAPI from "../api/getMovies";
import type { IMovies, IMovieObj } from "../shared/types/genralTypes";

export const moviesThunk = createAsyncThunk(
  "moviesThunk",
  async ({lang, page} : {lang: string, page : number}) => {
    const response = await moviesAPI.getMovies({lang, page});
    return response.data.results;
  },
);

export const oneMovieThunk = createAsyncThunk(

  "oneMovieThunk",
  async ({ id, lang }: { id: string | undefined; lang: string }) => {
    const response = await moviesAPI.getOneMovie({id, lang});
    return response.data;
  },
);

export const searchMovieThunk = createAsyncThunk(
  "searchMovieThunk",
  async ({ text, lang }: { text: string; lang: string }) => {
    const response = await moviesAPI.searchMovie({text, lang});
    return response.data.results;
  },
);

const initialState: IMovies = {
  page: null,
  results: [],
  total_pages: null,
  total_results: null,
  result: null ,
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
