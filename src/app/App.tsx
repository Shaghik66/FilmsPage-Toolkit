import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { filmsThunkCreator } from "../store/genresSlices";
import { moviesThunk } from "../store/moviesSlice";
import { router } from "./routes/route";
import { useAppDispatch, useAppSelector } from "../hooks/useTypes";
import { useLangSelect } from "../hooks/useLangSelect";

function App() {
  const { lang } = useLangSelect();
  const dispatch = useAppDispatch();
  const { genres } = useAppSelector((state) => state.genresData);
  const { results } = useAppSelector((state) => state.moviesData);

  useEffect(() => {
    dispatch(filmsThunkCreator());
    dispatch(moviesThunk(lang));
  }, [lang]);

  return <RouterProvider router={router}>

  </RouterProvider>;
}

export default App;
