import React from 'react'
export const Horario = (props) =>{
    return (
        <div id="horario" className="text-center">
            <div className="container">
                <div className="col-md-8 col-md-offset-2 section-title">
                    <h2>{props.data ? props.data.title : "Undefined"}</h2>
                    <p>
                        Programación del EESTech Challenge 2024 Madrid LR
                    </p>
                </div>
                <div id="row">

                    {props.data ? props.data.days.map((d, i) => (
                        <div key={`${d.name}-${i}`} className="col-md-4 col-sm-6 horario">
                            <h3>{d.day}</h3>
                            <div className="thumbnail">
                                {d.events.map((e, i) => (
                                <ul>
                                    <li key={`${e.time}-${i}`} className='hora'>{e.time}</li>
                                    <li key={`${e.event}-${i}`} className='evento'>{e.event}</li>
                                </ul>
                                ))}
                            </div>
                        </div>
                    )) : "Días"}


                </div>
            </div>
        </div>
    )
}

