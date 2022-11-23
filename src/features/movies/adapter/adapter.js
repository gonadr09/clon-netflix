import { TMDB } from "../../../config/tmdb";
import { getMovieTrailer } from "../services/getMovieTrailer";

export const moviesAdapter = (movies) => {
  return movies.map((movie) => {
    return {
      id: movie.id,
      name: movie.title,
      description: movie.overview,
      date: movie.release_date,
      poster: TMDB.path.images.poster_high + movie.poster_path,
      backdrop: TMDB.path.images.backdrop_high + movie.backdrop_path,
      rating: movie.vote_average,
    };
  });
};
