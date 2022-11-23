import React from 'react'
import Button from './Button'
import styles from "../styles/Banner.module.css";

const Buttons = () => {
  return (
    <div className={styles.buttons}>
      <Button name="▶ Watch"/>
      <Button name="+ My list"/>
    </div>
  )
}

export default Buttons