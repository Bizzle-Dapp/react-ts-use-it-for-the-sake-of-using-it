import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { NavBar } from './components/NavBar';
import './styles/App.css';


export enum pageTypes {
  landingPage = '/',
  useEffectPage = '/useEffect',
  useRefPage = '/useRef',
  useReducerPage = '/useReducer'
}

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar pageTypes={pageTypes} />
        <Switch>
          <Route path={pageTypes.useRefPage}>
            <div>some other page</div>
          </Route>
          <Route path={pageTypes.landingPage}>
            <LandingPage />
          </Route>
        </Switch>
        
      </Router>
    </div>
    
  );
}

export default App;
