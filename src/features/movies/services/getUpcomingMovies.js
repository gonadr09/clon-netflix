import { TMDB } from "../../../config/tmdb";
import { moviesAdapter } from "../adapter/adapter";


export const getUpcomingMovies = async () => {
  const res = await TMDB.api(TMDB.path.movies.upcoming)
  return await moviesAdapter(res.data.results)
};

export const getUpcomingMoviesLocal = () => {
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

