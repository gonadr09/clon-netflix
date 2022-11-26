import React, { useContext} from "react";
import useFetch from "../../../common/hooks/useFetch";
import { getPopularMovies } from "../services/getPopularMovies";
import { getUpcomingMovies } from "../services/getUpComingMovies";
import { getTrendingMovies } from "../services/getTrendingMovies";
import { getTopRatedMovies } from "../services/getTopRatedMovies";
import Banner from "../../../common/components/banner/Banner";
import Slider from "../../../common/components/slider/Slider";
import Trailer from "../../../common/components/trailer/Trailer";
import { TrailerContext } from "../../trailer/context/TrailerContext";
import { getMovieTrailer } from "../services/getMovieTrailer";


const Movies = () => {
  const {
    data: popularMovies,
    isLoading: popularMoviesLoading,
    error: popularMoviesError,
  } = useFetch(getPopularMovies);

  const {
    data: topRatedMovies,
    isLoading: topRatedMoviesLoading,
    error: topRatedMoviesError,
  } = useFetch(getTopRatedMovies);

  const {
    data: trendingMovies,
    isLoading: trendingMoviesLoading,
    error: trendingMoviesError,
  } = useFetch(getTrendingMovies);

  const {
    data: upcomingMovies,
    isLoading: upcomingMoviesLoading,
    error: upcomingMoviesError,
  } = useFetch(getUpcomingMovies);

  const {stateTrailer} = useContext(TrailerContext)

  return (
    <>
      <Banner data={popularMovies[2]} type="MOVIES" />
      <div style={{ padding: "0 10px" }}>
        <Slider title="Popular movies" data={popularMovies} />
        <Slider title="Top rated" data={topRatedMovies} />
        <Slider title="Trending" data={trendingMovies} />
        <Slider title="Upcoming" data={upcomingMovies} />
      </div>
    {stateTrailer.show && <Trailer type="MOVIES" service={getMovieTrailer}/>}
    </>
  );
};

export default Movies;
