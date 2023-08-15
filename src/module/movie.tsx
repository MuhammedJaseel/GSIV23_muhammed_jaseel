import axios from "axios";

const API_KEY = "438400c30e3414e39e96e2a9f7960e14";
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Mzg0MDBjMzBlMzQxNGUzOWU5NmUyYTlmNzk2MGUxNCIsInN1YiI6IjY0ZGEzMTZkMDAxYmJkMDBhZGQ0MDRiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.md7nVDDf5AjIDd6bBtxmrD8T1UeR_e9qdMWXjohFoYU";

export const getMovieList = async () => {
  return axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=438400c30e3414e39e96e2a9f7960e14",
    { headers: {}, params: {} }
  );
};
export const getMovieListBySearch = async (v: any) => {
  return axios.get(
    "https://api.themoviedb.org/3/search/movie?api_key=438400c30e3414e39e96e2a9f7960e14&query=" +
      v,
    { headers: {}, params: {} }
  );
};
