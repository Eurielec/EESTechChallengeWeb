import React from 'react'

export const Premios = (props) => {
  return (
    <div id="premios" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>{props.data ? props.data.title : "Undefined"}</h2>
          <p>
            Premios otorgados a los 3 mejores equipos del EESTech Challenge 2024 Madrid LR
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.prizes.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 premios">
                  <div className="thumbnail">
                    <img src={d.img} alt="..." className="premio-img" />
                    <div className="caption">
                      <h4>{d.position}</h4>
                      <p>{d.prize}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  )
};

