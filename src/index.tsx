import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// Entry point! GO! This here is referring to the element in public/index.html that has the id of "root" .. 
// .. That is the place where our application will be mounted and placed. 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
