import { configureStore } from "@reduxjs/toolkit";
import genresSlice from "./genresSlices";
import movieSlice from "./moviesSlice";

const store = configureStore({
  reducer: {
    genresData: genresSlice,
    moviesData: movieSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export { store };
