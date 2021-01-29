import React, { useEffect, useRef, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// Indexed export file for components to reduce import declarations. For the sake of it.
import { NavBar, LandingPage, TimeOnAppPage, DetailsFormPage } from './components/index';
// Indexed export file for enums to reduce import declarations. For the sake of it.
import { pageTypes } from './InterfacesTypesAndEnums/index';

// React Context used for the sake of a Theme
import { ThemeContext, getTheme } from './context/ThemeContext';

// Default Theme and Styling import
import './styles/App.css';


function App() {
  const [darkModeActive, setDarkModeActive] = useState<boolean>(false);

  // State to retain the time spent on App - providing an additional Ref to be passed to other components.
  const [timeOnApp, setTimeOnApp] = useState<number>(0);
  const timeRef = useRef(0)
  
  // Use a continous looping useEffect to creating a timer for how long someone has been on the app ..
  // .. in seconds. We then assign this to a ref which is continously updated and thus able to be used .. 
  // .. as state which does not trigger a rerender.
  useEffect(() => {
      let timer = setInterval(() => {
        setTimeOnApp(timeOnApp + 1);
    }, 1000);
    return () => clearInterval(timer);
  })

  // UseEffect that triggers on change of timeOnApp state. This will mean our reference to the timer .. 
  // .. will always be 1 second behind. Not sure if it's beneficial, could just pass the state, but .. 
  // .. then the rule is use it for the sake of using it. So we have.
  useEffect(() => {
    timeRef.current = timeOnApp;
  }, [timeOnApp])

  return (
    <ThemeContext.Provider value={{darkModeActive, setDarkModeActive }}>
      <div className="App" style={getTheme(darkModeActive)} >
        <Router>
          <NavBar />
          <Switch>
            <Route path={pageTypes.detailsForm}>
              <DetailsFormPage />
            </Route>
            <Route path={pageTypes.timeOnApp}>
              <TimeOnAppPage timeRef={timeRef}/>
            </Route>
            <Route path={pageTypes.landingPage}>
              <LandingPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
    
    
  );
}

export default App;
