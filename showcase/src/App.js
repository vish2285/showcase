import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
import './App.scss'
import Certificate from './components/Certificates';

function App() {
  useEffect(() => {
    document.title = 'Vishwas\'s Portfolio';
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/certificate" element={<Certificate/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
