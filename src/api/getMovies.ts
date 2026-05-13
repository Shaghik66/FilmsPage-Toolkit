import { CreateAPI } from "./api";

class MoviesAPI extends CreateAPI {
  getMovies({lang, page} : {lang: string, page : number}) {

    return this.getAPI().get(
      `/discover/movie?api_key=${this.apiKey}&language=${lang}&page=${page}`,
    );
  }
  getOneMovie({id, lang}: {id: string | undefined, lang : string}) {
    return this.getAPI().get(
      `/movie/${id}?api_key=${this.apiKey}&language=${lang}`,
    );
  }
  searchMovie({text, lang}: {text: string | null, lang : string} ) {
    return this.getAPI().get(
      `/search/movie?api_key=${this.apiKey}&query=${text}&language=${lang}`,
    );
  }
}

const moviesAPI = new MoviesAPI();

export default moviesAPI;
