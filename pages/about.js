import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import styles from "../styles/About.module.css";
import Image from "next/image";
import Link from "next/link"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";

import AOS from "aos";
import "aos/dist/aos.css";
import Formulario_Contacto from "../components/Formulario_Contacto";

const About = ({ resultado }) => {
  const { id, Titulo, contenido, imagen } = resultado;

  useEffect(() => {
    AOS.init();
  }, []);

  const [frase, setFrase] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFrase(true);
    }, 1000);
  });

  return (
    <Layout pagina="About Us">
  
      <div className={styles.fondo_about_us}>
        <div className={styles.titulo}>
          <h1>
            ABOUT <span>US</span>
          </h1>
          <p className={frase ? `${styles.mostrar}` : `${styles.ocultar}`}>
          We are a company specialized in building, remodeling and maintaining your home, business or project.
          </p>
        </div>
      </div>

      {/* Cuadro About us */}

      <div className={`${styles.titulo_pagina} ${styles.barra}`}>
        <h1>General Home Improvement Contractors</h1>
      </div>

      

      <div className={styles.contenedor_OurMissionVission}>
        
        <div className={styles.lado2_Vission}>
          <h1>ABOUT US</h1>
          <h2>WE KNOW</h2>
          <p>
            Our Mision ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            a nulla ac massa ultrices interdum interdum et malesuada fames.
          </p>

          <p>
            Mauris a nulla ac massa ultrices interdum. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Maecenas efficitur
            vestibulum magna eget convallis. Sed sodales, mauris at molestie
            viverra.
          </p>
        </div>
        
        <div className={styles.fondoAttachment}></div>

      </div>

      <div className={styles.seccion}>
        <div className={styles.lado1}>
          <div className={styles.fondo1}>
            <div className={styles.fondo2}>
              <div className={styles.fondo3}></div>
            </div>
          </div>
        </div>

        <div className={styles.lado2}>
          <h1>WHO WE ARE</h1>
          <h2>LEADERS IN THE INDUSTRY</h2>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>

          <p>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar.
          </p>

          
        </div>
      </div>

      <div className={styles.contenedor_OurMissionVission}>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className={styles.lado1_Mission}
        ></div>

        <div className={styles.lado2_Mission}>
          <h1>OUR VALUE</h1>
          <h2>OUR MISSION</h2>
          <p>
            Our Mision ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            a nulla ac massa ultrices interdum interdum et malesuada fames.
          </p>

          <p>
            Mauris a nulla ac massa ultrices interdum. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Maecenas efficitur
            vestibulum magna eget convallis. Sed sodales, mauris at molestie
            viverra.
          </p>
        </div>
      </div>

      <div className={styles.contenedor_OurMissionVission}>
        <div className={styles.lado2_Vission}>
          <h1>OUR VALUE</h1>
          <h2>OUR VISSION</h2>
          <p>
            Our Mision ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            a nulla ac massa ultrices interdum interdum et malesuada fames.
          </p>

          <p>
            Mauris a nulla ac massa ultrices interdum. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Maecenas efficitur
            vestibulum magna eget convallis. Sed sodales, mauris at molestie
            viverra.
          </p>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className={styles.lado1_Vission}
        ></div>
      </div>


      <div className={styles.contenedor_etiquetaWeAre}>
        <h2>WE ARE IN</h2>
      </div>

      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
      >
        <SwiperSlide>
          <div className={`${styles.imagen_centro} ${styles.imagen_newYork}`}>
            <div className={styles.contenedor}>
              <h2>NEW YORK</h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={`${styles.imagen_centro} ${styles.imagen_manhattan}`}>
            <div className={styles.contenedor}>
              <h2>MANHATTAN</h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={`${styles.imagen_centro} ${styles.imagen_brooklyn}`}>
            <div className={styles.contenedor}>
              <h2>BROOKLYN</h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={`${styles.imagen_centro} ${styles.imagen_queens}`}>
            <div className={styles.contenedor}>
              <h2>QUEENS</h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className={`${styles.imagen_centro} ${styles.imagen_stateIsland}`}
          >
            <div className={styles.contenedor}>
              <h2>STATE ISLAND</h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={`${styles.imagen_centro} ${styles.imagen_bronx}`}>
            <div className={styles.contenedor}>
              <h2>BRONX</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

     <Formulario_Contacto/>
     
    </Layout>
  );
};

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/acercas`;
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();

  return {
    props: {
      resultado: resultado[0],
    },
  };
}

export default About;
