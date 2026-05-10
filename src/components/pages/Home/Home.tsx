import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../hooks/useTypes";
import { searchMovieThunk } from "../../../store/moviesSlice";

export const Home = () => {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();
  const { search } = useAppDispatch((state ) => state.moviesData);

  const neWText = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    setText(text);
    console.log(text);
  };

  useEffect(() => {
    dispatch(searchMovieThunk(text))
  },[text]);

  return (
    <div>
      <p>Home</p>
      <input value={text} type="text" onChange={neWText} />
      <button onClick={handleClick}></button>
    </div>
  );
};
