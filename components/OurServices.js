import React from 'react'
import styles from '../styles/OurServices.module.css'

import { GiCampCookingPot } from "react-icons/gi";
import { GiHomeGarage } from "react-icons/gi";
import { GiBathtub } from "react-icons/gi";
import { MdOutlineLiving } from "react-icons/md";
import { MdElectricalServices } from "react-icons/md";

const OurServices = () => {
    return (
        <div className={styles.contenedor_our_services}>

            <div className={styles.titulo_pagina}>
                <div className={styles.barra}>
                    <h1>Our Services</h1>
                </div>
            </div>

            <div className={styles.contenedor_iconos}>
                <div className={styles.container_icono}>
                    <GiCampCookingPot className={styles.icono} />
                    <p>Kitchen</p>
                </div>

                <div className={styles.container_icono}>
                    <GiHomeGarage className={styles.icono} />
                    <p>Garage</p>
                </div>

                <div className={styles.container_icono}>
                    <GiBathtub className={styles.icono} />
                    <p>Bathroom</p>
                </div>

                <div className={styles.container_icono}>
                    <MdOutlineLiving className={styles.icono} />
                    <p>Livingroom</p>
                </div>

                <div className={styles.container_icono}>
                    <MdElectricalServices className={styles.icono} />
                    <p>Electrical</p>
                </div>
            </div>
        </div>
    )
}

export default OurServices