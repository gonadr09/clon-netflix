import React from 'react'
import styles from "../styles/Logo.module.css";

const Logo = ({logo}) => {
  return (
    <img className={styles.logo} src={logo}></img>
  )
}

export default Logo