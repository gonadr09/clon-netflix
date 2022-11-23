import { TMDB } from "../../../config/tmdb";
import { moviesAdapter } from "../adapter/adapter";


export const getTopRatedMovies = async () => {
  const res = await TMDB.api(TMDB.path.movies.top_rated)
  return await moviesAdapter(res.data.results)
};

export const getTopRatedMoviesLocal = () => {
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

