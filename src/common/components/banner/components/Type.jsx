import React from 'react'
import styles from "../styles/Banner.module.css";

const Type = ({type, logo}) => {
  return (
    <div className={styles.type}>
      <img src={logo}></img>
      <p>{type}</p>
    </div>
  )
}

export default Type