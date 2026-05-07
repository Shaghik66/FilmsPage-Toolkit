import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { filmsThunkCreator } from "../store/genresSlices";

function App() {
  const dispatch = useDispatch();
  const { genres } = useSelector((state: unknown) => state.genresData);

  useEffect(() => {
    dispatch(filmsThunkCreator());
  }, []);

  return <></>;
}

export default App;
