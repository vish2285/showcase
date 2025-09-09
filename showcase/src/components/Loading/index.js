import React from 'react'
import './index.scss'

const Loading = ({ 
  message = "Loading...", 
  showDots = true, 
  showTitle = false,
  title = "Preparing Content",
  subtitle = "Please wait while we load your content"
}) => {
  return (
    <div className="loading-container">
      <div className="loading-animation">
        <div className="loading-content">
          {showTitle && (
            <h2 className="loading-title">{title}</h2>
          )}
          <p className="loading-text">{message}</p>
          {showDots && (
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          {subtitle && showTitle && (
            <p className="loading-subtitle">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Loading
