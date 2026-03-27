import { motion } from 'framer-motion'

const facts = [
  { icon: '📍', label: 'Davis CA' },
  { icon: '🎓', label: 'UC Davis' },
  { icon: '🔐', label: 'Cybersecurity' },
  { icon: '🤖', label: 'AI/ML' },
]

const systemInfo = [
  { key: 'STATUS', value: 'Available for Internships' },
  { key: 'DEGREE', value: 'B.S. Computer Science' },
  { key: 'MINORS', value: 'Economics · Neuro/Biotech' },
  { key: 'FOCUS', value: 'ML × Cybersecurity' },
  { key: 'LOCATION', value: 'Davis California' },
]

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: 'var(--deep-panel)',
        padding: '120px 0',
      }}
    >
      <style>{`
        .about-outer { max-width: 1200px; margin: 0 auto; padding: 0 80px; }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 64px;
          align-items: start;
          margin-top: 48px;
        }
        .fact-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
        }
        .info-row {
          display: flex;
          gap: 8px;
          align-items: baseline;
          padding: 8px 0;
          border-bottom: 1px solid var(--border-subtle);
        }
        .info-row:last-child { border-bottom: none; }
        @media (max-width: 1024px) {
          .about-outer { padding: 0 40px; }
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
        }
        @media (max-width: 600px) {
          .about-outer { padding: 0 20px; }
        }
      `}</style>

      <div className="about-outer">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
          <div className="section-label">ABOUT.exe</div>
        </motion.div>

        <div className="about-grid">
          {/* LEFT COLUMN */}
          <div>
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.05 }}
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 700,
                marginBottom: 24,
                lineHeight: 1.1,
              }}
            >
              <span className="gradient-text">Who I Am</span>
            </motion.h2>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 15,
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                marginBottom: 16,
              }}
            >
              I'm a third-year CS student at UC Davis and I spend most of my time
              building things and learning how they break. I care a lot about
              security, and I think about it in pretty much everything I build.
            </motion.p>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.15 }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 15,
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                marginBottom: 16,
              }}
            >
              I've worked on full-stack apps, workflow automation, and platforms
              that real people actually use. I'm also studying Economics and
              Neuroscience/Biotech on the side, because I think the most
              interesting problems sit at the edges of disciplines.
            </motion.p>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 15,
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
              }}
            >
              When I'm not coding I'm usually reading about how systems fail,
              watching too many tech talks, or trying to explain something
              complicated to someone who doesn't write code.
            </motion.p>

            <div className="fact-chips">
              {facts.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    background: 'var(--panel)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 8,
                    padding: '8px 14px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 13,
                    color: 'var(--text-secondary)',
                  }}
                >
                  <span>{fact.icon}</span>
                  <span>{fact.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — Profile Card */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.12 }}
            style={{
              background: 'var(--panel)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 16,
              padding: 32,
            }}
          >
            {/* Avatar */}
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--cyan), var(--violet))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: 28,
                color: '#050810',
                marginBottom: 16,
              }}
            >
              VP
            </div>

            <div
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 20,
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: 4,
              }}
            >
              Vishwas Patel
            </div>
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 13,
                color: 'var(--cyan)',
                marginBottom: 28,
              }}
            >
              B.S. Computer Science · UC Davis
            </div>

            {/* System Info */}
            <div style={{ marginBottom: 28 }}>
              {systemInfo.map((item) => (
                <div className="info-row" key={item.key}>
                  <span
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: 10,
                      color: 'var(--text-muted)',
                      letterSpacing: '0.08em',
                      minWidth: 80,
                    }}
                  >
                    {item.key}
                  </span>
                  <span
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: 11,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
