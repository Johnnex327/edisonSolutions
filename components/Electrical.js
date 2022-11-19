import React, { useEffect } from "react";
import BloqueTresImagenes from "./BloqueTresImagenes";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css";

const Construccion = ({ electrical, titulo }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        /* data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine" */
        className={`${styles.contenedor_servicios_electrical}`}
      >
        <h1>{titulo}</h1>

        <div className={styles.contenedor_renovaciones}>
          {electrical.map((entrada) => (
            <BloqueTresImagenes key={entrada._id} entrada={entrada} />
          ))}
        </div>

        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className={styles.contenedor_boton}
        >
          <Link href="/services">
            <button className={`${styles.btn} ${styles.btn_up_beige}`}>
              See More
            </button>
          </Link>
        </div>
      </div>
     
    </>
  );
};

export default Construccion;
