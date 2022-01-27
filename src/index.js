import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import PracticalExperience from './components/PracticalExperience'


ReactDOM.render(
  <React.StrictMode>
    <App />
    <GeneralInfo />
    <PracticalExperience />
    <Education />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log reslits (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
