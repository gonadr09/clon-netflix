import { TMDB } from "../../../config/tmdb";
import { moviesAdapter } from "../adapter/adapter";


export const getTrendingMovies = async () => {
  const res = await TMDB.api(TMDB.path.movies.trending)
  return await moviesAdapter(res.data.results)
};
