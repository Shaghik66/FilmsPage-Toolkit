import type { IMovieObj } from "../../shared/types/genralTypes";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

type CardContainerPropsType = {
  result: IMovieObj;
};

const imgLink = "https://image.tmdb.org/t/p/w500/";

export const CardContainer = ({ result }: CardContainerPropsType) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <NavLink to={`/${result.id}`}>
        <CardMedia
          sx={{ height: 140 }}
          image={imgLink + result.poster_path}
          title="green iguana"
        />
      </NavLink>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {result.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {result.overview}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Film</Button>
      </CardActions>
    </Card>
  );
};
