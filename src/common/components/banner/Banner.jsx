import React from "react";
import useFetch from "../../hooks/useFetch";
import { getPopularMovies } from "../../../features/movies/services/getPopularMovies";
import { TMDB } from "../../../config/tmdb";
import { logger } from "../../../utils/logger";


const Banner = () => {
  const { isLoading, data, error } = useFetch(getPopularMovies);

  let url_img = ''
  
  if (isLoading === false){
      logger(data, 'API res')
      const backdrop_path = data[0].backdrop_path
      url_img = TMDB.path.image + backdrop_path
  }

  return (
    <>
      <h1>Banner</h1>
      <div style={{backgroundImage: `url('${url_img}')`, height: '500px', backgroundSize: 'cover'}}></div>

    </>
  );
};

export default Banner;
