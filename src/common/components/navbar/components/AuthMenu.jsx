import React from 'react'
import styles from "../styles/Navbar.module.css";

const AuthMenu = ({}) => {
  return (
    <ul className={styles.menu}>
      <li>🔎</li>
      <li>🔔</li>
      <li>client1 logged</li>
      <li>🎃</li>
    </ul>
  )
}

export default AuthMenu