import React from 'react'
import styles from '../styles/ClientsCompany.module.css';

import Image from 'next/image'


const ClientsCompany = () => {
  return (
    <div className={styles.container}>
        <h1>Companies that have given us their trust</h1>
        <div className={styles.container_grid}>

            <div className={styles.icono}>
              <Image
                width={'300px'}
                height={'700px'}
                src={'/img/companys/urbanX.jpg'}
              />
            </div>

            <div className={styles.icono}>
            <Image
                width={'300px'}
                height={'700px'}
                src={'/img/companys/ibmBlueMix.jpg'}
              />
            </div>

            <div className={styles.icono}>
            <Image
                width={'300px'}
                height={'700px'}
                src={'/img/companys/civic.jfif'}
              />
            </div>

            <div className={styles.icono}>

            </div>

            <div className={styles.icono}>

            </div>

        </div>
    </div>
  )
}

export default ClientsCompany