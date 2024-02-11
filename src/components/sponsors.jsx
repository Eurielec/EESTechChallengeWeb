import React from 'react'

export const Sponsors = (props) => {  
    return (
    <div id="sponsors" className='text-center'>
        <div className='container'>
            <div className='col-md-8 col-md-offset-2 section-title'>
                <h2>{props.data ? props.data.title : "Undefined"}</h2>
                <p>
                    Empresas que hacen posible el EESTech Challenge 2024 Madrid LR
                </p>
            </div>
            <div id='row'>
                {props.data
                    ? props.data.sponsors.map((d, i) => (
                        <div key={`${d.name}-${i}`} className='col-md-6 col-sm-6 sponsors'>
                            <div className='thumbnail'>
                                <a href={d.link}><img src={d.img} alt='...' className='sponsors-img' /></a>
                            </div>
                        </div>
                    ))
                    : "loading"}
            </div>
        </div>
    </div>
  )
};

