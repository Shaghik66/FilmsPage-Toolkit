import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { filmsThunkCreator } from "../store/genresSlices";
import { moviesThunk } from "../store/moviesSlice";
import { router } from "./routes/route";
import { useAppDispatch, useAppSelector } from "../hooks/useTypes";

function App() {
  const dispatch = useAppDispatch();
  const { genres } = useAppSelector((state) => state.genresData);
  const { results } = useAppSelector((state) => state.moviesData);

  useEffect(() => {
    dispatch(filmsThunkCreator());
    dispatch(moviesThunk());
  }, []);

  return <RouterProvider router={router}>
    
  </RouterProvider>;
}

export default App;
