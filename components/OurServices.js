import React from 'react'
import styles from '../styles/OurServices.module.css'

import { GiCampCookingPot } from "react-icons/gi";
import { GiHomeGarage } from "react-icons/gi";
import { GiBathtub } from "react-icons/gi";
import { MdOutlineLiving } from "react-icons/md";
import { MdElectricalServices } from "react-icons/md";


import Link from 'next/link'
import Image from 'next/image'




const OurServices = () => {
    return (
        
        <div className={styles.contenedor_our_services}>
            
            <div className={styles.titulo_pagina}>
                <div className={styles.barra}>
                    <h1>Do you need to remodel your home or business?</h1>
                </div>
            </div>

            <div className={styles.container_subtitulado}>
                <div className={styles.lado1}>
                    <h1>Construction and renovations in</h1>
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
                </div>
                <div className={styles.lado2}>

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