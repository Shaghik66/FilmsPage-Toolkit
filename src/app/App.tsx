import { useEffect } from "react";
import { filmsThunkCreator } from "../store/genresSlices";
import { moviesThunk } from "../store/moviesSlice";
import { useTypes } from "../hooks/useTypes";

function App() {
  const { useAppDispatch, useAppSelector } = useTypes();
  const dispatch = useAppDispatch();
  const { genres } = useAppSelector((state) => state.genresData);
  const { results } = useAppSelector((state) => state.moviesData);

  useEffect(() => {
    dispatch(filmsThunkCreator());
    dispatch(moviesThunk());
  }, []);

  return <></>;
}

export default App;
