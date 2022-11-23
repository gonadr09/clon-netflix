import React from 'react'
import styles from "../styles/Banner.module.css";

const Trailer = ({trailerUrl}) => {
  return (
    <div className={styles.video}>
      <iframe width="560" height="315" src={trailerUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  )
}

export default Trailer