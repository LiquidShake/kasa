import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Housing from './pages/Housing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/housing/:id" element={<Housing />} />
      </Routes>
    </Router>
  </React.StrictMode>
);