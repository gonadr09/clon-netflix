import React, { useContext } from 'react'
import styles from "../styles/Navbar.module.css";
import { AuthContext } from '../../../../features/auth/context/AuthContext';
import perfil from "../../../../assets/perfil.png";


const AuthMenu = () => {
  const { state, logout} = useContext(AuthContext)
  if (state.isAuth) {
    return (
      <ul className={styles.menu}>
        <li>{state.username}</li>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
        </svg>
        {/* <img src={perfil}></img> */}
        <li><button onClick={logout}>Logout</button></li>
      </ul>
    )
  }
}

export default AuthMenu