import React from 'react'
import { Routes, Route } from "react-router-dom"

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';

import './css/home.css';

function App() {
  return (
    <div className='container center'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
      </Routes>
    </div>
  )
}

export default App