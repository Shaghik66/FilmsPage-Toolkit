import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { oneMovieThunk } from "../../../store/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/useTypes";
import { useLangSelect } from "../../../hooks/useLangSelect";

export const Movie = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { result } = useAppSelector((state) => state.moviesData);
  const { lang } = useLangSelect();

  useEffect(() => {
    dispatch(oneMovieThunk({id, lang}));
  }, [id, lang]);

  return <div>Movie</div>;
};
