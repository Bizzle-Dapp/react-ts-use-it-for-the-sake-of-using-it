import React from 'react';
import {
    Link
  } from "react-router-dom";
import logo from '../assets/logo.svg';
import { FaHome, FaStopCircle } from 'react-icons/fa';
import '../styles/App.css';
import { pageTypes } from '../App';

export const NavBar: React.FC = () =>{

    return(
        <>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <span>Welcome to: <code>React TS Use It For The Sake Of Using It</code></span>
            </header>
            <Link to={`${pageTypes.landingPage}`}>
                <button><FaHome/> Home</button>
            </Link>
            <Link to={`${pageTypes.timeOnApp}`}>
                <button><FaStopCircle/> Time on App</button>
            </Link>
        </>
    )
}