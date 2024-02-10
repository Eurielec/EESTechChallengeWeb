import React, { useState, useEffect } from "react";
import { Header } from "./header";
import { Features } from "./features";
import { Team } from "./Team";
import { Contact } from "./contact";
import {Navigation} from "./navigation";
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
        <Team data={landingPageData.Team} />
        <Contact data={landingPageData.Contact} />
      </div>
  )
}

