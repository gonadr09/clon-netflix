import { TMDB } from "../../../config/tmdb";


export const getPopularMovies = async () => {
  const res = await TMDB.api(TMDB.path.movies.popular)
  return res.data.results
};
