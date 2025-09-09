import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import resumeImage from '../../assets/images/updatedresume1.png'
import resumePDF from '../../assets/docs/UpdatedResume.pdf'
import Loading from '../Loading'

const Resume = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loading message="Loading Resume..." showTitle={true} title="Resume" subtitle="Preparing your document" />;
  }

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
