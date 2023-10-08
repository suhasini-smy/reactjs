import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar (props){
    return (
                <>
                    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid">
                      <Link className="navbar-brand" to="/">{props.title}</Link>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                          <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
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
  