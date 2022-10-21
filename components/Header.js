import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
      <div className={styles.logo}>
      <Link href="/">
        <Image
        width={100} height={60} layout="fixed" src="/img/logo.png" alt="logo"
        />
      </Link>
      <div className={styles.nombre_empresa}>
        <Link href="/">
          <h1>Edison Solutions LLC</h1>
        </Link>
        <p>General Constructor - New York</p>
      </div>
    </div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="about">About</Link>
          </li>
          <li>
            <Link href="services">Services</Link>
          </li>
          <li>
            <Link href="#">Portafolio</Link>
          </li>
          <li>
            <Link href="#">Team</Link>
          </li>
          <li>
            <Link href="contact">Contact</Link>
          </li>
        </ul>
      </header>

      <section className={styles.banner}></section>

    </>

    
  );
};

export default Header;
