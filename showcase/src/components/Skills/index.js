import { motion } from 'framer-motion'

const categories = [
  {
    label: 'Languages',
    accent: 'var(--cyan)',
    skills: ['Python', 'C / C++', 'JavaScript', 'SQL', 'HTML / CSS'],
  },
  {
    label: 'Frameworks & Tools',
    accent: 'var(--violet)',
    skills: ['React', 'Next.js', 'FastAPI', 'Node.js', 'Git'],
  },
  {
    label: 'Data & AI',
    accent: 'var(--green)',
    skills: ['pandas', 'NumPy', 'OpenAI API', 'SQLAlchemy'],
  },
  {
    label: 'Databases',
    accent: 'var(--cyan)',
    skills: ['PostgreSQL', 'Neon (Serverless)', 'Drizzle ORM'],
  },
  {
    label: 'Engineering Tools',
    accent: 'var(--violet)',
    skills: ['ReportLab', 'openpyxl', 'Fusion 360'],
  },
  {
    label: 'IT & Security',
    accent: 'var(--green)',
    skills: ['Cybersecurity', 'Healthcare IT', 'Technical Support', 'Troubleshooting'],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ background: 'var(--deep-panel)', padding: '120px 0' }}
    >
      <style>{`
        .skills-container { max-width: 1200px; margin: 0 auto; padding: 0 80px; }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 48px;
        }
        @media (max-width: 1024px) {
          .skills-container { padding: 0 40px; }
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .skills-container { padding: 0 20px; }
          .skills-grid { grid-template-columns: 1fr; }
        }
        .skill-chip {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          line-height: 1.4;
          transition: border-color 0.15s, color 0.15s;
        }
      `}</style>

      <div className="skills-container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">SKILLS.json</div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700,
            marginTop: 12,
            marginBottom: 8,
            lineHeight: 1.1,
          }}
        >
          <span className="gradient-text">What I Work With</span>
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
          }}
        >
          Tools and technologies I've used in real projects and work.
        </motion.p>

        <div className="skills-grid">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.07 }}
              style={{
                background: 'var(--panel)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 12,
                padding: '20px 20px 16px',
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <div style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: cat.accent, flexShrink: 0,
                  boxShadow: `0 0 6px ${cat.accent}`,
                }} />
                <span style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: 13,
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  letterSpacing: '0.01em',
                }}>
                  {cat.label}
                </span>
              </div>

              {/* Skill chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="skill-chip"
                    style={{
                      background: 'var(--elevated-panel)',
                      border: `1px solid var(--border-subtle)`,
                      color: 'var(--text-secondary)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = cat.accent
                      e.currentTarget.style.color = cat.accent
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--border-subtle)'
                      e.currentTarget.style.color = 'var(--text-secondary)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
