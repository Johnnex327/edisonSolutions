import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Renovacion from "../components/Renovacion";
import Construccion from "../components/Construccion";
import Electrical from "../components/Electrical";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

import AOS from "aos";
import "aos/dist/aos.css";
import Team_Work from "../components/Team_Work";

export default function Home({ renovacion, construccion, electrical }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.container}>
      <Layout pagina="Home">

        <div className={styles.fondo}>
          <div className={styles.contenedor}>
            <h1>Home Improvement Contractor </h1>
            <h2>We guarantee fast and reliable and satisfactory service</h2>
          </div>
          <div className={`contenedor_principal ${styles.fondo2}`}>
            <div className={styles.descripcion_fondo2}>
              <h1>We are the perfect solution to all your roofing problems</h1>
              <p>
                Sociosqu massa semper vivamus fusce luctus porta purus nunc
                consectetuer. Mollis sollicitudin erat dui luctus aenean ex
                vehicula. Risus habitant leo turpis sit nulla eget fames
                dignissim quisque ligula amet.
              </p>
            </div>

            <Image src="/img/fondo2.jpg" width={400} height={300} alt="fondo2"/>
          </div>
        </div>

        <div>
          <Renovacion titulo="Interior Renovation" renovacion={renovacion} />

          <Construccion titulo="Construction" construccion={construccion} />

          <Electrical titulo="Electrical" electrical={electrical} />
        </div>

        <div className={styles.fondo3}>
          <div className={`${styles.contenedor_fondo3} contenedor_principal`}>
            <h2>WHY CHOOSE US ?</h2>
            <div className={styles.division}>
              <div className={styles.lado1}>
                <h1>EXPERIENCED FOR THE JOB</h1>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth. Even
                  the all-powerful Pointing has no control about the blind texts
                  it is an almost unorthographic life One day however a small
                  line of blind text by the name of Lorem Ipsum decided to leave
                  for the far World of Grammar.
                </p>
              </div>

              <div data-aos="zoom-in-left" className={styles.lado2}>
                <Image
                  layout="fixed"
                  width={400}
                  height={400}
                  src="/img/experience.jpg"
                  alt="experience"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="contenedor">
          <h1>Features Projects</h1>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"2"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className={styles.mySwiper}
          >
            <SwiperSlide>
              <div>
               {/*  <img width="750px" height="450" src="../img/1.jpg" alt="" /> */}
                <Image
                  width={750} height={450} src="/img/1.jpg" alt={"imagen1"}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
              <Image
                  width={750} height={450} src="/img/2.jpg" alt={"imagen2"}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
              <Image
                  width={750} height={450} src="/img/3.jpg" alt={"imagen3"}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
              <Image
                  width={750} height={450} src="/img/4.jpg" alt={"imagen4"}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <Team_Work>

        </Team_Work>
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const urlRenovacion = `${process.env.API_URL}/renovacions`;
  const urlConstruccion = `${process.env.API_URL}/construccions`;
  const urlElectrical = `${process.env.API_URL}/electricals`;

  const [resRenovacion, resConstruccion, resElectrical] = await Promise.all([
    fetch(urlRenovacion),
    fetch(urlConstruccion),
    fetch(urlElectrical),
  ]);

  const [renovacion, construccion, electrical] = await Promise.all([
    resRenovacion.json(),
    resConstruccion.json(),
    resElectrical.json(),
  ]);

  return {
    props: {
      renovacion,
      construccion,
      electrical,
    },
  };
}
