import { configureStore } from "@reduxjs/toolkit";
import genresSlice from "./genresSlices";
import movieSlice from "./moviesSlice";
import langSlice from "./langSlice";

const store = configureStore({
  reducer: {
    genresData: genresSlice,
    moviesData: movieSlice,
    lang: langSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
