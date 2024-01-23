import React from 'react'
import "./home.css"
import Navbar from "../../Components/Navbar/Navbar";
import Stats from "../../Components/Stats/Stats";
import Footer from "../../Components/Footer/Footer";
import Hero from '../../Components/Hero/Hero';
import OurServices from '../../Components/OurServices/OurServices';

const Home = () => {
  return (
    <div>

      <Navbar />
      <Hero />
      <OurServices />

      {/* <Navbar /> */}

      <Stats />
      <Footer /> 
    </div>
  )
}

export default Home