import 'antd/dist/antd.css';
import React from "react";
import MainDbase from './components/MainDbase';
import Slide from './components/Slide';
import Nav from './components/Nav';
import Foot from './components/Foot';
import Text from './components/Text';
import Hero from './components/Hero';





function App() {
  return (
    <>
    <Nav/>
    <br/>
    <br/><br/>
    <br/> <br/>
    <Slide/> 
   <br/>
  <Text/>
   <br/>
   <Hero/>
   <br/>
   <MainDbase/>
   <br/>
   <br/><br/><br/><br/>
   <Foot/>
   
    </>
  );
}

export default App;
