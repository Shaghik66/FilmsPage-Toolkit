import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { filmsThunkCreator } from "../store/genresSlices";
import { moviesThunk } from "../store/moviesSlice";

function App() {
  const dispatch = useDispatch();
  const { genres } = useSelector((state: unknown) => state.genresData);
  const { results } = useSelector((state: unknown) => state.moviesData);

  useEffect(() => {
    dispatch(filmsThunkCreator());
    dispatch(moviesThunk())
  }, []);

  return <></>;
}

export default App;
