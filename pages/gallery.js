import React from "react";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Gallery.module.css";
import BtnWhatsappFlotante from "../components/BtnWhatsappFlotante";
import Image from "next/image";

import ReactPlayer from "react-player";
/* import video1 from "../public/img/video/1.mp4"; */


import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  let imagenes = [
    require("../public/img/gallery/1.jpg"),
    require("../public/img/gallery/2.jpg"),
    require("../public/img/gallery/3.jpg"),
    require("../public/img/gallery/4.jpg"),
    require("../public/img/gallery/5.jpg"),
    require("../public/img/gallery/6.jpg"),
    require("../public/img/gallery/7.jpg"),
    require("../public/img/gallery/8.jpg"),
    require("../public/img/gallery/9.jpg"),
    require("../public/img/gallery/10.jpg"),
    require("../public/img/gallery/11.jpg"),
    require("../public/img/gallery/12.jpg"),
    require("../public/img/gallery/13.jpg"),
    require("../public/img/gallery/14.jpg"),
    require("../public/img/gallery/15.jpg"),
    require("../public/img/gallery/16.jpg"),
  ];

  const [frase, setFrase] = useState(false);
  const [renderVideo, setRenderVideo] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFrase(true);
    }, 1000);

    setRenderVideo(true);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout pagina="Gallery">

      {/* <BtnWhatsappFlotante/> */}

      <div className={styles.fondo_gallery}>
        <div className={styles.titulo}>
          <h1>
            OUR <span>GALLERY</span>
          </h1>
          <p className={frase ? `${styles.mostrar}` : `${styles.ocultar}`}>
            This is how our work is taking shape
          </p>
        </div>
      </div>

      <div className={styles.contenedor}>
        <div className={styles.barra}>
          <h1>BUILD OR REMODERL YOUR HOME OR BUSSINESS WITH US</h1>
        </div>

        <div className={styles.fila}>
          {imagenes.map((imagen, index) => {
            return (
              <div className={styles.container_image}
              data-aos="fade-right"
              data-aos-duration="1000"
              key={index}
              >
                <Image
                key={index}
                src={imagen}
                width={1024}
                height={1080}
                alt="Imagen"
                priority
              />
              </div>
              
            );
          })}
        </div>
      </div>

      {renderVideo && (
        <>
          <div className={styles.contenedor}>
            <h1>VIDEOS</h1>
            <div className={`${styles.caja}`}>
              <div className={styles.player_wrapper}>
                <ReactPlayer
                  className={styles.react_player}
                  url="https://www.facebook.com/100320772656843/videos/1080031165933903"
                  width="100%"
                  height="100%"
                />
              </div>

              <div className={styles.player_wrapper}>
                <ReactPlayer
                  className={styles.react_player}
                  url="https://www.facebook.com/100320772656843/videos/818507426021792"
                  width="100%"
                  height="100%"
                />
              </div>

              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/4E1Agb6CPJg?showinfo=0&enablejsapi=1&origin=http://localhost:3000"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>

            <div className={`${styles.caja}`}>
              <div className={styles.player_wrapper}>
                <ReactPlayer
                  className={styles.react_player}
                  /* url="https://www.facebook.com/Edison-Solutions-LLC-100320772656843/videos/434948278826872" */
                  url="https://www.facebook.com/watch/?v=714740626440286"
                  width="100%"
                  height="100%"
                />
              </div>

              <div className={styles.player_wrapper}>
                <ReactPlayer
                  className={styles.react_player}
                  /* url="https://www.facebook.com/Edison-Solutions-LLC-100320772656843/videos/434948278826872" */
                  url="https://www.facebook.com/100320772656843/videos/429444375672917"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>

            <div className={`${styles.caja} ${styles.caja_Face}`}>
              <div className={styles.player_wrapper}>
                <ReactPlayer
                  className={styles.react_player}
                  url="https://www.facebook.com/watch/?v=3071196913170403"
                  width="100%"
                  height="100%"
                />
              </div>

              <div className={styles.player_wrapper}>
                <ReactPlayer
                  className={styles.react_player}
                  url="https://www.facebook.com/100320772656843/videos/813790663257296"
                  width="100%"
                  height="100%"
                />
              </div>

              <div className={styles.player_wrapper}>
                <ReactPlayer
                  className={styles.react_player}
                  url="https://www.facebook.com/100320772656843/videos/546197943578307"
                  width="100%"
                  height="100%"
                  
                />
              </div>
              

              <div className={styles.follow_us}>
                <h2><span>More Content?</span></h2>
                <h2>Follow in our <span>Social Networks</span></h2>
                <div className={styles.container_iconos}>
                  <FaFacebookSquare
                    className={`${styles.icono} ${styles.facebook}`}
                  />

                  <FaInstagramSquare
                    className={`${styles.icono} ${styles.instagram}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default Gallery;
