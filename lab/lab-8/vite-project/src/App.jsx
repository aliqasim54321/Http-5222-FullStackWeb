import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import FeaturedProducts from './components/FeaturedProducts';
import Hero from './components/Hero';


function App(){ 
  
  return (
  <div className="App">
   <Header /> 
   <Menu />
   <Hero />
   <FeaturedProducts />   
   <Footer /> 
   </div>
 
);
}
 

export default App
