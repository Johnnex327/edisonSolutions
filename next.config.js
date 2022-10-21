/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com'] // esta parte se añade el dominio o el servidor 
    //donde estan alojadas las imagenes, luego debemos reinciar el servidor "npm run dev"
  }
}

module.exports = nextConfig
