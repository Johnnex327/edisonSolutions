import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Services.module.css";
import Formulario_Contacto from "../components/Formulario_Contacto";
import Image from 'next/image';

import { FaPhoneSquare } from "react-icons/fa";
import Boton from "../components/Boton";


import BtnWhatsappFlotante from "../components/BtnWhatsappFlotante";

const Services = () => {
  const [frase, setFrase] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFrase(true);
    }, 1000);
  });

  return (
    <Layout pagina="Services">

      <BtnWhatsappFlotante/>

      <div className={styles.fondo_services}>
        <div className={styles.titulo}>
          <h1>
            OUR <span>SERVICES</span>
          </h1>
          <p className={frase ? `${styles.mostrar}` : `${styles.ocultar}`}>
            WE DO THIS FOR YOU!
          </p>
        </div>
      </div>

      <div className={styles.contenedor}>
        <div className={styles.subContenedor}>

          <div className={styles.barra}>
            <h1>THE BEST QUALITY AND THE BEST PRICE</h1>
          </div>
          <h1>RENOVATIONS</h1>

          <div className={styles.fila}>
            <div>
              <div className={`${styles.columna} ${styles.kitchen}`}>
                <div className={styles.contenido}>
                  <p>
                    Etiam turpis mauris, imperdiet vel molestie a, feugiat eget
                    elit. Aenean in nisl blandit, dignissim ex id, pharetra
                    metus.
                  </p>
                  <Boton
                    text={'GET A FREE QUOTE'}
                  />
                </div>
              </div>
              <h2>Kitchen</h2>
            </div>

            <div>
              <div className={`${styles.columna} ${styles.livingRoom}`}>
                <div className={styles.contenido}>
                  <p>
                    Etiam turpis mauris, imperdiet vel molestie a, feugiat eget
                    elit. Aenean in nisl blandit, dignissim ex id, pharetra
                    metus.
                  </p>
                </div>
              </div>
              <h2>Living Room</h2>
            </div>

            <div>
              <div className={`${styles.columna} ${styles.bedRoom}`}>
                <div className={styles.contenido}>
                  <p>
                    Etiam turpis mauris, imperdiet vel molestie a, feugiat eget
                    elit. Aenean in nisl blandit, dignissim ex id, pharetra
                    metus.
                  </p>
                </div>
              </div>
              <h2>Bed Room</h2>
            </div>

            <div>
              <div className={`${styles.columna} ${styles.banios}`}>
                <div className={styles.contenido}>
                  <p>
                    Etiam turpis mauris, imperdiet vel molestie a, feugiat eget
                    elit. Aenean in nisl blandit, dignissim ex id, pharetra
                    metus.
                  </p>
                </div>
              </div>
              <h2>Bath Room</h2>
            </div>
          </div>

          <div className={styles.fila}>
            <div>
              <div className={`${styles.columna} ${styles.bussiness}`}>
                <div className={styles.contenido}>
                  <p>
                    Etiam turpis mauris, imperdiet vel molestie a, feugiat eget
                    elit. Aenean in nisl blandit, dignissim ex id, pharetra
                    metus.
                  </p>
                </div>
              </div>
              <h2>Bussiness</h2>
            </div>

            <div>
              <div className={`${styles.columna} ${styles.basement}`}>
                <div className={styles.contenido}>
                  <p>
                    Etiam turpis mauris, imperdiet vel molestie a, feugiat eget
                    elit. Aenean in nisl blandit, dignissim ex id, pharetra
                    metus.
                  </p>
                </div>
              </div>
              <h2>Basement</h2>
            </div>
          </div>

          <h1>MASONRY</h1>

          <div className={styles.fila}>
            <div>
              <div className={`${styles.columna} ${styles.paint}`}>
                <div className={styles.contenido}>
                  <p>
                    Etiam turpis mauris, imperdiet vel molestie a, feugiat eget
                    elit. Aenean in nisl blandit, dignissim ex id, pharetra
                    metus.
                  </p>
                </div>
              </div>
              <h2>Paint</h2>
            </div>

            <div>
              <div className={`${styles.columna} ${styles.drywall}`}>
                <div className={styles.contenido}>
                  <p>
                    Etiam turpis mauris, imperdiet vel molestie a, feugiat eget
                    elit. Aenean in nisl blandit, dignissim ex id, pharetra
                    metus.
                  </p>
                </div>
              </div>
              <h2>Drywall</h2>
            </div>

            <div>
              <div className={`${styles.columna} ${styles.woodFraming}`}>
                <div className={styles.contenido}>
                  <p>
                    Etiam turpis mauris, imperdiet vel molestie a, feugiat eget
                    elit. Aenean in nisl blandit, dignissim ex id, pharetra
                    metus.
                  </p>
                </div>
              </div>
              <h2>Wood Framing</h2>
            </div>

            <div>
              <div className={`${styles.columna} ${styles.metalStudFraming}`}>
                <div className={styles.contenido}>
                  <p>
                    Etiam turpis mauris, imperdiet vel molestie a, feugiat eget
                    elit. Aenean in nisl blandit, dignissim ex id, pharetra
                    metus.
                  </p>
                </div>
              </div>
              <h2>Metal Stud Framing</h2>
            </div>
          </div>

          <div className={styles.fila}>
            <div>
              <div className={`${styles.columna} ${styles.newFlooring}`}>
                <div className={styles.contenido}>
                  <p>
                    Etiam turpis mauris, imperdiet vel molestie a, feugiat eget
                    elit. Aenean in nisl blandit, dignissim ex id, pharetra
                    metus.
                  </p>
                </div>
              </div>
              <h2>New Flooring</h2>
            </div>

            <div>
              <div className={`${styles.columna} ${styles.siding}`}>
                <div className={styles.contenido}>
                  <p>
                    Etiam turpis mauris, imperdiet vel molestie a, feugiat eget
                    elit. Aenean in nisl blandit, dignissim ex id, pharetra
                    metus.
                  </p>
                </div>
              </div>
              <h2>Siding</h2>
            </div>

            <div>
              <div className={`${styles.columna} ${styles.handyman}`}>
                <div className={styles.contenido}>
                  <p>
                    Etiam turpis mauris, imperdiet vel molestie a, feugiat eget
                    elit. Aenean in nisl blandit, dignissim ex id, pharetra
                    metus.
                  </p>
                </div>
              </div>
              <h2>Handyman</h2>
            </div>

            {/* <div>
              <div className={`${styles.columna} ${styles.gutter}`}></div>
              <h2>Gutter</h2>
            </div> */}
          </div>

          <h1>ELECTRICAL</h1>

          <div className={styles.fila}>
            <div>
              <div
                className={`${styles.columna} ${styles.electricalInstallation}`}
              >
                <div className={styles.contenido}>
                  <p>
                    Etiam turpis mauris, imperdiet vel molestie a, feugiat eget
                    elit. Aenean in nisl blandit, dignissim ex id, pharetra
                    metus.
                  </p>
                </div>
              </div>
              <h2>Electrical Installation</h2>
            </div>

            <div>
              <div className={`${styles.columna} ${styles.replaceLights}`}>
                <div className={styles.contenido}>
                  <p>
                    Etiam turpis mauris, imperdiet vel molestie a, feugiat eget
                    elit. Aenean in nisl blandit, dignissim ex id, pharetra
                    metus.
                  </p>
                </div>
              </div>
              <h2>Replace Light</h2>
            </div>

            <div>
              <div className={`${styles.columna} ${styles.ilumination}`}>
                <div className={styles.contenido}>
                  <p>
                    Etiam turpis mauris, imperdiet vel molestie a, feugiat eget
                    elit. Aenean in nisl blandit, dignissim ex id, pharetra
                    metus.
                  </p>
                </div>
              </div>
              <h2>Ilumination</h2>
            </div>
          </div>

          <div className={styles.contenedor_need_sevices}>
            <h1>Do you need any services?</h1>
            <div className={styles.contenedor_Call_us}>
              <h2> Call Us: +1 347-619-7236</h2>
              <FaPhoneSquare className={styles.icono} />
              <Image
                src="/img/operadora.png"
                width={200}
                height={200}
                className={styles.operadora}
                alt='imagen operadora'
              />
            </div>
          </div>

        </div>
        <Formulario_Contacto />
      </div>
    </Layout>
  );
};

export default Services;
