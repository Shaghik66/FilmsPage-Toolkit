import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { filmsThunkCreator } from "../store/genresSlices";
import { moviesThunk } from "../store/moviesSlice";
import { useTypes } from "../hooks/useTypes";
import { router } from "./routes/route";

function App() {
  const { useAppDispatch, useAppSelector } = useTypes();
  const dispatch = useAppDispatch();
  const { genres } = useAppSelector((state) => state.genresData);
  const { results } = useAppSelector((state) => state.moviesData);

  useEffect(() => {
    dispatch(filmsThunkCreator());
    dispatch(moviesThunk());
  }, []);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
