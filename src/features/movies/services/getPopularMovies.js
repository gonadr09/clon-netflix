import { TMDB } from "../../../config/tmdb";
import { moviesAdapter } from "../adapter/adapter";
import { getMovieTrailer } from "./getMovieTrailer";


export const getPopularMovies = async () => {
  const res = await TMDB.api(TMDB.path.movies.popular)
  return await moviesAdapter(res.data.results)
};

export const getPopularMoviesLocal = () => {
  return [
    {
      id: 1,
      name: "The Shawshank Redemption"  
    },
    {
      id: 2,
      name: 'Godfather'
    }
  ]
}

