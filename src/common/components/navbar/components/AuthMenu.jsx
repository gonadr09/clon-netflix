import React, { useContext } from 'react'
import styles from "../styles/Navbar.module.css";
import { AuthContext } from '../../../../features/auth/context/AuthContext';

const AuthMenu = () => {
  const { state, logout} = useContext(AuthContext)
  if (state.isAuth) {
    return (
      <ul className={styles.menu}>
        <li>{state.username}</li>
        <li><button onClick={logout}>Logout</button></li>
      </ul>
    )
  }
}

export default AuthMenu