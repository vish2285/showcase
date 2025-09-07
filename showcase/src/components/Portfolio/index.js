import React, { useEffect, useState } from 'react'
import './index.scss'
import portfolioData from '../../data/portfolio.json'
import Loader from 'react-loaders'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="portfolio-page">
        {/* Header Section */}
        <div className="portfolio-header">
          <h1 className="portfolio-title">
            Featured Projects
          </h1>
        </div>
        <div className="portfolio-container">
          <div className="projects-grid">
            {portfolioData.portfolio.map((project) => (
              <div
                key={project.id}
                className="project-card"
              >
                <div className="project-image-container">
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="project-image"
                  />
                </div>
                <div className="project-content">
                  {/* Title */}
                  <h3 className="project-title">
                    {project.title}
                  </h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="tech-stack">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="tech-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-buttons">
                    <a
                      href={project.codeAvailable ? project.codeUrl : "#"}
                      className={`project-button ${project.codeAvailable ? 'button-available' : 'button-disabled'}`}
                      onClick={(e) => {
                        if (!project.codeAvailable) e.preventDefault();
                      }}
                    >
                      <svg className="button-icon" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                      {project.codeAvailable ? "Code" : "Code Soon"}
                    </a>
                    <a
                      href={project.liveAvailable ? project.liveUrl : "#"}
                      className={`project-button ${project.liveAvailable ? 'button-available' : 'button-disabled'}`}
                      onClick={(e) => {
                        if (!project.liveAvailable) e.preventDefault();
                      }}
                    >
                      <svg className="button-icon" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      {project.liveAvailable ? "Live Demo" : "Live Demo Soon"}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="view-more-container">
            <button className="view-more-button">
              View All Projects
            </button>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
