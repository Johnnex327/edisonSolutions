import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

import styles from "../styles/Home.module.css";


const Layout = ({ children, pagina }) => {

  return (
    <div>
      <Head>
        <title>Edison Solutions - {pagina}</title>
        {/* <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximun-scale=1.0, minimum-scale=1.0"
          
        /> */}
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=yes, maximum-scale=5.0" />

      </Head>

      <Header />
       
         {children}
         
       
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" async/>
      <script>AOS.init();</script>
      

      <Footer />
    </div>
  );
};

export default Layout;
