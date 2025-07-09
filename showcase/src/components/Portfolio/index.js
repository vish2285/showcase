import React, { useEffect, useState } from 'react'
import './index.scss'
import portfolioData from '../../data/portfolio.json'
import { useNavigate } from 'react-router-dom'
import Loader from 'react-loaders'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container portfolio-page portfolio-responsive">
        <h1 className="page-title" style={{ color: '#000', fontWeight: 700, fontSize: 36, marginBottom: 40 }}>
          Portfolio
        </h1>
        <div className="portfolio-list">
          {portfolioData.portfolio.map((project, idx) => (
            <div key={idx} className="portfolio-list-item">
              <div>
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    margin: 0,
                    color: '#1e40af',
                    fontWeight: 700,
                    fontSize: 24,
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                  onClick={() => navigate(`/portfolio/${idx}`)}
                >
                  {project.title}
                </button>
              </div>
              <div style={{ color: '#444', fontSize: 18, marginTop: 6 }}>{project.description}</div>
            </div>
          ))}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
