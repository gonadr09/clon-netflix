import React from 'react'
import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";
import netflixLogo from "../../../../assets/netflix.png";


const Logo = () => {
  return (
    <Link to={"/"}>
      <img className={styles.logo} src={netflixLogo}></img>
    </Link>
  )
}

export default Logo