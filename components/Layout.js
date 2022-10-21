import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";


const Layout = ({ children, pagina }) => {

  return (
    <div>
      <Head>
        <title>Edison Solutions - {pagina}</title>
        <meta
          name="description"
          content="General Constructor Edison Solutions Web Site"
          
        />

      </Head>

      <Header />
       
         {children}
         
       
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script>AOS.init();</script>
      

      <Footer />
    </div>
  );
};

export default Layout;
