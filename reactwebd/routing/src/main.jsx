import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// Import your components here
import Layout from './Layout';
import Home from './components/Home/Home'

import About from '.components/About';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home/>} />
        <Route path="about" element={<About/>} />
      </Route>
    </Routes>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
