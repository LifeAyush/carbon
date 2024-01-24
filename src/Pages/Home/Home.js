import React from 'react'
import "./home.css"
import Navbar from "../../Components/Navbar/Navbar";
import Stats from "../../Components/Stats/Stats";
import Footer from "../../Components/Footer/Footer";
import Hero from '../../Components/Hero/Hero';
import OurServices from '../../Components/OurServices/OurServices';
import Journey from '../../Components/Journey/Journey';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Journey />
      <Stats />
      <OurServices />
      <Footer /> 
    </div>
  )
}

export default Home