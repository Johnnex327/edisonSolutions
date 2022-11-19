import { React, useEffect } from "react";
import styles from "../styles/WeCanDo.module.css";

/* Libreria de animacion AOS */
import AOS from "aos";
import "aos/dist/aos.css";

const WeCanDo = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className={styles.contenedor_seccion}>
        <div className={styles.seccion}>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className={styles.lado1}
          >
            <div className={styles.bordes}></div>
          </div>

          <div className={styles.lado2}>
            <div className={styles.contenido_lado2}>
              <h2>WHAT WE DO</h2>
              <h1>Building Professionals</h1>
              <div className={styles.barra}></div>
              <p>
                Our technical staff are highly trained in all areas of
                remodeling and construction and electrical services. We can
                remodel interiors, kitchens, bathrooms, bedrooms, basements,
                businesses, among others. We carry out installation of wood and
                metal structure, drywall, new floor and handyman services
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.contenedor_seccion2}>
        <div className={styles.seccion2}>
          <div className={styles.seccion_lado2}>
            <div className={styles.contenido_seccion_lado2}>
              <h2>WHAT WE DO</h2>
              <h1>High Quality Services</h1>
              <p>
                At Edison Solutions we are proud to have the approval of all our
                clients, who have felt satisfied fulfilling that dream of a
                beautiful home. Thanks to the fact that our professionals are in
                charge of taking care of even the smallest detail to offer loyal
                customers quality work.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className={styles.seccion_lado1}
          >
            <div className={styles.bordes}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeCanDo;
