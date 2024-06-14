import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';

function Myapp() {
  return (
    <div>
      <h1>
        custom app;
      </h1>
    </div>
  );
}


  ReactDOM.CreateRoot(document.getElementById('root'))
  ReactDOM.render(
   Myapp()
 
  
);
