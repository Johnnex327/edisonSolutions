import React, { useEffect } from "react";
import BloqueTresImagenes from "./BloqueTresImagenes";
import styles from "../styles/Home.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Menbresias = ({ renovacion, titulo }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        /* data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" */
        className={`${styles.contenedor_servicios_renovacion}`}
      >
        <div className={styles.titulo_renovaciones}>
          <h1>Membresias</h1>
        </div>

        <div className={styles.contenedor_renovaciones}>
          {renovacion.map((entrada) => (
            <BloqueTresImagenes key={entrada._id} entrada={entrada} />
          ))}
        </div>

        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className={styles.contenedor_boton}
        >
          <button className={`${styles.btn} ${styles.btn_up}`}>See More</button>
        </div>
      </div>

      {/* <div className={styles.border}></div> */}
    </>
  );
};

export default Menbresias;
