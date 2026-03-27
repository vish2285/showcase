import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'

const inputStyle = {
  background: 'var(--panel)',
  border: '1px solid var(--border-subtle)',
  borderRadius: 8,
  padding: '12px 16px',
  color: 'var(--text-primary)',
  fontFamily: 'Inter, sans-serif',
  fontSize: 15,
  width: '100%',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s, box-shadow 0.2s',
}

function FormInput({ style, ...props }) {
  const [focused, setFocused] = useState(false)
  return (
    <input
      {...props}
      style={{
        ...inputStyle,
        ...(focused
          ? {
              borderColor: 'var(--cyan)',
              boxShadow: '0 0 0 3px rgba(0,212,255,0.1)',
            }
          : {}),
        ...style,
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  )
}

function FormTextarea({ style, ...props }) {
  const [focused, setFocused] = useState(false)
  return (
    <textarea
      {...props}
      style={{
        ...inputStyle,
        resize: 'vertical',
        ...(focused
          ? {
              borderColor: 'var(--cyan)',
              boxShadow: '0 0 0 3px rgba(0,212,255,0.1)',
            }
          : {}),
        ...style,
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  )
}

const socialLinks = [
  {
    icon: '⎇',
    label: 'GitHub',
    href: 'https://github.com/vish2285',
  },
  {
    icon: '🔗',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/vishwas2285',
  },
  {
    icon: '✉',
    label: 'Email',
    href: 'mailto:vdppatel@ucdavis.edu',
  },
]

export default function Contact() {
  const form = useRef()
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const sendEmail = (e) => {
    e.preventDefault()
    setIsLoading(true)

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
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
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section
      id="contact"
      style={{
        background: 'var(--deep-panel)',
        padding: '120px 0',
      }}
    >
      <style>{`
        .contact-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 600px) {
          .contact-row { grid-template-columns: 1fr; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .social-icon-btn {
          width: 44px;
          height: 44px;
          background: var(--panel);
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          cursor: pointer;
          text-decoration: none;
          color: var(--text-secondary);
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .social-icon-btn:hover {
          border-color: var(--cyan);
          transform: translateY(-3px);
          box-shadow: 0 0 12px rgba(0,212,255,0.2);
        }
      `}</style>

      <div
        style={{
          maxWidth: 680,
          margin: '0 auto',
          padding: '0 clamp(20px, 5vw, 40px)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">CONTACT.sh</div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(36px, 5vw, 52px)',
            fontWeight: 700,
            marginTop: 12,
            marginBottom: 12,
            lineHeight: 1.1,
          }}
        >
          <span className="gradient-text">Let's Build Something.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 15,
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: 40,
          }}
        >
          Open to internships, research collaborations, and interesting problems.
        </motion.p>

        {/* SUCCESS STATE */}
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              background: 'rgba(0,255,136,0.07)',
              border: '1px solid rgba(0,255,136,0.3)',
              borderRadius: 12,
              padding: '28px 24px',
              marginBottom: 32,
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: 'rgba(0,255,136,0.15)',
                border: '2px solid #00FF88',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                fontSize: 22,
                color: '#00FF88',
              }}
            >
              ✓
            </div>
            <h3
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 20,
                fontWeight: 600,
                color: '#00FF88',
                marginBottom: 8,
              }}
            >
              Message Sent!
            </h3>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 14,
                color: 'var(--text-secondary)',
              }}
            >
              Thanks for reaching out. I'll get back to you within 24 hours.
            </p>
          </motion.div>
        )}

        {/* FORM */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
        >
          <div className="contact-row">
            <FormInput
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleInputChange}
              required
              disabled={isLoading}
            />
            <FormInput
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleInputChange}
              required
              disabled={isLoading}
            />
          </div>

          <FormInput
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            disabled={isLoading}
          />

          <FormTextarea
            name="message"
            placeholder="Tell me about your project, opportunity, or question..."
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            required
            disabled={isLoading}
          />

          <button
            type="submit"
            className="btn-primary"
            disabled={isLoading}
            style={{
              width: '100%',
              height: 52,
              fontSize: 15,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              cursor: isLoading ? 'not-allowed' : 'pointer',
              opacity: isLoading ? 0.7 : 1,
            }}
          >
            {isLoading ? (
              <>
                <span
                  style={{
                    width: 16,
                    height: 16,
                    border: '2px solid rgba(0,0,0,0.3)',
                    borderTopColor: '#000',
                    borderRadius: '50%',
                    display: 'inline-block',
                    animation: 'spin 0.7s linear infinite',
                  }}
                />
                Sending...
              </>
            ) : (
              'Send Message →'
            )}
          </button>
        </motion.form>

        {/* SOCIAL ICONS */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 12,
            marginTop: 32,
          }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="social-icon-btn"
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
        </motion.div>

        {/* FOOTER LINE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 12,
            color: 'var(--text-muted)',
            textAlign: 'center',
            marginTop: 48,
          }}
        >
          {'// Built by Vishwas Patel · 2025 · UC Davis'}
        </motion.p>
      </div>
    </section>
  )
}
