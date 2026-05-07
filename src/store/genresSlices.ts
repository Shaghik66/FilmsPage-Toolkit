import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { genresAPI } from "../api/getGenres";

export const filmsThunkCreator = createAsyncThunk("genres", async () => {
  const response = await genresAPI.getGenres();
  return  response.data.genres ;
});

const initialState = {
  genres: [],
};

const genresSlice = createSlice({
  name: "genresSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(filmsThunkCreator.fulfilled, (state, action) => {
      state.genres = action.payload;
    });
  },
});

export default genresSlice.reducer;
