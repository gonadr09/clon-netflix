import { TMDB } from "../../../config/tmdb";
import { seriesAdapter } from "../adapter/adapter";


export const getTrendingSeries = async () => {
  const res = await TMDB.api(TMDB.path.series.trending)
  return await seriesAdapter(res.data.results)
};
