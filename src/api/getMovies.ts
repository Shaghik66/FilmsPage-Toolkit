import { CreateAPI } from "./api";

class MoviesAPI extends CreateAPI {
  getMovies() {
    return this.getAPI().get(
      `discover/movie?api_key=${this.apiKey}&language=en-US&page=${1}`,
    );
  }
  getOneMovie(id: string) {
    return this.getAPI().get(
      `/movie/${id}?api_key=${this.apiKey}&language=en-US`,
    );
  }
  searchMovie(text: string) {
    return this.getAPI(text).get(
      `search/movie?api_key=${this.apiKey}&query=${text}`,
    );
  }
}

const moviesAPI = new MoviesAPI();

export default moviesAPI;
