import React from 'react'
import styles from '../styles/Contacto.module.css'

import { Field, Form, Formik } from "formik";

const Formulario_Contacto = () => {
  return (
    <div className={styles.contenedor_formulario}>
    <div className={styles.formulario_lado1}></div>

    <div className={styles.formulario_lado2}>
      <Formik
        initialValues={{
          name: "" // OR cliente.nombre ?? cliente.nombre : "",
        
        }}
      >
        <Form className={styles.form}>
          <div className={styles.formulario}>
            <h1>CONTACT US</h1>

            <label htmlFor="name">Names</label>
            <Field
              id="name"
              type="text"
              placeholder="Your Name"
              name="name"
            />

            <label htmlFor="name">E-mail</label>
            <Field
              id="email"
              type="email"
              placeholder="Your Email"
              name="email"
            />

            <label htmlFor="name">Subject</label>
            <Field
              id="subject"
              type="text"
              placeholder="Your Subject"
              name="subject"
            />

            <label htmlFor="name">Message</label>
            <Field
              id="message"
              type="text"
              placeholder="Your Message"
              name="message"
            />

            <button className={`${styles.btn} ${styles.btn_up_beige}`}>
              SEND MESSAGE
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  </div>
  )
}

export default Formulario_Contacto