import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { oneMovieThunk } from "../../../store/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/useTypes";


export const Movie = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { result } = useAppSelector((state) => state.moviesData);

  console.log(result);

  useEffect(() => {
    dispatch(oneMovieThunk(id));
  }, [id]);

  return <div>Movie</div>;
};
