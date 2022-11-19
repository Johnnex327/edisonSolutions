import React from 'react'
import styles from '../styles/Estados.module.css'


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";

const Estados = () => {
  return (
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
  )
}

export default Estados