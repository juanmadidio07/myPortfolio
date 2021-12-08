import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Distribuidora from './components/Distribuidora';
import Home from './components/Home';
import React from 'react';

function App() {
  return (
      <BrowserRouter>
      <Home />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/distribuidora" component={Distribuidora} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
