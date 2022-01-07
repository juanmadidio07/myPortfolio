import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Home from './Routes/Home';
import NotFound from './Routes/NotFound';


function App() {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App;