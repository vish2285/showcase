import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

// Neural network node positions (in 400x400 viewBox)
const NODES = [
  { id: 0, x: 200, y: 70,  color: '#00D4FF' },
  { id: 1, x: 330, y: 140, color: '#7B61FF' },
  { id: 2, x: 360, y: 270, color: '#00D4FF' },
  { id: 3, x: 260, y: 360, color: '#00FF88' },
  { id: 4, x: 100, y: 330, color: '#7B61FF' },
  { id: 5, x: 50,  y: 180, color: '#00D4FF' },
  { id: 6, x: 180, y: 220, color: '#7B61FF' },
  { id: 7, x: 310, y: 210, color: '#00FF88' },
]
const EDGES = [[0,1],[0,5],[0,6],[1,2],[1,7],[2,3],[3,4],[4,5],[5,6],[6,7],[7,2],[6,3]]

function NeuralNetwork() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 2.2, ease: 'easeOut' }}
      style={{ width: '100%', maxWidth: '420px', aspectRatio: '1', animation: 'spin-slow 30s linear infinite' }}
    >
      <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%', animation: 'spin 30s linear infinite' }}>
        <defs>
          {NODES.map(n => (
            <radialGradient key={`glow-${n.id}`} id={`glow-${n.id}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={n.color} stopOpacity="0.6" />
              <stop offset="100%" stopColor={n.color} stopOpacity="0" />
            </radialGradient>
          ))}
        </defs>

        {/* Edges */}
        {EDGES.map(([a, b], i) => {
          const nodeA = NODES[a], nodeB = NODES[b]
          return (
            <g key={`edge-${i}`}>
              <line
                x1={nodeA.x} y1={nodeA.y} x2={nodeB.x} y2={nodeB.y}
                stroke="rgba(0,212,255,0.15)" strokeWidth="1"
              />
              {/* Traveling signal dot */}
              <circle r="2" fill={i % 2 === 0 ? '#00D4FF' : '#7B61FF'} opacity="0.8">
                <animateMotion
                  dur={`${2.5 + i * 0.4}s`}
                  repeatCount="indefinite"
                  path={`M${nodeA.x},${nodeA.y} L${nodeB.x},${nodeB.y}`}
                  begin={`${i * 0.3}s`}
                />
              </circle>
            </g>
          )
        })}

        {/* Nodes */}
        {NODES.map(n => (
          <g key={`node-${n.id}`}>
            <circle cx={n.x} cy={n.y} r="18" fill={`url(#glow-${n.id})`} />
            <circle cx={n.x} cy={n.y} r="7" fill={n.color} opacity="0.9">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"
                begin={`${n.id * 0.25}s`} />
              <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite"
                begin={`${n.id * 0.25}s`} />
            </circle>
            <circle cx={n.x} cy={n.y} r="12" fill="none" stroke={n.color} strokeWidth="1" opacity="0.3">
              <animate attributeName="r" values="12;18;12" dur="2s" repeatCount="indefinite"
                begin={`${n.id * 0.25}s`} />
              <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite"
                begin={`${n.id * 0.25}s`} />
            </circle>
          </g>
        ))}
      </svg>
    </motion.div>
  )
}

function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    const particles = []
    const PARTICLE_COUNT = 60
    const CONNECTION_DIST = 120
    const MOUSE = { x: -999, y: -999 }

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      MOUSE.x = e.clientX - rect.left
      MOUSE.y = e.clientY - rect.top
    }
    canvas.addEventListener('mousemove', onMouseMove)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        // Mouse attraction
        const dx = MOUSE.x - p.x, dy = MOUSE.y - p.y
        const dist = Math.hypot(dx, dy)
        if (dist < 150) {
          p.vx += dx * 0.00015
          p.vy += dy * 0.00015
        }
        // Speed limit
        const speed = Math.hypot(p.vx, p.vy)
        if (speed > 1.2) { p.vx = (p.vx / speed) * 1.2; p.vy = (p.vy / speed) * 1.2 }

        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0,212,255,0.4)'
        ctx.fill()
      })

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const d = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y)
          if (d < CONNECTION_DIST) {
            const alpha = (1 - d / CONNECTION_DIST) * 0.25
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0,212,255,${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 0,
      }}
    />
  )
}


const TYPED_PHRASES = [
  'Writing code that actually does something.',
  'Interested in security, systems, and scale.',
  'CS student figuring it out, one project at a time.',
]

export default function Hero() {
  const [nameVisible, setNameVisible] = useState(false)
  const [labelVisible, setLabelVisible] = useState(false)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // Orchestrated entrance sequence
  useEffect(() => {
    const t1 = setTimeout(() => setLabelVisible(true), 400)
    const t2 = setTimeout(() => setNameVisible(true), 800)
    const t3 = setTimeout(() => setSubtitleVisible(true), 1600)
    const t4 = setTimeout(() => setCtaVisible(true), 2000)
    return () => [t1, t2, t3, t4].forEach(clearTimeout)
  }, [])

  // Typing loop
  useEffect(() => {
    if (!subtitleVisible) return
    const phrase = TYPED_PHRASES[phraseIndex]
    const speed = isDeleting ? 40 : 70
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < phrase.length) {
          setTypedText(phrase.slice(0, typedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1800)
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(phrase.slice(0, typedText.length - 1))
        } else {
          setIsDeleting(false)
          setPhraseIndex((phraseIndex + 1) % TYPED_PHRASES.length)
        }
      }
    }, speed)
    return () => clearTimeout(timer)
  }, [typedText, isDeleting, phraseIndex, subtitleVisible])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #050810 0%, #0A0F1E 50%, #0D1525 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '64px',
      }}
    >
      {/* Particles */}
      <ParticleCanvas />

      {/* Background blobs */}
      <div style={{
        position: 'absolute', top: '-10%', left: '-10%', width: '600px', height: '600px',
        borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none', animation: 'drift1 20s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '-20%', right: '-10%', width: '800px', height: '800px',
        borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(123,97,255,0.08) 0%, transparent 70%)',
        pointerEvents: 'none', animation: 'drift2 25s ease-in-out infinite',
      }} />

      {/* Content */}
      <div style={{
        maxWidth: '1200px', margin: '0 auto', padding: '0 80px',
        display: 'grid', gridTemplateColumns: '1fr auto',
        gap: '80px', alignItems: 'center', width: '100%', position: 'relative', zIndex: 1,
      }}
        className="hero-grid"
      >
        {/* Left */}
        <div>
          {/* System online label */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={labelVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}
          >
            <span style={{
              width: '8px', height: '8px', borderRadius: '50%', background: 'var(--green)',
              display: 'inline-block',
              boxShadow: '0 0 8px var(--green)',
              animation: 'pulseGlow 2s ease-in-out infinite',
            }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: '12px',
              color: 'var(--green)', letterSpacing: '0.15em', textTransform: 'uppercase',
            }}>
              [ SYSTEM ONLINE ]
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={nameVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(48px, 7vw, 76px)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: '20px',
              background: 'linear-gradient(90deg, #00D4FF 0%, #7B61FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            VISHWAS<br />PATEL
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={subtitleVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "'Inter', sans-serif", fontSize: '18px',
              color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px',
            }}
          >
            Security Enthusiast{' '}
            <span style={{ color: 'var(--cyan)' }}>×</span>{' '}
            CS Student at UC Davis
          </motion.p>

          {/* Typed tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={subtitleVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: '16px',
              color: 'var(--text-primary)', marginBottom: '40px',
              minHeight: '24px',
            }}
          >
            <span style={{ color: 'var(--cyan)' }}>&gt; </span>
            {typedText}
            <span style={{
              display: 'inline-block', width: '2px', height: '18px',
              background: 'var(--cyan)', marginLeft: '2px', verticalAlign: 'middle',
              animation: 'blink 1s step-end infinite',
            }} />
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={ctaVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '56px' }}
          >
            <a href="#projects" className="btn-primary" onClick={e => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              View Projects <span>→</span>
            </a>
            <a href="#contact" className="btn-outline" onClick={e => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Get In Touch
            </a>
          </motion.div>

        </div>

        {/* Right — Neural Network */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="neural-net-wrapper">
          <NeuralNetwork />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        style={{
          position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          zIndex: 1,
        }}
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>scroll</span>
        <div style={{
          width: '20px', height: '32px', border: '1px solid var(--border-active)',
          borderRadius: '10px', display: 'flex', justifyContent: 'center', padding: '4px',
        }}>
          <div style={{
            width: '2px', height: '8px', background: 'var(--cyan)', borderRadius: '1px',
            animation: 'float 1.5s ease-in-out infinite',
          }} />
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-grid { gap: 40px !important; padding: 0 40px !important; }
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; padding: 0 24px !important; }
          .neural-net-wrapper { display: none !important; }
        }
        @media (max-width: 480px) {
          .hero-grid { padding: 0 20px !important; }
        }
        @keyframes drift1 {
          0%,100% { transform: translate(0,0); }
          33% { transform: translate(30px,-20px); }
          66% { transform: translate(-20px,15px); }
        }
        @keyframes drift2 {
          0%,100% { transform: translate(0,0); }
          33% { transform: translate(-25px,20px); }
          66% { transform: translate(20px,-15px); }
        }
        @keyframes pulseGlow {
          0%,100% { opacity:0.6; transform:scale(1); }
          50% { opacity:1; transform:scale(1.2); }
        }
        @keyframes blink {
          0%,100% { opacity:1; }
          50% { opacity:0; }
        }
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </section>
  )
}
