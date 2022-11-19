import React from 'react'
import Layout from '../components/Layout';
import Team_Work from '../components/Team_Work';

import styles from '../styles/Team.module.css';

const team = () => {
  return (
    <Layout pagina='Team'>
        
      <div className={styles.fondo_team}>
        <div className={styles.titulo}>
          <h1>
            OUR <span>TEAM</span>
          </h1>
          {/* <p className={frase ? `${styles.mostrar}` : `${styles.ocultar}`}>
            WE DO THIS FOR YOU!
          </p> */}
        </div>
      </div>

      <Team_Work/>

      
    </Layout>
  )
}

export default team