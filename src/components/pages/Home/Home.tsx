import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../hooks/useTypes";
import { searchMovieThunk } from "../../../store/moviesSlice";
import { useLangSelect } from "../../../hooks/useLangSelect";
import type { SelectChangeEvent } from "@mui/material";

export const Home = () => {
  const { lang } = useLangSelect();
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const neWText = (e: SelectChangeEvent) => {
    setText(e.target.value);
  };

  useEffect(() => {
    dispatch(searchMovieThunk({ text, lang }));
  }, [text, lang]);

  return (
    <div>
      <p>Home</p>
      <input value={text} type="text" onChange={neWText} />
    </div>
  );
};
