import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/About.module.css'

const About = ({resultado}) => {

  const {id, Titulo, contenido, imagen} = resultado

  return (
    <Layout
        pagina='About Us'
    >
      <div className="contenedor">
        
        <h1 className={styles.titulo}>{Titulo}</h1>
        <div className={styles.contenedor_about}>
          <Image 
          layout='responsive'
            width={200}
            height={200}
            src={imagen.url}
          />

          <p>{contenido}</p>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(){

  const url = `${process.env.API_URL}/acercas`;
  const respuesta = await fetch(url)
  const resultado = await respuesta.json()

  return{
    props:{
      resultado: resultado[0]
    }
  }
}

export default About