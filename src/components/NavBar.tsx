import React from 'react';
import { Link } from "react-router-dom";
import { pageTypes } from '../interfacesAndTypes/index';
import { useTheme } from '../context/ThemeContext';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

import { FaHome, FaPager, FaStopCircle } from 'react-icons/fa';
import logo from '../assets/logo.svg';
import '../styles/App.css';
import { Tooltip } from '@mui/material';

export const NavBar: React.FC = () => {
    // Stateful context to provide getter and setter function for Theme. This is the core manipulation of our context.
    const { darkModeActive, setDarkModeActive } = useTheme();

    return (
        <>
            <header className="App-header">
                <Tooltip title="Some badboi icon">
                    <AccessAlarmIcon color="secondary" fontSize="small" />
                </Tooltip>
                <img src={logo} className="App-logo" alt="logo" />
                <span>Welcome to: <code>React TS Use It For The Sake Of Using It</code></span>
                <span className="Theme-Toggle-Container">
                    <label>{darkModeActive ? "🌙" : "🌞"}
                        <input className="Theme-Toggle"
                            type="checkbox"
                            checked={darkModeActive}
                            onChange={() => setDarkModeActive(!darkModeActive)} />
                    </label>
                </span>
            </header>
            <Link to={`${pageTypes.landingPage}`}>
                <button data-testid="Home-Button"><FaHome /> Home</button>
            </Link>
            <Link to={`${pageTypes.timeOnApp}`}>
                <button data-testid="Time-On-App-Button"><FaStopCircle /> Time on App</button>
            </Link>
            <Link to={`${pageTypes.detailsForm}`}>
                <button><FaPager /> Details Form</button>
            </Link>
        </>
    )
}