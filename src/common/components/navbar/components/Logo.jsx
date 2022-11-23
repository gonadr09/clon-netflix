import React from 'react'
import styles from "../styles/Navbar.module.css";

const Logo = ({logo}) => {
  return (
    <img className={styles.logo} src={logo}></img>
  )
}

export default Logo