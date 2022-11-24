import { React, useEffect } from "react";
import styles from "../styles/Home.module.css";

import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const BloqueTresImagenes = ({ entrada }) => {


  useEffect(() => {
    AOS.init();
  }, []);



  const { titulo, imagen } = entrada;
  return (
    <div className={styles.tarjetas}>
      <section
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="500"
        className={styles.seccion}
      >
        <div className={styles.opacidad}>
          <div className={styles.contenido_imagen}>

          <div>
          <button className={`${styles.btn} ${styles.btn_up}`}>
            Get quote
          </button>
          </div>
        </div>
        </div>

        

        <style jsx>{`
          section {
            background-image: url(${imagen.url});
            background-size: cover;
            width: 100%;
            height: 250px;
          }
          
        `}</style>
      </section>

      <div className={styles.container_descripcion}>
        <div className={styles.descripcion}>
          <h2>{entrada.titulo}</h2>
          <p>{entrada.descripcion}</p>
        </div>
      </div>

    </div>
  );
};

export default BloqueTresImagenes;
