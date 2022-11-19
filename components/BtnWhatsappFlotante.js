import React from "react";
import styles from "../styles/BtnWhatsappFlotante.module.css";

import { FaWhatsapp } from "react-icons/fa";

const BtnWhatsappFlotante = () => {
  return (
    <div className={styles.etiqueta}>
      <div className={styles.container}>
        <h4>Whatsapp</h4>
        <FaWhatsapp className={styles.icono_flotante_whatsapp} />
      </div>
    </div>
  );
};

export default BtnWhatsappFlotante;
