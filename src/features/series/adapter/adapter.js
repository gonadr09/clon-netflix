import { TMDB } from "../../../config/tmdb";

export const seriesAdapter = (series) => {
  return series.map((series) => {
    return {
      id: series.id,
      name: series.name,
      description: series.overview,
      date: series.release_date,
      poster: TMDB.path.images.poster_high + series.poster_path,
      backdrop: TMDB.path.images.backdrop_high + series.backdrop_path,
      rating: series.vote_average,
    };
  });
};
