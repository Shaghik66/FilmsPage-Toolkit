export interface IGenres {
  id: number;
  name: string;
}

export interface IMovieObj {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  softcore: boolean;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovies  {
  page: number | null;
  results: IMovieObj[];
  total_pages: number | null;
  total_results: number | null;
  result: null | IMovieObj;
}
