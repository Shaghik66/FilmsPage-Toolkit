import { configureStore } from "@reduxjs/toolkit";
import genresSlice from "./genresSlices";
import movieSlice from "./moviesSlice";

const store = configureStore({
  reducer: {
    genresData: genresSlice,
    moviesData: movieSlice,
  },
});

export { store };
