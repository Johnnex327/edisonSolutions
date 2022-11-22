import React, { useEffect } from "react";
import BloqueTresImagenes from "./BloqueTresImagenes";
import styles from "../styles/Home.module.css";

import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Construccion = ({ construccion, titulo }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        /* data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine" */
        className={`${styles.contenedor_servicios_construccion}`}
      >
        <div className={`${styles.titulo_pagina} ${styles.barra}`}>
        <h1>{titulo}</h1>
      </div>

        <div className={styles.contenedor_construccion}>
          {construccion.map((entrada) => (
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

      {/* <div className={styles.border}>
      </div> */}
    </>
  );
};

export default Construccion;
