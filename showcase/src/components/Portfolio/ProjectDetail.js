import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import portfolioData from '../../data/portfolio.json'

const getProjectDetails = (projectId) => {
  const details = {
    0: {
      overview:
        'LabLink connects UC Davis students with professors aligned to their research interests. It uses a hybrid matching engine combining TF-IDF, BM25, and semantic embeddings to surface the most relevant faculty based on a student profile. The platform is live in production at lablinkdavis.org.',
      keyFeatures: [
        {
          title: 'Hybrid Matching Engine',
          description:
            'Combines TF-IDF keyword matching, BM25 retrieval, and sentence-transformer semantic embeddings to rank professor relevance with high precision.',
        },
        {
          title: 'FastAPI + PostgreSQL Backend',
          description:
            'RESTful API built with FastAPI and SQLAlchemy ORM, backed by a PostgreSQL database. Designed for performance with async request handling.',
        },
        {
          title: 'Automated Email Drafting',
          description:
            'LLM-powered pipeline generates personalized outreach email drafts, reducing student outreach preparation time by approximately 80%.',
        },
      ],
    },
    1: {
      overview:
        'FinLit is an interactive financial literacy platform that educates users through AI-generated quizzes and personalized learning paths. Built with React + FastAPI, it uses OpenAI APIs to generate diverse question sets and tracks user progress with JWT-secured authentication.',
      keyFeatures: [
        {
          title: 'AI-Powered Quiz Generation',
          description:
            'Integrates the OpenAI API to dynamically generate multiple-choice quiz questions on financial topics, ensuring fresh and diverse content.',
        },
        {
          title: 'Progress Tracking Dashboard',
          description:
            'Tracks user scores, completed categories, and learning streaks through an interactive dashboard with visual progress indicators.',
        },
        {
          title: 'Secure Auth & Data Layer',
          description:
            'JWT-based authentication with Clerk and a PostgreSQL schema using SQLAlchemy for persistent user data and session management.',
        },
      ],
    },
    2: {
      overview:
        'Xpenza is a full-stack expense tracking application for personal and small-business finance management. It provides real-time analytics, budget categorization, and visual spending insights for 20+ monthly active users.',
      keyFeatures: [
        {
          title: 'Real-Time Analytics Dashboard',
          description:
            'Interactive data visualizations of spending by category, time period, and budget — built with Recharts and Next.js server components.',
        },
        {
          title: 'Drizzle ORM + Neon PostgreSQL',
          description:
            'Serverless PostgreSQL powered by Neon with Drizzle ORM for type-safe, efficient database queries and schema migrations.',
        },
        {
          title: 'Vercel Edge Deployment',
          description:
            'Hosted on Vercel with edge runtime for low-latency responses and seamless CI/CD from the GitHub repository.',
        },
      ],
    },
    3: {
      overview:
        'Luminum is a modern, animated landing page demonstrating advanced Framer Motion choreography and component architecture. It showcases performant animation patterns, responsive layout design, and clean React component composition.',
      keyFeatures: [
        {
          title: 'Framer Motion Animations',
          description:
            'Scroll-triggered reveal animations, staggered children, and viewport-aware transitions create a polished, cinematic page experience.',
        },
        {
          title: 'Vite + React Architecture',
          description:
            'Fast build pipeline with Vite and HMR, using Tailwind CSS utility classes for a maintainable and consistent design system.',
        },
        {
          title: 'Responsive Layout',
          description:
            'Mobile-first responsive design that adapts fluidly from 320px to 1440px+ using Tailwind responsive breakpoints.',
        },
      ],
    },
    4: {
      overview:
        'Signature Web is a browser-based digital signature capture tool using the HTML5 Canvas API. Users can draw, customize, and export their signatures as PNG images — no plugins or dependencies required.',
      keyFeatures: [
        {
          title: 'Canvas Drawing Engine',
          description:
            'Smooth signature capture with HTML5 Canvas API, supporting variable stroke width, real-time rendering, and touch input on mobile.',
        },
        {
          title: 'Customization Options',
          description:
            'Users can adjust pen color, stroke thickness, and background — then export the result as a high-resolution PNG.',
        },
        {
          title: 'Zero-Dependency Implementation',
          description:
            'Built with vanilla JavaScript and the Canvas API for maximum performance and cross-browser compatibility without any frameworks.',
        },
      ],
    },
    5: {
      overview:
        'A modern, responsive portfolio website showcasing projects, skills, and experience. Built with React, Tailwind CSS, Framer Motion, and Vercel for fast delivery and smooth animations.',
      keyFeatures: [
        {
          title: 'Dark Design System',
          description:
            'CSS custom properties define a consistent token-based design system with cyan, violet, and green accent colors across all components.',
        },
        {
          title: 'Framer Motion Page Transitions',
          description:
            'Smooth page enter/exit transitions and scroll-triggered component animations powered by Framer Motion whileInView variants.',
        },
        {
          title: 'Responsive & Accessible',
          description:
            'Fully responsive layout that adapts from mobile to wide desktop, with semantic HTML and accessible color contrast ratios.',
        },
      ],
    },
    6: {
      overview:
        'A productivity application for planning and managing weekly schedules. Features a drag-and-drop calendar interface, local storage persistence, and a clean CSS Grid layout.',
      keyFeatures: [
        {
          title: 'Weekly Calendar Interface',
          description:
            'Intuitive weekly grid lets users create, edit, and rearrange schedule blocks using drag-and-drop interactions.',
        },
        {
          title: 'Local Storage Persistence',
          description:
            'Schedule data is persisted to localStorage so user schedules survive page refreshes without requiring a backend.',
        },
        {
          title: 'CSS Grid Layout',
          description:
            'The calendar is built entirely with CSS Grid for pixel-accurate time slot positioning and responsive column scaling.',
        },
      ],
    },
  }

  return (
    details[projectId] || {
      overview:
        'This project demonstrates proficiency in modern web development technologies and best practices.',
      keyFeatures: [
        {
          title: 'Technical Implementation',
          description:
            'Built using industry-standard technologies and frameworks for optimal performance and maintainability.',
        },
        {
          title: 'User Experience',
          description:
            'Designed with user experience in mind, ensuring intuitive navigation and accessibility.',
        },
        {
          title: 'Code Quality',
          description:
            'Well-structured, maintainable code following best practices and modern development standards.',
        },
      ],
    }
  )
}

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const idx = parseInt(id, 10)
  const project = portfolioData.portfolio[idx]

  if (!project) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: 'var(--void)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-secondary)',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        Project not found.
      </div>
    )
  }

  const details = getProjectDetails(idx)
  const isLive = project.liveAvailable
  const padded = String(idx + 1).padStart(3, '0')

  return (
    <div
      style={{
        background: 'var(--void)',
        minHeight: '100vh',
        paddingTop: 100,
        paddingBottom: 80,
      }}
    >
      <style>{`
        .detail-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          background: transparent;
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          color: var(--text-secondary);
          font-family: Inter, sans-serif;
          font-size: 13px;
          text-decoration: none;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s, transform 0.2s;
        }
        .detail-link-btn:hover {
          border-color: var(--cyan);
          color: var(--cyan);
          transform: translateY(-1px);
        }
        .detail-nav-btn {
          padding: 10px 20px;
          background: transparent;
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          color: var(--text-secondary);
          font-family: JetBrains Mono, monospace;
          font-size: 12px;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
        }
        .detail-nav-btn:hover:not(:disabled) {
          border-color: var(--cyan);
          color: var(--cyan);
        }
        .detail-nav-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      `}</style>

      <div
        style={{
          maxWidth: 800,
          margin: '0 auto',
          padding: '0 40px',
        }}
      >
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ marginBottom: 40 }}
        >
          <button
            className="detail-link-btn"
            onClick={() => navigate('/')}
            style={{ border: '1px solid var(--border-subtle)', background: 'transparent' }}
          >
            ← Back to Projects
          </button>
        </motion.div>

        {/* Project Number Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 11,
            color: 'var(--text-muted)',
            letterSpacing: '0.1em',
            marginBottom: 12,
          }}
        >
          PROJECT.{padded}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          <span className="gradient-text">{project.title}</span>
        </motion.h1>

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          style={{
            display: 'inline-block',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 11,
            color: isLive ? '#00FF88' : '#FFD700',
            letterSpacing: '0.05em',
            marginBottom: 28,
          }}
        >
          {isLive ? '[ LIVE ]' : '[ DEV ]'}
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}
        >
          {project.codeAvailable && project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="detail-link-btn"
            >
              ⎇ View on GitHub
            </a>
          )}
          {isLive && project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="detail-link-btn"
            >
              ↗ Live Demo
            </a>
          )}
        </motion.div>

        {/* Tech Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.22 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 40 }}
        >
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          style={{
            background: 'var(--deep-panel)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 12,
            padding: '24px 28px',
            marginBottom: 32,
          }}
        >
          <div
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 10,
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
              marginBottom: 12,
            }}
          >
            OVERVIEW
          </div>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 16,
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            {details.overview}
          </p>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{ marginBottom: 48 }}
        >
          <div
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 10,
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
              marginBottom: 16,
            }}
          >
            KEY FEATURES
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {details.keyFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                style={{
                  background: 'var(--elevated-panel)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 10,
                  padding: '18px 20px',
                  display: 'flex',
                  gap: 16,
                  alignItems: 'flex-start',
                }}
              >
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 13,
                    color: 'var(--cyan)',
                    minWidth: 20,
                    paddingTop: 2,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: 15,
                      fontWeight: 600,
                      color: 'var(--cyan)',
                      marginBottom: 6,
                    }}
                  >
                    {feature.title}
                  </div>
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 13,
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}
        >
          <button
            className="detail-nav-btn"
            onClick={() => navigate(`/project/${idx - 1}`)}
            disabled={idx === 0}
          >
            ← Previous Project
          </button>
          <button
            className="detail-nav-btn"
            onClick={() => navigate(`/project/${idx + 1}`)}
            disabled={idx === portfolioData.portfolio.length - 1}
          >
            Next Project →
          </button>
        </motion.div>
      </div>
    </div>
  )
}
