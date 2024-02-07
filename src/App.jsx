import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Bases} from "./components/Bases";
import {Home} from "./components/Home";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";



export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});



const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []); 
  return (
    <BrowserRouter> {/* Agrega BrowserRouter como contenedor principal */}
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/bases" element={<Bases data={landingPageData.Bases}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

