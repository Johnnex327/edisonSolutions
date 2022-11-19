import React from "react";
import styles from "../styles/WhyPeopleChooseUs.module.css";

import { AiFillPlusCircle } from "react-icons/ai";
import Boton from "./Boton";

const WhyPeopleChooseUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.lado1}>
        <h2>
          We Are the Most Trusted General Contractors Company in New Jersey
        </h2>
        <h1>Why people choose us</h1>

        <ul>
          <li>
            <AiFillPlusCircle className={styles.icono} />
            <p>
              Fully licensed, bonded and insured with industry leading
              manufacturer warranties.
            </p>
          </li>
          <li>
            <AiFillPlusCircle className={styles.icono} />
            The best customer service in the business, no joke! Check it out by
            yourself right now.
          </li>
          <li>
            <AiFillPlusCircle className={styles.icono} />
            Pricing and Planning of your renovation.
          </li>
          <li>
            <AiFillPlusCircle className={styles.icono} />
            The highest quality products and certified technicians on every
            project.
          </li>
        </ul>

        <Boton
          text={'GET A QUOTE'}
        />
      </div>

      <div className={styles.lado2}>
        <div className={styles.lado2_fondo}></div>

        <div className={styles.inferior}>
          <h2>Dou you need start a project? Work us
            <br></br>
          Contact Us: <span>+1 347-619-7236</span>
          </h2>
          
        </div>
      </div>
    </div>
  );
};

export default WhyPeopleChooseUs;
