import { useEffect, useState } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faUniversity, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGoogleScholar, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import profilePic from '../../assets/images/IMG_1785.jpeg'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="container about-page about-responsive">
        {/* Sidebar */}
        <div className="about-sidebar">
          <img
            src={profilePic}
            alt="Profile"
            className="about-profile-pic"
          />
          <h2 className="about-name">Vishwas Patel</h2>
          <div className="about-degree">BS CS @ UC Davis</div>
          <div className="about-info"><FontAwesomeIcon icon={faMapMarkerAlt} /> Davis, CA</div>
          <div className="about-info"><FontAwesomeIcon icon={faUniversity} /> UC Davis</div>
          <a className="about-info" href="mailto:vishwas2284@gmail.com" ><FontAwesomeIcon icon={faEnvelope} /> Email</a>
          <a className="about-info" href="https://github.com/vish2285" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> Github</a>
          <a className="about-info" href="https://www.linkedin.com/in/vishwas2285/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
        </div>
        {/* Main Content */}
        <div className="about-main-content">
          <section style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>About Me</h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, marginBottom: 10 }}>
              Hey! My name is Vishwas, I'm currently an undergraduate student at UC Davis studying Computer Science and interested in the applications of machine learning/deep learning to improve and create new systems.
            </p>
          </section>
          <section style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 18 }}>Experience</h2>
            <ul style={{ fontSize: 17, lineHeight: 1.7, paddingLeft: 20 }}>
              <li>Co-founder/Lead Developer at <a href="#" style={{ color: '#60a5fa', textDecoration: 'underline' }}>Alvy-AI</a> where I led full stack development</li>
              <li>Development Engineering Intern at <a href="#" style={{ color: '#60a5fa', textDecoration: 'underline' }}>City of Sacramento</a> </li>
              <li>Freelance Software Developer <a href="#" style={{ color: '#60a5fa', textDecoration: 'underline' }}>Self-Employed</a> developed 10+ websites for local startups</li>
              <li>Mechanical Engineering and CAD Design Intern at <a href="#" style={{ color: '#60a5fa', textDecoration: 'underline' }}>BAPS Charities</a> where I built a map for the second-largest Hindu temple in the world.</li>
            </ul>
          </section>
          <section>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 18 }}>Contact</h2>
            <p style={{ fontSize: 17, lineHeight: 1.7 }}>
              Feel free to reach out at vdppatel@ucdavis.edu, always excited to meet new people!
            </p>
          </section>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About