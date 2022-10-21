import React from 'react'

import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>

        <div className={styles.contenedor}>

          <div>
            <h1>Address</h1>
            <p>90-10 34th Ave, Queens, NY 11372, Estados Unidos</p>
            <h1>Contact</h1>
            <p>Tel: +1 347-619-7236</p>
            <p><span>Email:</span> edisonsolutions01@gmail.com</p>
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
                <li><a href="https://www.facebook.com/Edison-Solutions-LLC-100320772656843" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://www.instagram.com/edisonsolutions/" className="instagram"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#" className="whatsapp"><i className="fab fa-whatsapp"></i></a></li>
            </ul>
          </div>
        
        </div>
    </footer>
  )
}

export default Footer