import React, { useState, useEffect } from "react";
import { Header } from "./header";
import { Features } from "./features";
import { Team } from "./Team";
import { Contact } from "./contact";
import { Sponsors } from "./sponsors";
import { Colaboradoras } from "./colaboradoras";
import {Navigation} from "./navigation";
import {Horario} from "./Horario";
import JsonData from "../data/data.json";


export const Home = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);  
  return (
    <div>
        <Navigation />
        <Header data={landingPageData.Header} />
        <Features data={landingPageData.Features} />
        {/*<Testimonials data={landingPageData.Testimonials} /> */}
        <Horario data={landingPageData.Horario} /> 
        <Team data={landingPageData.Team} />
        <Sponsors data={landingPageData.Sponsors} />
        <Colaboradoras data={landingPageData.Colabs}/>
        <Contact data={landingPageData.Contact} />
      </div>
  )
}

