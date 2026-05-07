import { configureStore } from "@reduxjs/toolkit";
import genresSlice from "./genresSlices";

const store = configureStore({
  reducer: {
    genresData: genresSlice,
  },
});

export { store };
