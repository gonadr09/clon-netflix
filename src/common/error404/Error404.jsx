import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/Error404.module.css'

const Error404 = () => {
  return (
    <div className={styles.error404}>
        <h1>Lost your way?</h1>
        <p>Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
        <Link to={"/movies"}>Home Page</Link>
    </div>
  )
}

export default Error404