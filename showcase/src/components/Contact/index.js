import { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState('form')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const form = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    setIsLoading(true)

    emailjs
      .sendForm(
        'service_dzjmkcu',
        'template_bmlvy12',
        form.current,
        'xMuUFlvOfQf_VHUB3'
      )
      .then(
        () => {
          setIsLoading(false)
          setIsSubmitted(true)
          form.current.reset()
          setFormData({ name: '', email: '', subject: '', message: '' })
          setTimeout(() => {
            setIsSubmitted(false)
          }, 5000)
        },
        (error) => {
          setIsLoading(false)
          console.error('Error sending email:', error)
          alert('Sorry, there was an error sending your message. Please try again.')
        }
      )
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'vdppatel@ucdavis.edu',
      action: 'mailto:vdppatel@ucdavis.edu',
      description: 'Send me an email directly'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/vishwas2285',
      action: 'https://linkedin.com/in/vishwas2285',
      description: 'Connect with me professionally'
    },
    {
      icon: '</>',
      title: 'Github',
      value: 'github.com/vish2285',
      action: 'https://github.com/vish2285',
      description: 'Look at my Projects'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Davis, CA',
      action: null,
      description: 'Available for remote work'
    }
  ]

  if (isLoading) {
    return (
      <div className="container contact-page">
        <div className="loading-container">
          <div className="loading-animation">
            <Loader type="pacman" />
            <div className="loading-content">
              <h2>Preparing Your Message</h2>
              <p>Securely sending your contact request...</p>
              <div className="loading-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container contact-page">
      <div className="contact-hero">
        <div className="hero-content">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't']}
              idx={15}
            />
          </h1>
          <p className="hero-subtitle">
            Let's build something amazing together. I'm always excited to discuss 
            new opportunities, innovative projects, and creative collaborations.
          </p>
          
          <div className="contact-stats">
            <div className="stat">
              <span className="stat-number">24h</span>
              <span className="stat-label">Response Time</span>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-tabs">
        <button 
          className={`tab-button ${activeTab === 'form' ? 'active' : ''}`}
          onClick={() => setActiveTab('form')}
        >
          Send Message
        </button>
        <button 
          className={`tab-button ${activeTab === 'info' ? 'active' : ''}`}
          onClick={() => setActiveTab('info')}
        >
          Contact Info
        </button>
      </div>

      <div className="contact-content">
        {activeTab === 'form' && (
          <div className="form-section">
            {isSubmitted && (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            )}

            <div className="form-container">
              <div className="form-header">
                <h2>Get In Touch</h2>
                <p>Fill out the form below and I'll respond as soon as possible</p>
              </div>

              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input 
                      placeholder="Your full name" 
                      type="text" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required 
                      disabled={isLoading}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      placeholder="your.email@example.com"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input
                    placeholder="What's this about?"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                  />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea 
                    placeholder="Tell me about your project, opportunity, or question..."
                    name="message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    required 
                    disabled={isLoading}
                    rows="6"
                  />
                </div>

                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner"></span>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span className="button-arrow">→</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        )}

        {activeTab === 'info' && (
          <div className="info-section">
            <div className="info-header">
              <h2>Contact Information</h2>
              <p>Choose your preferred method of communication</p>
            </div>

            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <div key={index} className="contact-method">
                  <div className="method-icon">{method.icon}</div>
                  <div className="method-content">
                    <h3>{method.title}</h3>
                    <p className="method-value">{method.value}</p>
                    <p className="method-description">{method.description}</p>
                    {method.action && (
                      <a 
                        href={method.action} 
                        className="method-action"
                        target={method.action.startsWith('http') ? '_blank' : '_self'}
                        rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        {method.action.startsWith('mailto:') ? 'Send Email' : 
                         method.action.startsWith('tel:') ? 'Call Now' : 'Visit Profile'}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="availability">
              <h3>Availability</h3>
              <div className="availability-grid">
                <div className="availability-item">
                  <span className="availability-label">Response Time:</span>
                  <span className="availability-value">Within 24 hours</span>
                </div>
                <div className="availability-item">
                  <span className="availability-label">Best Time:</span>
                  <span className="availability-value">7 AM - 6 PM PST</span>
                </div>
                <div className="availability-item">
                  <span className="availability-label">Work Type:</span>
                  <span className="availability-value">Remote & On-site</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Contact
