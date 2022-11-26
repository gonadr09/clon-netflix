import React, { useContext } from 'react'
import styles from "./styles/Trailer.module.css";
import Type from "../banner/components/Type";
import Title from "../banner/components/Title";
import Description from "../banner/components/Description";
import Classification from "../banner/components/Classification";
import logoN from "../../../assets/logoN.png"
import useFetch from '../../hooks/useFetch';
import { TrailerContext } from '../../../features/trailer/context/TrailerContext';

const Trailer = ({type, service}) => {
  const {stateTrailer, handleTrailer} = useContext(TrailerContext)
  const { data: youtubeTrailer, isLoading, error } = useFetch(() => service(stateTrailer.data.id));

return (
    <>
      <div className={styles.trailer}>
        <div className={styles.trailer_description}>
          <Type type={type} logo={logoN}/>
          <Title title={stateTrailer.data?.name}/>
          <Description description={stateTrailer.data?.description} />
          <Classification rating={stateTrailer.data?.rating}/>
          <a href={youtubeTrailer} target='_blank'>▶ Play</a>
        </div>
        <div>
          <iframe width="560" height="315" src={youtubeTrailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
      </div>
      <button className={styles.close_button} onClick={handleTrailer}>x</button>
    </>

)
}

export default Trailer