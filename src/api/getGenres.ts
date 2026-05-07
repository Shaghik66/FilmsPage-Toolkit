import { CreateAPI } from "./api";

class GenresAPI extends CreateAPI {
  getGenres() {
    return this.getAPI().get(
      `/genre/movie/list?api_key=${this.apiKey}&language=en-US`,
    );
  }
}

const genresAPI = new GenresAPI();
export { genresAPI };
