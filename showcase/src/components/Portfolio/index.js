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
              <div className="portfolio-item-content">
                {project.cover && (
                  <div className="portfolio-image-container">
                    <img 
                      src={project.cover} 
                      alt={project.title} 
                      className="portfolio-thumbnail"
                    />
                  </div>
                )}
                <div className="portfolio-text-content">
                  <button
                    className="portfolio-title-btn"
                    onClick={() => navigate(`/portfolio/${idx}`)}
                  >
                    {project.title}
                  </button>
                  <div className="portfolio-description">{project.description}</div>
                  <div className="portfolio-links">
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="portfolio-link"
                    >
                      View Project →
                    </a>
                    <button
                      className="portfolio-detail-btn"
                      onClick={() => navigate(`/portfolio/${idx}`)}
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
