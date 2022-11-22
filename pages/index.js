import { useRef, useEffect } from "react";

import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Renovacion from "../components/Renovacion";
import Construccion from "../components/Construccion";
import Electrical from "../components/Electrical";
import Team_Work from "../components/Team_Work";
import Membresias from "../components/Membresias";
import WeCanDo from "../components/WeCanDo";
import Estados from "../components/Estados";
import WhyPeopleChooseUs from "../components/WhyPeopleChooseUs";
import DoYouKnowMembership from "../components/DoYouKnowMembership";
import Boton from "../components/Boton";
import { FeaturedProjects } from "../components/FeaturedProjects";
import BtnWhatsappFlotante from "../components/BtnWhatsappFlotante";

import { AiOutlineCheck } from "react-icons/ai";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";

import AOS from "aos";
import "aos/dist/aos.css";



export default function Home({ renovacion, construccion, electrical }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout pagina="Home">

      {/* <BtnWhatsappFlotante/> */}

      <div className={styles.fondo}>
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
            <section className={styles.banner1}>
              <div className={styles.centrar}>
                <div className={styles.contenedor_central}>
                  {/*  <div className={styles.contenedor_titulos}>
                    <h1>"YOUR IMAGINATION, OUR CREATIONS"</h1>
                    <h1>The best option for your home or bussiness</h1>
                  </div> */}



                  <div className={styles.container}>

                    <h1>Save money on our home improvement plans with </h1>
                    <h1>Edison solutions llc </h1>

                    <div className={styles.container_menbresias}>
                      <div className={styles.bronze}>
                        <Image
                          src={'/img/bronze.png'}
                          width={'200px'}
                          height={'200px'}
                        />
                        <h2>Bronze</h2>
                        <ul>
                          <div className={styles.container_opciones}>
                            <AiOutlineCheck
                              className={styles.iconos}
                            />
                            <li>x services per month</li>
                          </div>

                          <div className={styles.container_opciones}>
                            <AiOutlineCheck
                              className={styles.iconos}
                            />
                            <li>x services per month</li>
                          </div>

                          <div className={styles.container_opciones}>
                            <AiOutlineCheck
                              className={styles.iconos}
                            />
                            <li>x services per month</li>
                          </div>


                        </ul>
                      </div>

                      <div className={styles.silver}>
                        <Image
                          src={'/img/silver.png'}
                          width={'200px'}
                          height={'200px'}
                        />
                        <h2>Silver</h2>
                        <ul>
                          <div className={styles.container_opciones}>
                            <AiOutlineCheck
                              className={styles.iconos}
                            />
                            <li>x services per month</li>
                          </div>

                          <div className={styles.container_opciones}>
                            <AiOutlineCheck
                              className={styles.iconos}
                            />
                            <li>x services per month</li>
                          </div>

                          <div className={styles.container_opciones}>
                            <AiOutlineCheck
                              className={styles.iconos}
                            />
                            <li>x services per month</li>
                          </div>
                        </ul>
                      </div>

                      <div className={styles.gold}>
                        <Image
                          src={'/img/gold.png'}
                          width={'200px'}
                          height={'200px'}
                        />
                        <h2>Gold</h2>
                        <ul>
                          <div className={styles.container_opciones}>
                            <AiOutlineCheck
                              className={styles.iconos}
                            />
                            <li>x services per month</li>
                          </div>

                          <div className={styles.container_opciones}>
                            <AiOutlineCheck
                              className={styles.iconos}
                            />
                            <li>x services per month</li>
                          </div>

                          <div className={styles.container_opciones}>
                            <AiOutlineCheck
                              className={styles.iconos}
                            />
                            <li>x services per month</li>
                          </div>
                        </ul>
                      </div>
                    </div>

                    <div className={styles.container_boton}>
                      <Boton
                        text={'MORE INFO'}
                      />
                    </div>


                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.fondo}>
              <section className={styles.banner2}></section>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.fondo}>
              <section className={styles.banner3}>
                <div className={styles.centrar}></div>
              </section>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

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
            <Renovacion titulo="RENOVATION" renovacion={renovacion} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Construccion titulo="CONSTRUCTION" construccion={construccion} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Electrical titulo="ELECTRICAL" electrical={electrical} />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className={styles.division}>
        <div className={styles.fondo_roofing}>
          <div className={styles.handymanContainer}>
            <div className={styles.barra}>
              <h1>Do you need a Handyman services?</h1>
            </div>

            <div>
              <button className={`${styles.btn} ${styles.btn_up}`}>
                CONTACT US
              </button>
            </div>
          </div>
        </div>

        <div className={styles.techo_roofing}>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className={styles.contenido}
          >
            <h2>TRUSTED BEST COMPANY</h2>
            <h1>
              Professional General Home Improvement <span>Contractor</span>
            </h1>
            {/* <p>
              Trusted best company ipsum dolor sit amet, consectetur adipiscing
              elit. Mauris a nulla ac massa ultrices interdum interdum et
              malesuada fames mauris a nulla ac massa ultrices interdum.
            </p> */}

            <div className={styles.contenedor_iconos}>
              <div>
                <Image
                  className={styles.cliente}
                  width={100}
                  height={100}
                  src={"/img/cliente.png"}
                  alt="clientes"
                />
                <p>Happy Clients</p>
              </div>

              <div>
                <Image
                  className={styles.cliente}
                  width={100}
                  height={100}
                  src={"/img/garantia.png"}
                  alt="garantia"
                />
                <p>Garantized Work</p>
              </div>

              <div>
                <Image
                  className={styles.cliente}
                  width={100}
                  height={100}
                  src={"/img/calidad.png"}
                  alt="calidad"
                />
                <p>Quality Work</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WeCanDo></WeCanDo>

      <div className={styles.fondo3}>
        <div className={`${styles.contenedor_fondo3} contenedor_principal`}>
          <h2>EXPERIENCE</h2>
          <div className={styles.division}>
            <div data-aos="fade-down" data-aos-duration="1000" className={styles.lado1}>
              <h1>EXPERIENCED FOR THE JOB</h1>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth. Even the
                all-powerful Pointing has no control about the blind texts it is
                an almost unorthographic life One day however a small line of
                blind text by the name of Lorem Ipsum decided to leave for the
                far World of Grammar.
              </p>
            </div>

            <div className={styles.lado2}>

            </div>
          </div>
        </div>
      </div>


      {/* <Team_Work></Team_Work> */}

      {/* <FeaturedProjects/> */}

      <WhyPeopleChooseUs />

      <DoYouKnowMembership />

      <Estados />


    </Layout>
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
