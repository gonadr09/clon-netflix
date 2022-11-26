import { TMDB } from "../../../config/tmdb";
import { seriesAdapter } from "../adapter/adapter";


export const getPopularSeries = async () => {
  const res = await TMDB.api(TMDB.path.series.popular)
  return await seriesAdapter(res.data.results)
};

