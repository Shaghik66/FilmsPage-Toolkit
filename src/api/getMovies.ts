import { CreateAPI } from "./api";

class GetMovies extends CreateAPI {
  getMovies() {
    return this.getAPI().get(
      `discover/movie?api_key=${this.apiKey}&language=en-US&page=${1}`,
    );
  }
}

const getMovies = new GetMovies();

export default getMovies;
