import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { filmsThunkCreator } from "../store/genresSlices";
import { router } from "./routes/route";
import { useAppDispatch, useAppSelector } from "../hooks/useTypes";
import "./index.css"

function App() {

  const dispatch = useAppDispatch();
  const { genres } = useAppSelector((state) => state.genresData);


  useEffect(() => {
    dispatch(filmsThunkCreator());

  }, []);

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
