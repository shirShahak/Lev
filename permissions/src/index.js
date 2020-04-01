import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RTL from './RTL';

ReactDOM.render(
  //<App/>,
  <RTL><App /></RTL>,
  document.getElementById('root')
);
