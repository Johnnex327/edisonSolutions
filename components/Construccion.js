import React, { useEffect } from "react";
import BloqueTresImagenes from "./BloqueTresImagenes";
import styles from "../styles/Home.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Construccion = ({ construccion, titulo }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={`${styles.contenedor_servicios} contenedor`}>
      <h1>{titulo}</h1>

      <div
        /* data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" */
        className={styles.contenedor_renovaciones}
      >
        {construccion.map((entrada) => (
            <BloqueTresImagenes key={entrada.id} entrada={entrada} />
        ))}
      </div>

      <div
        data-aos="fade-left"
        data-aos-duration="5000"
        className={styles.contenedor_boton}
      >
        <button className={styles.boton}>See More</button>
      </div>
    </div>
  );
};

export default Construccion;
