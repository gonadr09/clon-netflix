import React from 'react'
import { Link } from 'react-router-dom'

const error404 = () => {
  return (
    <div>
        <h1>Lost your way?</h1>
        <p>Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
        <Link to={"/"}>Home Page</Link>
    </div>
  )
}

export default error404