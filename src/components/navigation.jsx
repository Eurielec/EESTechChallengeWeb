import React from "react";
import { Link } from "react-router-dom";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="/#page-top">
            EESTech Challenge
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="https://eestec.es" className="page-scroll" target="_blank">
                EESTEC LC Madrid
              </a>
            </li>
            <li>
              <a href="/#page-top" className="page-scroll">
                Inicio
              </a>
            </li>
            <li>
              <a href="/#features" className="page-scroll">
                Evento
              </a>
            </li>
            <li>
              <a href="/#team" className="page-scroll">
                Equipo
              </a>
            </li>
            <li>
              <Link to="/bases" className="page-scroll"> {/* Utiliza Link para navegar a /bases */}
                Bases
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

