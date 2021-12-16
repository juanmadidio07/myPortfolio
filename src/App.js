import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Distribuidora from './components/Distribuidora';
import Home from './components/Home';
import React from 'react';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

function App() {
  return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Distribuidora" element={<Distribuidora/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
