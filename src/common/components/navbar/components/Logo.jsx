import React from 'react'
import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";

const Logo = ({logo}) => {
  return (
    <Link to={"/"}>
      <img className={styles.logo} src={logo}></img>
    </Link>
  )
}

export default Logo