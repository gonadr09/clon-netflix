import axios from "axios";
import { ENV } from "../../src/environments/environment";

export const TMDB = {
  api: axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
      api_key: ENV.API_KEY,
    },
    timeout: 5000,
  }),
  path: {
    movies: {
      baseURL: "https://api.themoviedb.org/3/movie/",
      popular: "/movie/popular",
      top_rated: "/movie/top_rated",
      trending: "/trending/movie/week",
      upcoming: "/movie/upcoming",
    },
    series: {
      baseURL: "https://api.themoviedb.org/3/tv/",
      popular: "/tv/popular",
      top_rated: "/tv/top_rated",
      trending: "/trending/tv/week",
    },
    trending:{
      baseURL: "https://api.themoviedb.org/3/tv/",
      all: "/trending/all/week",
    },
    images: {
      baseURL: "https://image.tmdb.org/t/p/",
      original: "https://image.tmdb.org/t/p/original",
      backdrop_high: "https://image.tmdb.org/t/p/w1280",
      backdrop_low: "https://image.tmdb.org/t/p/w300",
      poster_high: "https://image.tmdb.org/t/p/w500",
      poster_low: "https://image.tmdb.org/t/p/w185",
    },
  },
  api_key: ENV.API_KEY,
};

/*
https://api.themoviedb.org/3/movie/436270/videos?api_key=1670af919802b53d2fff3ebd95ed4a94&language=en-US
https://api.themoviedb.org/3/movie/436270?api_key=1670af919802b53d2fff3ebd95ed4a94&language=en-US
1670af919802b53d2fff3ebd95ed4a94
*/