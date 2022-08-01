import React from 'react'
import { Routes, Route } from "react-router-dom"

import Home from './components/Home';

import './css/home.css';

function App() {
  return (
    <div className='container center'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App