import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
      <div className={styles.logo}>
      <a href="/">
        <Image
        width={100} height={60} layout="fixed" src="/img/logo.png"
        />
      </a>
      <div className={styles.nombre_empresa}>
        <a href="/">
          <h1>Edison Solutions LLC</h1>
        </a>
        <p>General Constructor - New York</p>
      </div>
    </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="services">Services</a>
          </li>
          <li>
            <a href="#">Portafolio</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
      </header>

      <section className={styles.banner}></section>

    </>

    
  );
};

export default Header;
