import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useTypes";
import Box from "@mui/material/Box";
import { useLangSelect } from "../../../hooks/useLangSelect";
import { moviesThunk } from "../../../store/moviesSlice";
import { CardsContainer } from "../../organisms/CardsContainer/CardsContainer";

export const Home = () => {
  const { lang } = useLangSelect();
  const dispatch = useAppDispatch();
  const { results } = useAppSelector((state) => state.moviesData);
  const [page, setPage] = useState(10);
  const [loading, setLoading] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight * 1 && !loading) {
      setLoading(true);

      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);

      await dispatch(moviesThunk({ lang, page }));

      window.scrollTo({ top: 0, behavior: "smooth" });

      setLoading(false);
    };

    fetchMovies();
  }, [lang, page, dispatch]);

  return (
    <Box>
      <CardsContainer results={results} />
    </Box>
  );
};
