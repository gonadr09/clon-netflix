import React from 'react'
import styles from "../styles/Navbar.module.css";

const Menu = ({}) => {
  return (
    <ul className={styles.menu}>
      <li>Home</li>
      <li>TV Series</li>
      <li>Movies</li>
      <li>Recently Added</li>
      <li>My List</li>
    </ul>
  )
}

export default Menu