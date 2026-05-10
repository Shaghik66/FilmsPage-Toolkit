import type { IMovieObj } from "../../../../shared/types/genralTypes";
import { CardContainer } from "../../../molecules/CardContainer";
import { Box } from "@mui/material";

type CardsContainerPropsType = {
  results: IMovieObj[];
};

export const CardsContainer = ({ results }: CardsContainerPropsType) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: " wrap",
        gap: "10px",
        padding: "10px",
      }}
    >
      {results.map((result) => (
        <CardContainer key={result.id} result={result} />
      ))}
    </Box>
  );
};
