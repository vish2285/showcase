import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Cursor from './components/Cursor'
import Home from './pages/Home'
import ProjectDetail from './components/Portfolio/ProjectDetail'
import './App.scss'

function App() {
  const location = useLocation()

  useEffect(() => {
    document.title = "Vishwas Patel"
  }, [])

  return (
    <>
      <Cursor />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
