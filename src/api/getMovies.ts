import { CreateAPI } from "./api";

class MoviesAPI extends CreateAPI {
  getMovies() {
    return this.getAPI().get(
      `discover/movie?api_key=${this.apiKey}&language=en-US&page=${1}`,
    );
  }
}

const moviesAPI = new MoviesAPI();

export default moviesAPI;
