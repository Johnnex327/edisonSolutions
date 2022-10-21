import styles from "../styles/Team.module.css";
import { React, useEffect } from "react";
import Image from "next/image";

/* Libreria de animacion AOS */
import AOS from "aos";
import "aos/dist/aos.css";

/* React Icons */
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Team = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={`${styles.contenedor_teamWork} contenedor`}>
      <h1>Meet the Team Work</h1>
      <div className={styles.divisor}>
        <div
          data-aos="fade-up"
          data-aos-duration="0"
          className={styles.tarjeta}
        >
          <div className={styles.tarjeta1}>
            <Image width={400} height={300} src="/img/ceo.jpg" />
          </div>
          <div className={styles.contenedor_descripcion}>
            <h2>Edison Naranjo</h2>
            <p>CEO</p>
            <div className={styles.contenedor_iconos}>
              <a href="https://www.facebook.com/Edison-Solutions-LLC-100320772656843" target="blank">
                <FaFacebook className={`${styles.icono} ${styles.facebook}`} />
              </a>

              <a href="http://twitter.com" target="blank">
                <FaTwitterSquare className={styles.icono} />
              </a>

              <a href="https://www.instagram.com/edisonsolutions/" target="blank">
                <FaInstagramSquare className={styles.icono}
              />
              </a>
              
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className={styles.tarjeta}
        >
          <div>
            <Image
              width={400}
              height={300}
              layout={"responsive"}
              src="/img/manager.jpg"
            />
          </div>
          <div className={styles.contenedor_descripcion}>
            <h2>Geomyra Tenezaca</h2>
            <p>Vice President</p>

            <div className={styles.contenedor_iconos}>
              <a href="https://www.facebook.com/Edison-Solutions-LLC-100320772656843" target="blank">
                <FaFacebook className={`${styles.icono} ${styles.facebook}`} />
              </a>

              <a href="http://twitter.com" target="blank">
                <FaTwitterSquare className={styles.icono} />
              </a>

              <a href="https://www.instagram.com/edisonsolutions/" target="blank">
                <FaInstagramSquare className={styles.icono}
              />
              </a>
              
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className={styles.tarjeta}
        >
          <div>
            <Image width={400} height={300} src="/img/ingeniero.jpg" />
          </div>
          <div className={styles.contenedor_descripcion}>
            <h2>Xavier Alonso</h2>
            <p>Ingennier</p>
            <div className={styles.contenedor_iconos}>
              <a href="https://www.facebook.com/Edison-Solutions-LLC-100320772656843" target="blank">
                <FaFacebook className={`${styles.icono} ${styles.facebook}`} />
              </a>

              <a href="http://twitter.com" target="blank">
                <FaTwitterSquare className={styles.icono} />
              </a>

              <a href="https://www.instagram.com/edisonsolutions/" target="blank">
                <FaInstagramSquare className={styles.icono}
              />
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
