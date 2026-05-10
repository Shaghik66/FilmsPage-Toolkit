import type { IMovieObj } from "../../../shared/types/genralTypes";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";

const imgLink = "https://image.tmdb.org/t/p/w500/";

type MovieContainerPropsType = {
  result: IMovieObj;
};

export const MovieContainer = ({ result }: MovieContainerPropsType) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgLink + result?.poster_path}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {result?.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {result?.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};
