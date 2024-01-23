import React from 'react'
import "./home.css"
import Navbar from "../../Components/Navbar/Navbar";
import Stats from "../../Components/Stats/Stats";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Stats />
      <Footer /> 
    </div>
  )
}

export default Home