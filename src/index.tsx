import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from "./Components/Calculator";
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <Calculator/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
