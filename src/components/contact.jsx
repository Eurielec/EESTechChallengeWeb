import React from "react";


export const Contact = (props) => {
  
  return (
    <div>
      <div id="contact">
        
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
          
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 EESTech Challenge Madrid. Design by Eurielec
          </p>
        </div>
      </div>
    </div>
  );
};
