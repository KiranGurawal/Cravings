import Header from "../views/Header";
import Footer from "../views/Footer";
import React from 'react'
import Slider from "../views/Slider";
import ProductCard from "../views/ProductCard";
import {setName } from '../Loginsession';

 function Home() {
  setName("null");
  return (
    <><Header />
    
    <div className="slider1">
      <Slider />
      </div>
      <div>
        <ProductCard />
      </div>
  
    <Footer /></>
  )
}
export default Home;