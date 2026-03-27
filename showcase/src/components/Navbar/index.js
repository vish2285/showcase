import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrollProgress, setScrollProgress] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(scrollY > 20)
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0)

      // Determine active section
      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'contact']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    if (!isHome) {
      navigate('/')
      setTimeout(() => {
        const id = href.replace('#', '')
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const id = href.replace('#', '')
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(5, 8, 16, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid #1E2A45' : '1px solid transparent',
        transition: 'all 300ms ease',
      }}
    >
      {/* Progress bar */}
      {isHome && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '2px',
            width: `${scrollProgress}%`,
            background: 'linear-gradient(90deg, #00D4FF, #7B61FF)',
            transition: 'width 100ms linear',
          }}
        />
      )}

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 80px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <button
          onClick={() => isHome ? window.scrollTo({ top: 0, behavior: 'smooth' }) : navigate('/')}
          style={{ background: 'none', border: 'none', padding: 0, display: 'flex', alignItems: 'center', gap: '4px' }}
        >
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '15px', color: 'var(--cyan)', letterSpacing: '0.02em' }}>[</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '15px', color: 'var(--text-primary)', fontWeight: 600, letterSpacing: '0.05em' }}>VP</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '15px', color: 'var(--cyan)', letterSpacing: '0.02em' }}>]</span>
          <span
            style={{
              display: 'inline-block',
              width: '8px',
              height: '16px',
              background: 'var(--cyan)',
              marginLeft: '2px',
              animation: 'blink 1s step-end infinite',
            }}
          />
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ gap: '32px', alignItems: 'center' }}>
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive = isHome && activeSection === sectionId
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '4px 0',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '13px',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  position: 'relative',
                  transition: 'color 150ms ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--cyan)' }}
                onMouseLeave={e => { e.currentTarget.style.color = isActive ? 'var(--text-primary)' : 'var(--text-secondary)' }}
              >
                {link.label}
                <span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: isActive ? '0%' : '50%',
                    right: isActive ? '0%' : '50%',
                    height: '1px',
                    background: 'var(--cyan)',
                    transition: 'left 150ms ease, right 150ms ease',
                  }}
                />
              </button>
            )
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: 'none',
            border: '1px solid var(--border-subtle)',
            borderRadius: '6px',
            padding: '8px',
            color: 'var(--text-secondary)',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '18px',
                height: '1.5px',
                background: 'var(--text-secondary)',
                transition: 'all 200ms ease',
                transform: mobileOpen
                  ? i === 0 ? 'rotate(45deg) translateY(5.5px)' : i === 2 ? 'rotate(-45deg) translateY(-5.5px)' : 'scaleX(0)'
                  : 'none',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              background: 'rgba(10, 15, 30, 0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border-subtle)',
              padding: '16px 24px 24px',
            }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  padding: '12px 0',
                  borderBottom: '1px solid var(--border-subtle)',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-secondary)',
                }}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
