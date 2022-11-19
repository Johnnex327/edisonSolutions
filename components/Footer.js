import React from 'react'

import styles from "../styles/Footer.module.css";

import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";


import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>

        <div className={styles.contenedor}>

          <div>
            <h2>Address</h2>
            <p>90-10 34th Ave, Queens, NY 11372, Estados Unidos</p>
            <h2>Contact</h2>
            <div className={styles.contact}>
              <AiOutlineMail
                className={styles.icono}
              />
              <p>Email: edisonsolutions01@gmail.com</p>
            </div>

            <div className={styles.contact}>
              <AiOutlinePhone
                className={styles.icono}
              />
              <p>Tel: +1 347-619-7236</p>
            </div>
            
            
          </div>

          <div>
            <h2>Services</h2>
            <p>Construction</p>
            <p>Electrical</p>
            <p>Cleaning Service</p>
            <p>Renovation</p>
          </div>

          <div className={styles.redes_container}>
            <h2>Follow Us</h2>
            <ul>
                <li><Link href="https://www.facebook.com/Edison-Solutions-LLC-100320772656843" target="_blank" className="facebook"><i className="fab fa-facebook-f"></i></Link></li>
                <li><Link href="https://www.instagram.com/edisonsolutions/" target="_blank" className="instagram"><i className="fab fa-instagram"></i></Link></li>
                <li><Link href="#" target="_blank" className="whatsapp"><i className="fab fa-whatsapp"></i></Link></li>
            </ul>
          </div>

          <div className={styles.contenedor_mapa}>
            <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12089.404822920002!2d-73.8770532!3d40.7542996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25fc3841e0849%3A0x7d263ca2e164b7b3!2sEdison%20Solutions%20LLC!5e0!3m2!1ses!2sec!4v1668545763977!5m2!1ses!2sec"
          width="100%"
          height="400"
          loading="lazy"
        ></iframe>
          </div>
          
        
        </div>
    </footer>
  )
}

export default Footer