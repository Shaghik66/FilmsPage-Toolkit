import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/useTypes";
import { useLangSelect } from "../../../hooks/useLangSelect";
import { oneMovieThunk } from "../../../store/moviesSlice";
import { MovieContainer } from "../../organisms/MovieContainer/MovieContainer";


export const Movie = () => {
  const { id } = useParams<{id :string | undefined}>();
  const dispatch = useAppDispatch();
  const { result }  = useAppSelector((state ) => state.moviesData);
  const { lang } = useLangSelect();

  useEffect(() => {
    dispatch(oneMovieThunk({ id, lang }));
  }, [id, lang]);

  return (
   <MovieContainer result={result}/>
  );
};
