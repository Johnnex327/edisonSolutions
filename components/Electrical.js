import React from "react";
import { useEffect } from "react";
import BloqueTresImagenes from "./BloqueTresImagenes";
import styles from "../styles/Home.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Construccion = ({ electrical, titulo }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      /* data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine" */
      className={`${styles.contenedor_servicios} contenedor`}
    >
      <h1>{titulo}</h1>
      <div className={styles.contenedor_renovaciones}>
        {electrical.map((entrada) => (
          <div  className={styles.contenedor_bloqueTresImagenes}>
            <BloqueTresImagenes key={entrada._id} entrada={entrada} />
          </div>
        ))}
      </div>

      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className={styles.contenedor_boton}
      >
        <button className={styles.boton}>
          <span>See More</span>
        </button>
      </div>
    </div>
  );
};

export default Construccion;
