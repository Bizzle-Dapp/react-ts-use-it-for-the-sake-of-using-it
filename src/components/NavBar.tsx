import React from 'react';
import { Link } from "react-router-dom";
import { pageTypes } from '../enums/index';
import { useTheme } from '../context/ThemeContext';

import { FaHome, FaStopCircle } from 'react-icons/fa';
import logo from '../assets/logo.svg';
import '../styles/App.css';

export const NavBar: React.FC = () =>{
    // Stateful context to provide getter and setter function for Theme.
    const { darkModeActive, setDarkModeActive } = useTheme();

    return(
        <>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <span>Welcome to: <code>React TS Use It For The Sake Of Using It</code></span>
                <span className="Theme-Toggle-Container">
                    <label>{darkModeActive ? "🌙" : "🌞"}
                        <input className="Theme-Toggle" type="checkbox" checked={darkModeActive} onChange={() => setDarkModeActive(!darkModeActive)} />
                    </label>
                </span>
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