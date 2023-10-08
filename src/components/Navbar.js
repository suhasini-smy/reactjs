import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar (props){
    return (
                <>
                    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid">
                      <a className="navbar-brand" href="/">{props.title}</a>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                          <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                          </li>
                        </ul>
                        
                        <button type="button" onClick={props.ChangeColor}  className="btn btn-primary">Primary</button>

                          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" >Enable DarkMode</label>
                          </div>
                      </div>
                    </div>
                  </nav>
                </>
           );
}

//Navbar.PropTypes =  {title:PropTypes.string}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
  };
  

  
Navbar.defaultProps = {
    title: "title"
  };
  