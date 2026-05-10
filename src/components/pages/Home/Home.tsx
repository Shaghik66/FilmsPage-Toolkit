import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useTypes";
import Box from "@mui/material/Box";
import { useLangSelect } from "../../../hooks/useLangSelect";
import { moviesThunk } from "../../../store/moviesSlice";
import { CardsContainer } from "../../organisms/Header/CardsContainer/CardsContainer";

export const Home = () => {
  const { lang } = useLangSelect();
  const dispatch = useAppDispatch();
  const { results } = useAppSelector((state) => state.moviesData);

  console.log(results);
  useEffect(() => {
    dispatch(moviesThunk(lang));
  }, [lang]);

  return (
    <Box>
      <CardsContainer results={results} />
    </Box>
  );
};
