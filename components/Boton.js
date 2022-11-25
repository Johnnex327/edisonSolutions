import React from 'react'
import styles from '../styles/Boton.module.css'

const Boton = ({text}) => {
  return (
    <button className={`${styles.btn} ${styles.btn_up_beige}`}>
      {text}
    </button>
  )
}

export default Boton