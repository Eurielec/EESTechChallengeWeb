import React from "react";
import { Navigation } from "./navigation";

export const Bases = (props) => {

  return (
    <div>
      <Navigation />
      <div id="bases" className="text-left">
        <div className="container">
          <div className="text-center">
            <div className="titulo-bases col-md-14 section-title">
              <h2>{props.data ? props.data.title : "Undefined"}</h2>
            </div>
          </div>
          <div>
            {props.data
              ? props.data.bases.map((d, i) => (
                <div className="base-container" key={i}>
                  <h3 className="titulo-base">{d.title}</h3>
                  <p className="texto-base" dangerouslySetInnerHTML={{ __html: d.base }}></p>
                </div>
              ))
              : "loading"}
          </div>
        </div>
      </div>
    </div>
  );
};


