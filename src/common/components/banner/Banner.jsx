import React, { useState } from "react";
import { BannerContainer } from "./styles/BannerContainer"
import Type from "./components/Type";
import Title from "./components/Title";
import Buttons from "./components/Buttons";
import Description from "./components/Description";
import Classification from "./components/Classification";
import logoN from "../../../assets/logoN.png"
import Trailer from "../trailer/Trailer";


const Banner = ({data, type}) => {
  return (
      <BannerContainer image={data?.backdrop}>
        <Type type={type} logo={logoN}/>
        <Title title={data?.name}/>
        <Classification rating={data?.rating}/>
        <Buttons data={data}/>
        <Description description={data?.description} />
      </BannerContainer>
  );
};

export default Banner;
