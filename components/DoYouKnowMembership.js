import React from 'react'
import styles from '../styles/DoYouKnowMembership.module.css'

import Image from 'next/image';
import Boton from './Boton';


import { AiOutlineCheck } from "react-icons/ai";

const DoYouKnowMembership = () => {
    return (
        <div className={styles.fondo}>
            <div className={styles.container}>

                <h1>Do you know our memberships?</h1>
                <h2>Save money with our home improvement plans</h2>

                <div className={styles.container_menbresias}>
                    <div className={styles.bronze}>
                        <Image
                            src={'/img/bronze.png'}
                            width={'200px'}
                            height={'200px'}
                            alt='bronze'
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
                            alt='silver'
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
                            alt='gold'
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



    )
}

export default DoYouKnowMembership