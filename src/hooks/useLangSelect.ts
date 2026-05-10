import type { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch, useAppSelector } from "./useTypes";
import { setLang } from "../store/langSlice";

export const useLangSelect = () => {
  const dispatch = useAppDispatch();
  const { lang } = useAppSelector((state) => state.lang);

  const handleSelect = (e: SelectChangeEvent) => {
    dispatch(setLang(e.target.value));
  };

  return { lang, handleSelect };
};
