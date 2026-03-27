import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import portfolioData from '../../data/portfolio.json'

const ACCENT_COLORS = [
  'var(--cyan)',
  'var(--violet)',
  '#00FF88',
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Projects() {
  const navigate = useNavigate()
  const projects = portfolioData.portfolio

  return (
    <section
      id="projects"
      style={{
        background: 'var(--void)',
        padding: '120px 0',
      }}
    >
      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 48px;
        }
        .project-card-link {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .project-card-link:hover {
          color: var(--cyan);
        }
        .project-desc-clamp {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <style>{`
        .projects-outer { max-width: 1200px; margin: 0 auto; padding: 0 80px; }
        @media (max-width: 1024px) { .projects-outer { padding: 0 40px; } .projects-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 600px) { .projects-outer { padding: 0 20px; } .projects-grid { grid-template-columns: 1fr !important; } }
      `}</style>

      <div className="projects-outer">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">PROJECTS.ls</div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 700,
            marginTop: 12,
            marginBottom: 12,
            lineHeight: 1.1,
          }}
        >
          <span className="gradient-text">What I've Built</span>
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
          {projects.length} projects spanning AI, web engineering, and security-conscious design.
        </motion.p>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => {
            const accentColor = ACCENT_COLORS[index % 3]
            const isLive = project.liveAvailable

            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  borderColor: 'var(--border-active)',
                  boxShadow:
                    '0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px #2A3F6F, 0 0 24px rgba(0,212,255,0.12)',
                }}
                style={{
                  background: 'var(--deep-panel)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 12,
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color 0.2s',
                  cursor: 'default',
                }}
              >
                {/* TOP ACCENT BAR */}
                <div
                  style={{
                    height: 3,
                    width: '100%',
                    background: accentColor,
                    flexShrink: 0,
                  }}
                />

                {/* STATUS BADGE */}
                <div
                  style={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 10,
                    color: isLive ? '#00FF88' : '#FFD700',
                    letterSpacing: '0.05em',
                  }}
                >
                  {isLive ? '[ LIVE ]' : '[ DEV ]'}
                </div>

                {/* PROJECT NUMBER */}
                <div
                  style={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 12,
                    color: 'var(--text-muted)',
                  }}
                >
                  0{index + 1}
                </div>

                {/* BODY */}
                <div style={{ padding: '40px 20px 16px', flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: 18,
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: 8,
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="project-desc-clamp"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 13,
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: 16,
                    }}
                  >
                    {project.description}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 6,
                      marginBottom: 16,
                    }}
                  >
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* FOOTER */}
                <div
                  style={{
                    borderTop: '1px solid var(--border-subtle)',
                    padding: '12px 20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    {project.codeAvailable && project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card-link"
                        title="GitHub"
                        onClick={(e) => e.stopPropagation()}
                      >
                        ⎇ Code
                      </a>
                    )}
                    {isLive && project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card-link"
                        title="Live Demo"
                        onClick={(e) => e.stopPropagation()}
                      >
                        ↗ Live
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => navigate(`/project/${index}`)}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: 12,
                      color: 'var(--cyan)',
                      cursor: 'pointer',
                      padding: 0,
                      letterSpacing: '0.02em',
                    }}
                  >
                    View Details →
                  </button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
