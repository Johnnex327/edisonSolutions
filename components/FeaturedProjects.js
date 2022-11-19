import React from "react";
import styles from "../styles/FeaturedProject.module.css"


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";


import Image from "next/image";

export const FeaturedProjects = () => {
  return (
    <div className={styles.contenedor_proyectos_destacados}>
      <div>
        <h1>FEATURE PROJECTS</h1>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <Image width={1500} height={700} src="/img/1.jpg" alt="imagen1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image width={1500} height={700} src="/img/2.jpg" alt="imagen2" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image width={1500} height={700} src="/img/3.jpg" alt="imagen3" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image width={1500} height={700} src="/img/4.jpg" alt="imagen4" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
