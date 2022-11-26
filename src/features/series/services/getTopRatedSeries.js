import { TMDB } from "../../../config/tmdb";
import { seriesAdapter } from "../adapter/adapter";


export const getTopRatedSeries = async () => {
  const res = await TMDB.api(TMDB.path.series.top_rated)
  return await seriesAdapter(res.data.results)
};
