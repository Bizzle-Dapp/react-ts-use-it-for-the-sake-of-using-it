import React, { useEffect, useRef, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { NavBar } from './components/NavBar';
import { TimeOnApp } from './components/TimeOnApp';
import './styles/App.css';


export enum pageTypes {
  landingPage = '/',
  useEffectPage = '/useEffect',
  timeOnApp = '/timeOnApp',
  useReducerPage = '/useReducer'
}

function App() {
  const [timeOnApp, setTimeOnApp] = useState<number>(0);
  const timeRef = useRef(0)
  
  // Use a continous looping useEffect to creating a timer for how long someone has been on the app ..
  // .. in seconds. We then assign this to a ref which is continously updated and thus able to be used .. 
  // .. as state which does not trigger a rerender.
  let timer: any;
  useEffect(() => {
      timer = setInterval(() => {
        setTimeOnApp(timeOnApp + 1);
    }, 1000);
    return () => clearInterval(timer);
  })

  // UseEffect that triggers on change of timeOnApp state. This will mean our reference to the timer .. 
  // .. will always be 1 second behind.
  useEffect(() => {
    timeRef.current = timeOnApp;
  }, [timeOnApp])

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path={pageTypes.timeOnApp}>
            <TimeOnApp timeRef={timeRef}/>
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
