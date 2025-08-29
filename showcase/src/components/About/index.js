import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faUniversity, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import profilePic from '../../assets/images/IMG_1785.jpeg'
import Loader from 'react-loaders'

const About = () => {
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
              I'm passionate about leveraging artificial intelligence and machine learning to solve complex problems and create innovative solutions. My academic focus at UC Davis centers around computer science fundamentals, with a particular interest in deep learning algorithms, neural networks, and their applications in cybersecurity and system optimization. I enjoy exploring how AI can enhance security protocols, improve user experiences, and drive technological advancement across various domains.
            </p>
          </section>
          <section style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 18 }}>Experience</h2>
            <ul style={{ fontSize: 17, lineHeight: 1.7, paddingLeft: 20 }}>
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