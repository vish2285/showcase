import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './index.scss'
import LogoV from '../../assets/images/v-logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faFile,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setShowNav(false)
      }
    }

    const handleClickOutside = (event) => {
      if (showNav && !event.target.closest('.nav-bar')) {
        setShowNav(false)
      }
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('mousedown', handleClickOutside)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showNav])

  const toggleNav = () => {
    setShowNav(!showNav)
  }

  const closeNav = () => {
    setShowNav(false)
  }

  return (
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={closeNav}>
        <img src={LogoV} alt="Logo" />
      </Link>
      
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={closeNav}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={closeNav}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={closeNav}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="resume-link"
          to="/resume"
          onClick={closeNav}
        >
          <FontAwesomeIcon icon={faFile} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={closeNav}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      
      <ul className="social-links">
        <li>
          <a
            href="https://www.linkedin.com/in/vishwas2285/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/vish2285"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      
      <div className="hamburger-container">
        <FontAwesomeIcon
          onClick={toggleNav}
          icon={showNav ? faTimes : faBars}
          color="#4d4d4e"
          size="2x"
          className="hamburger-icon"
        />
      </div>
    </div>
  )
}

export default Sidebar