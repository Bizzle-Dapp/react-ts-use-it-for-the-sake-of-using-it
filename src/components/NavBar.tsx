import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import logo from '../assets/logo.svg';
import { FaHome, FaStopCircle } from 'react-icons/fa';
import '../styles/App.css';
import currentPage, { pageTypes } from '../App';
interface INavBarProps {
    pageTypes: object,
}

export const NavBar: React.FC<INavBarProps> = (props: INavBarProps) =>{

    return(
        <>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                Welcome to <code>React-TS Use It For The Sake Of Using It</code>
            </header>
            <Link to={`${pageTypes.landingPage}`}>
                <button><FaHome/> Home</button>
            </Link>
            <Link to={`${pageTypes.useRefPage}`}>
                <button><FaStopCircle/>Ref Example</button>
            </Link>
        </>
    )
}