import { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
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
          setTimeout(() => {
            setIsSubmitted(false)
          }, 3000)
        },
        (error) => {
          setIsLoading(false)
          console.error('Error sending email:', error)
          alert('Sorry, there was an error sending your message. Please try again.')
        }
      )
  }

  if (isLoading) {
    return (
      <div className="container contact-page">
        <div className="loading-container">
          <Loader type="pacman" />
          <p className="loading-text">Sending your message...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't']}
            idx={15}
          />
        </h1>
        <p>
          If you have any other requests or questions, don't hesitate to
          contact me using the form below.
        </p>
        
        {isSubmitted && (
          <div className="success-message">
            <p>✅ Message successfully sent! I'll get back to you soon.</p>
          </div>
        )}

        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input 
                  placeholder="Name" 
                  type="text" 
                  name="name" 
                  required 
                  disabled={isLoading}
                />
              </li>
              <li className="half">
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  required
                  disabled={isLoading}
                />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                  disabled={isLoading}
                />
              </li>
              <li>
                <textarea 
                  placeholder="Message" 
                  name="message" 
                  required 
                  disabled={isLoading}
                />
              </li>
              <li>
                <input 
                  type="submit" 
                  className="flat-button" 
                  value={isLoading ? "SENDING..." : "SEND"}
                  disabled={isLoading}
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
