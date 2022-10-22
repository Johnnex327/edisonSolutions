import { React, useEffect} from "react";
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
        <div className={styles.contenido_imagen}>
          <div className={styles.boton_dentro_de_imagen}>
            <Link href="#" className="prueba">Get a Quote</Link>
          </div>
        </div>

        <style jsx>{`
          section {
            background-image: url(${imagen.url});
            background-size: cover;
            width: 300px;
            height: 200px;
          }
          section:hover {
            background-image: linear-gradient(
                to right,
                rgb(0 0 0 / 0.5),
                rgb(0 0 0 / 0.5)
              ),
              url(${imagen.url});
          }
        `}</style>
      </section>

      <div className={styles.descripcion}>
        <h2>{entrada.titulo}</h2>
        <p>{entrada.descripcion}</p>
      </div>
    </div>
  );
};

export default BloqueTresImagenes;
