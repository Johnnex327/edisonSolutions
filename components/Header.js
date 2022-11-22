import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

import { FaBars } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
import { useState, useEffect } from "react";

const Header = () => {
  const [open, setOpen] = useState(true);

  //Cambiar Color de Nav cuando se hace scrollBehavior:
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <>
      {/* open ? `${styles.header}` : `${styles.header} ${styles.header_menu_mobile}` */}
      <header
        className={color ? `${styles.header} ${styles.bg}` : `${styles.header}` }
      >
        <div className={styles.logo}>
          <Link href="/">
            <div>
              <Image
                width={100}
                height={60}
                layout="fixed"
                src="/img/logo.png"
                alt="logo"
              />
            </div>
          </Link>

          <div className={styles.nombre_empresa}>
            <Link href="/">
              <h1>Edison Solutions LLC</h1>
            </Link>
            <p>General Home Improvement Contractors</p>
          </div>
        </div>

        {color && (
          <div className={styles.contenedor_icono}>
            <FaPhoneSquare className={styles.icono} />
            <h3>CALL US: +1 347-619-7236</h3>
          </div>
        )}

        <div className={styles.contenedorBurguer}>
          <label
            htmlFor={"menu"}
            onClick={(e) => {
              setOpen(!open);
            }}
          >
            <FaBars className={styles.menuBurguer} />
          </label>
        </div>

        <input type="checkbox" id="menu" className={styles.nav__input} />

        <div className={styles.contenedorBarNav}>
          <div className={styles.barraNavegacion}>
            <ul>
              <div className={styles.elementos}>
                <li className={styles.barras}>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="about">About</Link>
                </li>
                <li>
                  <Link href="services">Services</Link>
                </li>
                <li>
                  <Link href="gallery">Gallery</Link>
                </li>
                <li>
                  <Link href="team">Team</Link>
                </li>
                <li>
                  <Link href="contact">Contact</Link>
                </li>
                {/* {open && (
                  <li>
                    <Link href="ha">Incrustado</Link>
                  </li>
                )} */}
              </div>
            </ul>
          </div>
        </div>
      </header>

      <section className={styles.banner}></section>
    </>
  );
};

export default Header;
