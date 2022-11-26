import React, { useContext } from "react";
import useFetch from "../../../common/hooks/useFetch";
import { getPopularSeries } from "../services/getPopularSeries";
import { getTrendingSeries } from "../services/getTrendingSeries";
import { getTopRatedSeries } from "../services/getTopRatedSeries";
import Banner from "../../../common/components/banner/Banner";
import Slider from "../../../common/components/slider/Slider";
import { TrailerContext } from "../../trailer/context/TrailerContext";
import Trailer from "../../../common/components/trailer/Trailer";
import { getSerieTrailer } from "../services/getSerieTrailer";


const Series = () => {
  const {
    data: popularSeries,
    isLoading: popularSeriesLoading,
    error: popularSeriesError,
  } = useFetch(getPopularSeries);

  const {
    data: topRatedSeries,
    isLoading: topRatedSeriesLoading,
    error: topRatedSeriesError,
  } = useFetch(getTopRatedSeries);

  const {
    data: trendingSeries,
    isLoading: trendingSeriesLoading,
    error: trendingSeriesError,
  } = useFetch(getTrendingSeries);

  const {stateTrailer} = useContext(TrailerContext)

  return (
    <>
      <Banner data={popularSeries[0]} type={'SERIES'} />
      <div style={{ padding: "0 10px" }}>
        <Slider title="Popular series" data={popularSeries} />
        <Slider title="Top rated" data={topRatedSeries} />
        <Slider title="Trending" data={trendingSeries} />
      </div>
      {stateTrailer.show && <Trailer type="SERIES" service={getSerieTrailer}/>}
    </>
  );
};

export default Series;
