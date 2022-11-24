import React from "react";
import useFetch from "../../../../common/hooks/useFetch";
import { getPopularMovies } from "../getPopularMovies";
import Banner from "../../../../common/components/banner/Banner";
import Slider from "../../../../common/components/slider/Slider";
import { getUpcomingMovies } from "../getUpComingMovies";
import { getTopRatedMovies } from "../getTopRatedMovies";

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
    data: upcomingMovies,
    isLoading: upcomingMoviesLoading,
    error: upcomingMoviesError,
  } = useFetch(getUpcomingMovies);

  return (
    <>
      <Banner data={popularMovies[2]} />
      <div style={{ padding: "0 10px" }}>
        <Slider title="Popular movies" data={popularMovies} />
        <Slider title="Top rated" data={topRatedMovies} />
        <Slider title="Upcoming" data={upcomingMovies} />
      </div>
    </>
  );
};

export default Movies;
