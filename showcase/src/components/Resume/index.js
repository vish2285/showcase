import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import resumeImage from '../../assets/images/resume-preview.png'
import resumePDF from '../../assets/docs/VishwasResume.pdf'

const Resume = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container resume-page">
      <div className="title-and-button">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Resume'.split('')}
            idx={15}
          />
        </h1>
        <a href={resumePDF} download className="btn download-btn">
          Download
        </a>
      </div>
      <div className="resume-content">
        <img src={resumeImage} alt="Resume Preview" className="resume-image" />
      </div>
    </div>
  )
}

export default Resume
