import React from "react";
import Formulario_Contacto from "../components/Formulario_Contacto";
import Layout from "../components/Layout";
import styles from '../styles/Contacto.module.css';

const Contact = () => {
  return (
    <Layout pagina="Contact">
      
      <div className={styles.fondo_contacto}>
        <div className={styles.titulo}>
          <h1>
            CONTACT <span>US</span>
          </h1>
          {/* <p className={frase ? `${styles.mostrar}` : `${styles.ocultar}`}>
            WE DO THIS FOR YOU!
          </p> */}
        </div>
      </div>

      <Formulario_Contacto/>
    </Layout>
  );
};

export default Contact;
