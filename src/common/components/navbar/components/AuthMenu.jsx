import React from 'react'
import styles from "../styles/Navbar.module.css";

const AuthMenu = ({}) => {
  return (
    <ul className={styles.menu}>
      <li>🔎</li>
      <li>🔔</li>
      <li>Hi, clientName!</li>
      <li>🎃</li>
    </ul>
  )
}

export default AuthMenu