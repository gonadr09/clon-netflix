import React, { useContext } from 'react'
import styles from "../styles/Banner.module.css";
import { TrailerContext } from '../../../../features/trailer/context/TrailerContext'

const Buttons = ({data}) => {
  const {handleTrailer} = useContext(TrailerContext)

  return (
    <div className={styles.buttons}>
      <button onClick={() => handleTrailer(data)}>▶ Watch</button>
      <button onClick={() => handleTrailer(data)}>+ Details</button>
    </div>
  )
}

export default Buttons