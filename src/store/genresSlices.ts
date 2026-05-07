import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { genresAPI } from "../api/getGenres";
import type { IGenres } from "../shared/types/genralTypes";


export const filmsThunkCreator = createAsyncThunk("genres", async () => {
  const response = await genresAPI.getGenres();
  return response.data.genres;
});

interface stateType {
  genres: IGenres[];
}

const initialState: stateType = {
  genres: [],
};

const genresSlice = createSlice({
  name: "genresSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      filmsThunkCreator.fulfilled,
      (state, action: PayloadAction<IGenres[]>) => {
        state.genres = action.payload;
      },
    );
  },
});

export default genresSlice.reducer;
