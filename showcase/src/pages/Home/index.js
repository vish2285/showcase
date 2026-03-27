import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Projects from '../../components/Projects'
import Skills from '../../components/Skills'
import Experience from '../../components/Experience'
import Contact from '../../components/Contact'

export default function Home() {
  return (
    <motion.div
      className="page-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </motion.div>
  )
}
