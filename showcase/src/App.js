import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
import './App.scss'
// import Resume from './components/Resume';
import ProjectDetail from './components/Portfolio/ProjectDetail';

function App() {
  useEffect(() => {
    document.title = "Vishwas's Portfolio";
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<ProjectDetail />} />
          {/* <Route path="/resume" element={<Resume/>} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
