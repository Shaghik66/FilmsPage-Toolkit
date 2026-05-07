import axios from "axios";

class CreateAPI {
  baseURL = "https://api.themoviedb.org/3";
  apiKey = "f36f23edf6e10fd2ddcf939916b1f67a";

  protected getAPI() {
    return axios.create({
      baseURL: this.baseURL,
    });
  }
}

export { CreateAPI };
