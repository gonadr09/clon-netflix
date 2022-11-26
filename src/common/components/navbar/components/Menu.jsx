import React, { useContext } from 'react'
import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from '../../../../features/auth/context/AuthContext';

const Menu = () => {
  const { state } = useContext(AuthContext)
  if (state.isAuth) {
    return (
      <ul className={styles.menu}>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/tv"}>TV Series</Link></li>
        <li><Link to={"/movies"}>Movies</Link></li>
      </ul>
    )
  }
}

export default Menu