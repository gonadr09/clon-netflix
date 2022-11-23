import React from "react";
import useFetch from "../../hooks/useFetch";
import { getPopularMovies } from "../../../features/movies/services/getPopularMovies";
import { getMovieTrailer } from "../../../features/movies/services/getMovieTrailer";
import { BannerContainer } from "./styles/BannerContainer"
import Type from "./components/Type";
import Title from "./components/Title";
import Buttons from "./components/Buttons";
import Description from "./components/Description";
import Classification from "./components/Classification";
import Trailer from "./components/Trailer";
import logoN from "../../../assets/logoN.png"


const Banner = ({data}) => {
  
  
  /*
  const { data: trailerUrl, trailerLoading, trailerError } = useFetch(async () => await getMovieTrailer(id));
      <Trailer trailerUrl={trailerUrl}/>

  */
  return (
    <BannerContainer image={data?.backdrop}>
      <Type type='MOVIES' logo={logoN}/>
      <Title title={data?.name}/>
      <Buttons id={data?.id}/>
      <Description description={data?.description} />
      <Classification rating={data?.rating}/>
    </BannerContainer>
  );
};

export default Banner;
