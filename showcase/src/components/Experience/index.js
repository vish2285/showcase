import { motion } from 'framer-motion'

const entries = [
  {
    side: 'left',
    company: 'CS Tutoring Club, UC Davis',
    role: 'Software Developer',
    date: 'Sept 2025 – Present',
    color: 'var(--cyan)',
    bullets: [
      'Built and maintained internal web tools to support tutoring operations, improving scheduling visibility and student engagement',
      'Led a state management refactor migrating the frontend from React Context to Zustand, reducing unnecessary re-renders',
      'Worked closely with tutors and club leadership to translate operational needs into technical features',
    ],
  },
  {
    side: 'right',
    company: 'City of Sacramento',
    role: 'Development Engineer Intern',
    date: 'Dec 2024 – Oct 2025',
    color: 'var(--violet)',
    bullets: [
      'Automated creation of 1,000+ project PDFs using Python (pandas, openpyxl, ReportLab), reducing processing from days to minutes',
      'Validated and debugged automation scripts, cutting human error risk by 90% in critical engineering workflows',
      'Created technical documentation and trained staff, improving IT risk management and process reliability',
    ],
  },
  {
    side: 'left',
    company: 'Freelance',
    role: 'Software Developer',
    date: 'Jan 2024 – Feb 2025',
    color: 'var(--green)',
    bullets: [
      'Developed and deployed 5+ responsive websites for clients with secure coding practices and modern UI/UX',
      'Implemented mobile-first designs and optimized SEO, ensuring cross-device accessibility',
    ],
  },
  {
    side: 'right',
    company: 'BAPS',
    role: 'AV / IT Volunteer',
    date: 'Dec 2024 – Mar 2025',
    color: 'var(--cyan)',
    bullets: [
      'Managed AV/IT setup for weekly events serving 100+ attendees, configuring projectors, sound, and livestream systems',
      'Troubleshot networking, hardware, and software issues on-site to maintain system uptime',
    ],
  },
  {
    side: 'left',
    company: 'BAPS',
    role: 'Mechanical Engineering & CAD Volunteer',
    date: 'Jun 2023 – Aug 2023',
    color: 'var(--violet)',
    bullets: [
      "Designed 3D CAD models in Fusion 360 for the world's second-largest Hindu temple, improving construction precision",
      'Contributed technical CAD insights to mini engineering projects, supporting design validation and team collaboration',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--void)', padding: '120px 0' }}>
      <style>{`
        .exp-container { max-width: 1200px; margin: 0 auto; padding: 0 80px; }
        .timeline-wrapper {
          position: relative;
          max-width: 820px;
          margin: 52px auto 0;
        }
        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0; bottom: 0;
          width: 2px;
          transform: translateX(-50%);
          background: linear-gradient(180deg, #00D4FF 0%, #7B61FF 40%, #00FF88 100%);
        }
        .t-entry {
          display: flex;
          justify-content: flex-end;
          padding-right: calc(50% + 36px);
          margin-bottom: 40px;
          position: relative;
        }
        .t-entry.right {
          justify-content: flex-start;
          padding-right: 0;
          padding-left: calc(50% + 36px);
        }
        .t-node {
          position: absolute;
          left: 50%;
          top: 22px;
          transform: translateX(-50%);
          width: 12px; height: 12px;
          border-radius: 50%;
          background: var(--void);
          border: 2px solid;
          z-index: 1;
        }
        @media (max-width: 768px) {
          .exp-container { padding: 0 20px; }
          .timeline-line { left: 12px; }
          .t-entry, .t-entry.right {
            justify-content: flex-start;
            padding-right: 0;
            padding-left: 40px;
          }
          .t-node { left: 12px; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .exp-container { padding: 0 40px; }
        }
      `}</style>

      <div className="exp-container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">EXPERIENCE.log</div>
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
            lineHeight: 1.1,
          }}
        >
          <span className="gradient-text">Experience</span>
        </motion.h2>
      </div>

      <div className="exp-container">
        <div className="timeline-wrapper">
          <div className="timeline-line" />

          {entries.map((entry, i) => {
            const isLeft = entry.side === 'left'
            return (
              <div key={i} className={`t-entry ${isLeft ? '' : 'right'}`}>
                <div
                  className="t-node"
                  style={{
                    borderColor: entry.color,
                    boxShadow: `0 0 10px ${entry.color}55`,
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -36 : 36 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.05 }}
                  style={{
                    width: '100%',
                    background: 'var(--deep-panel)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 12,
                    padding: '20px 22px',
                  }}
                >
                  <div style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: 16,
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: 3,
                  }}>
                    {entry.company}
                  </div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 13,
                    color: entry.color,
                    marginBottom: 4,
                  }}>
                    {entry.role}
                  </div>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 11,
                    color: 'var(--text-muted)',
                    letterSpacing: '0.04em',
                    marginBottom: 14,
                  }}>
                    {entry.date}
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
                    {entry.bullets.map((b, bi) => (
                      <li key={bi} style={{ display: 'flex', gap: 9, fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        <span style={{ color: entry.color, flexShrink: 0, marginTop: 1 }}>▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
