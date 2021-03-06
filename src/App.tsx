import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// Indexed export file for components to reduce import declarations. For the sake of it.
import { NavBar, LandingPage, TimeOnAppPage, DetailsFormPage } from './components/index';
// Indexed export file for enums to reduce import declarations. For the sake of it.
import { pageTypes } from './interfacesAndTypes/index';

// React Context used for the sake of a Theme
import { ThemeContext, getTheme } from './context/ThemeContext';

// Default Theme and Styling import
import './styles/App.css';
import useOmnipresentTimer from './components/useOmnipresentTimer';


function App() {
  const [darkModeActive, setDarkModeActive] = useState<boolean>(false);
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
              <TimeOnAppPage timeRef={useOmnipresentTimer().timeOnApp}/>
            </Route>
            <Route path={pageTypes.landingPage}>
              <LandingPage />
            </Route>
          </Switch>
        </Router>
        <br/><br/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
