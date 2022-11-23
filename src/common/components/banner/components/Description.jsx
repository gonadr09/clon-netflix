import React from 'react'
import styles from "../styles/Banner.module.css";

const Description = ({description}) => {
  return (
    <p className={styles.description}>{description}</p>
  )
}

export default Description