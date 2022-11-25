import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Services.module.css";
import Formulario_Contacto from "../components/Formulario_Contacto";
import Image from 'next/image';

import { FaPhoneSquare } from "react-icons/fa";
import Boton from "../components/Boton";


import AOS from "aos";
import "aos/dist/aos.css";


import BtnWhatsappFlotante from "../components/BtnWhatsappFlotante";

const Services = () => {
  const [frase, setFrase] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFrase(true);
    }, 1000);
  });

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout pagina="Services">

      {/* <BtnWhatsappFlotante/> */}

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

          <div className={styles.fila} data-aos="fade-up"
            data-aos-duration="1000">
            <div>
              <div className={`${styles.columna} ${styles.kitchen}`}>
                <div className={styles.contenido}>
                  <p>
                    We make all kinds of kitchen styles, you choose the kitchen of your dreams
                  </p>
                  <div>
                    <button className={`${styles.btn} ${styles.btn_up_beige}`}>
                      GET A QUOTE
                    </button>
                  </div>
                </div>
              </div>
              <h2>Kitchen</h2>
            </div>

            <div>
              <div className={`${styles.columna} ${styles.livingRoom}`}>
                <div className={styles.contenido}>
                  <p>
                    A living room speaks volumes about the class of the owners, we make a modern and elegant room for you.
                  </p>
                  <div>
                    <button className={`${styles.btn} ${styles.btn_up_beige}`}>
                      GET A QUOTE
                    </button>
                  </div>
                </div>
              </div>
              <h2>Living Room</h2>
            </div>

            <div>
              <div className={`${styles.columna} ${styles.bedRoom}`}>
                <div className={styles.contenido}>
                  <p>
                    Rest is necessary for our vitality on a daily basis, that is why we turn your place of rest into a place of calm. You choose the design and we make it come true
                  </p>
                  <div>
                    <button className={`${styles.btn} ${styles.btn_up_beige}`}>
                      GET A QUOTE
                    </button>
                  </div>
                </div>
              </div>
              <h2>Bedroom</h2>
            </div>

            <div>
              <div className={`${styles.columna} ${styles.banios}`}>
                <div className={styles.contenido}>
                  <p>
                    We build and renovate bathrooms with the best quality materials, for a long useful life.
                  </p>
                  <div>
                    <button className={`${styles.btn} ${styles.btn_up_beige}`}>
                      GET A QUOTE
                    </button>
                  </div>
                </div>
              </div>
              <h2>Bathroom</h2>
            </div>
          </div>

          <div className={styles.fila} data-aos="fade-down"
            data-aos-duration="1000">
            <div>
              <div className={`${styles.columna} ${styles.bussiness}`}>
                <div className={styles.contenido}>
                  <p>
                    Renewing the image of your business or office significantly increases the attention of potential customers, that's why we offer construction and renovation of your site.
                  </p>
                  <div>
                    <button className={`${styles.btn} ${styles.btn_up_beige}`}>
                      GET A QUOTE
                    </button>
                  </div>
                </div>
              </div>
              <h2>Offices</h2>
            </div>

            <div>
              <div className={`${styles.columna} ${styles.basement}`}>
                <div className={styles.contenido}>
                  <p>
                    We make sure that your basement is prepared for each change of season, so carry out maintenance, construction or renovation with us.
                  </p>
                  <div>
                    <button className={`${styles.btn} ${styles.btn_up_beige}`}>
                      GET A QUOTE
                    </button>
                  </div>
                </div>
              </div>
              <h2>Basement</h2>
            </div>
          </div>

          <h1>MASONRY</h1>

          <div className={styles.fila}
            data-aos="fade-up"
            data-aos-duration="1000">
            <div>
              <div className={`${styles.columna} ${styles.paint}`}>
                <div className={styles.contenido}>
                  <p>
                    Our staff are experts in their work, so we guarantee quality work and materials
                  </p>
                  <div>
                    <button className={`${styles.btn} ${styles.btn_up_beige}`}>
                      GET A QUOTE
                    </button>
                  </div>
                </div>
              </div>
              <h2>Paint</h2>
            </div>

            <div>
              <div className={`${styles.columna} ${styles.drywall}`}>
                <div className={styles.contenido}>
                  <p>
                    We carry out installation and maintenance of drywall of the best quality for a long useful life
                  </p>
                  <div>
                    <button className={`${styles.btn} ${styles.btn_up_beige}`}>
                      GET A QUOTE
                    </button>
                  </div>
                </div>
              </div>
              <h2>Drywall</h2>
            </div>

            <div>
              <div className={`${styles.columna} ${styles.woodFraming}`}>
                <div className={styles.contenido}>
                  <p>
                    We build wooden structures for your home or business, we have staff who will do a great job.
                  </p>
                  <div>
                    <button className={`${styles.btn} ${styles.btn_up_beige}`}>
                      GET A QUOTE
                    </button>
                  </div>
                </div>
              </div>
              <h2>Wood Framing</h2>
            </div>

            <div>
              <div className={`${styles.columna} ${styles.metalStudFraming}`}>
                <div className={styles.contenido}>
                  <p>
                    If you want a structure of better and more durable material, we offer construction and installation in the shortest possible time.
                  </p>
                  <div>
                    <button className={`${styles.btn} ${styles.btn_up_beige}`}>
                      GET A QUOTE
                    </button>
                  </div>
                </div>
              </div>
              <h2>Metal Stud Framing</h2>
            </div>
          </div>

          <div className={styles.fila} data-aos="fade-down"
            data-aos-duration="1000">
            <div>
              <div className={`${styles.columna} ${styles.newFlooring}`}>
                <div className={styles.contenido}>
                  <p>
                    We change the floor of your home, at the best price and quality that you can find
                  </p>
                  <div>
                    <button className={`${styles.btn} ${styles.btn_up_beige}`}>
                      GET A QUOTE
                    </button>
                  </div>
                </div>
              </div>
              <h2>New Flooring</h2>
            </div>



            <div>
              <div className={`${styles.columna} ${styles.handyman}`}>
                <div className={styles.contenido}>
                  <p>
                    Whether you need to fix a broken toilet or a leaky faucet, replace doors, fix fences, even mow the lawn and do yard work, as well as potentially hundreds of other tasks, we can help.
                  </p>
                  <div>
                    <button className={`${styles.btn} ${styles.btn_up_beige}`}>
                      GET A QUOTE
                    </button>
                  </div>
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

          <div className={styles.fila} data-aos="fade-up"
            data-aos-duration="1000">
            <div>
              <div
                className={`${styles.columna} ${styles.electricalInstallation}`}
              >
                <div className={styles.contenido}>
                  <p>
                    Starting from a good electrical installation, safety and productivity are ensured but it also leads to an analysis of energy savings. Our staff will make sure to enforce it.
                  </p>
                  <div>
                    <button className={`${styles.btn} ${styles.btn_up_beige}`}>
                      GET A QUOTE
                    </button>
                  </div>
                </div>
              </div>
              <h2>Electrical Installation</h2>
            </div>

            <div>
              <div className={`${styles.columna} ${styles.replaceLights}`}>
                <div className={styles.contenido}>
                  <p>
                    We carry out replacement and installation of lights, with products of the best quality.
                  </p>
                  <div>
                    <button className={`${styles.btn} ${styles.btn_up_beige}`}>
                      GET A QUOTE
                    </button>
                  </div>
                </div>
              </div>
              <h2>Replace Light</h2>
            </div>

            <div>
              <div className={`${styles.columna} ${styles.ilumination}`}>
                <div className={styles.contenido}>
                  <p>
                    Good lighting at home or in the office will prevent the eyes from being overstrained, and provide another facet of your home at night. We have lighting installation service for you.
                  </p>
                  <div>
                    <button className={`${styles.btn} ${styles.btn_up_beige}`}>
                      GET A QUOTE
                    </button>
                  </div>
                </div>
              </div>
              <h2>Ilumination</h2>
            </div>

            <div>
              <div className={`${styles.columna} ${styles.generalWiring}`}>
                <div className={styles.contenido}>
                  <p>
                    We carry out electrical outlet installation and different electrical works according to your needs.
                  </p>
                  <div>
                    <button className={`${styles.btn} ${styles.btn_up_beige}`}>
                      GET A QUOTE
                    </button>
                  </div>
                </div>
              </div>
              <h2>General Wiring</h2>
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
