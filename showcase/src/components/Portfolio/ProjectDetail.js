import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import portfolioData from '../../data/portfolio.json';
import './index.scss';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = portfolioData.portfolio[parseInt(id, 10)];

  if (!project) return <div className="project-not-found">Project not found.</div>;

  // Enhanced project details with bullet points based on resume and descriptions
  const getProjectDetails = (projectId) => {
    const details = {
      0: { // FinLit
        overview: "FinLit is an interactive financial literacy platform designed to educate users through dynamic quizzes and progress tracking. Built with modern web technologies, it provides an engaging way to learn essential financial concepts.",
        keyFeatures: [
          {
            title: "Interactive Quiz System",
            description: "Dynamic question logic with adaptive scoring and comprehensive progress tracking through an intuitive dashboard interface."
          },
          {
            title: "AI-Powered Content Generation",
            description: "Integrated OpenAI APIs to generate diverse quiz questions and multiple-choice options, ensuring fresh and relevant content."
          },
          {
            title: "Secure Authentication & Database",
            description: "JWT-based authentication flow with Clerk and PostgreSQL database schema using SQLAlchemy for robust user management and data persistence."
          }
        ]
      },
      1: { // AP PDF Generator
        overview: "The AP PDF Generator is a powerful automation tool developed for the City of Sacramento that streamlines document creation processes. It eliminates manual repetitive tasks and significantly improves workflow efficiency.",
        keyFeatures: [
          {
            title: "Automated PDF Generation",
            description: "Automated creation and naming of 1000+ project PDFs by extracting AP numbers and project names directly from Excel spreadsheets."
          },
          {
            title: "Advanced Processing",
            description: "Implemented PDF generation with ReportLab and added ZIP packaging options, reducing multi-day manual tasks to minutes of automated processing."
          },
          {
            title: "Workflow Optimization",
            description: "Streamlined staff workflows by eliminating repetitive errors and demonstrating how data parsing, string manipulation, and automation deliver measurable efficiency gains."
          }
        ]
      },
      2: { // Xpenza
        overview: "Xpenza is a comprehensive full-stack expense tracking application designed for personal and small business use. It provides real-time analytics and insights to help users manage their finances effectively.",
        keyFeatures: [
          {
            title: "Real-Time Analytics Dashboard",
            description: "Built for 20+ monthly users with comprehensive expense tracking and interactive data visualizations for better financial insights."
          },
          {
            title: "Modern Tech Stack",
            description: "Implemented Drizzle ORM for efficient database queries and ReactJS for responsive, interactive user interfaces."
          },
          {
            title: "Scalable Infrastructure",
            description: "Deployed on serverless PostgreSQL (Neon) and hosted via Vercel for high availability and optimal performance."
          }
        ]
      },
      3: { // Portfolio
        overview: "A modern, responsive portfolio website showcasing professional work and skills. Built with cutting-edge web technologies to provide an engaging user experience and highlight professional achievements.",
        keyFeatures: [
          {
            title: "Responsive Design",
            description: "Fully responsive layout that adapts seamlessly across all devices and screen sizes for optimal user experience."
          },
          {
            title: "Modern Technologies",
            description: "Built with React, Tailwind CSS, and Vite for fast development and excellent performance with modern web standards."
          },
          {
            title: "Professional Presentation",
            description: "Clean, professional design that effectively showcases projects and skills while maintaining visual appeal and usability."
          }
        ]
      },
      4: { // Luminum
        overview: "Luminum is a creative web application that demonstrates modern web development capabilities. It features an engaging user interface and showcases proficiency with contemporary web technologies.",
        keyFeatures: [
          {
            title: "Creative Interface",
            description: "Innovative and engaging user interface design that captures user attention and provides an enjoyable browsing experience."
          },
          {
            title: "Modern Web Stack",
            description: "Built with React, Tailwind CSS, and Vite for optimal performance and development efficiency."
          },
          {
            title: "Responsive Layout",
            description: "Fully responsive design that works perfectly across all devices and screen sizes."
          }
        ]
      },
      5: { // Old Portfolio
        overview: "An earlier iteration of the portfolio website that demonstrates the evolution of web development skills and design approaches. It showcases the progression from basic to advanced web development techniques.",
        keyFeatures: [
          {
            title: "Foundation Design",
            description: "Established the foundation for portfolio presentation with clean, functional design principles."
          },
          {
            title: "Technology Integration",
            description: "Successfully integrated React, Tailwind CSS, and modern JavaScript for enhanced user experience."
          },
          {
            title: "Responsive Framework",
            description: "Implemented responsive design patterns that ensure accessibility across various devices and screen sizes."
          }
        ]
      },
      6: { // Signature Web
        overview: "Signature Web is a unique digital signature application that allows users to create and customize digital signatures using modern web technologies. It provides an intuitive interface for digital document signing.",
        keyFeatures: [
          {
            title: "Digital Signature Creation",
            description: "Interactive signature creation using HTML5 Canvas API for smooth and responsive drawing experience."
          },
          {
            title: "Customization Options",
            description: "Multiple customization features including pen styles, colors, and signature positioning for professional document signing."
          },
          {
            title: "Modern Web Technologies",
            description: "Built with vanilla JavaScript and Canvas API for optimal performance and cross-browser compatibility."
          }
        ]
      },
      7: { // Weekly Schedule
        overview: "A comprehensive weekly scheduling application that helps users organize and manage their time effectively. It provides an intuitive interface for creating and managing weekly schedules and appointments.",
        keyFeatures: [
          {
            title: "Weekly Planning Interface",
            description: "Intuitive weekly calendar interface that allows users to easily create, edit, and manage their weekly schedules."
          },
          {
            title: "Responsive Design",
            description: "Fully responsive design that works seamlessly across all devices, from desktop computers to mobile phones."
          },
          {
            title: "Modern Technology Stack",
            description: "Built with React, Tailwind CSS, and Vite for optimal performance and development efficiency."
          }
        ]
      }
    };
    return details[projectId] || {
      overview: "This project demonstrates proficiency in modern web development technologies and best practices.",
      keyFeatures: [
        {
          title: "Technical Implementation",
          description: "Built using industry-standard technologies and frameworks for optimal performance and maintainability."
        },
        {
          title: "User Experience",
          description: "Designed with user experience in mind, ensuring intuitive navigation and accessibility."
        },
        {
          title: "Code Quality",
          description: "Well-structured, maintainable code following best practices and modern development standards."
        }
      ]
    };
  };

  const projectDetails = getProjectDetails(parseInt(id, 10));

  return (
    <div className="project-detail-container">
      <div className="project-content">
        <h1 className="project-title">{project.title}</h1>
        
        <div className="project-links">
          <h2>Links</h2>
          <div className="link-item">
            <strong>Link to Application:</strong> 
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.url}
            </a>
          </div>
          {project.cover && (
            <div className="link-item">
              <strong>Demo:</strong> 
              <a href={project.cover} target="_blank" rel="noopener noreferrer">
                View Project Image
              </a>
            </div>
          )}
        </div>

        <div className="project-overview">
          <h2>Overview</h2>
          <p>{projectDetails.overview}</p>
        </div>

        <div className="project-features">
          <h2>Key Features</h2>
          {projectDetails.keyFeatures.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-number">{index + 1}.</div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="project-navigation">
          <button 
            className="nav-btn prev-btn"
            onClick={() => navigate(`/portfolio/${Math.max(0, parseInt(id, 10) - 1)}`)}
            disabled={parseInt(id, 10) === 0}
          >
            Previous
          </button>
          <button 
            className="nav-btn next-btn"
            onClick={() => navigate(`/portfolio/${Math.min(portfolioData.portfolio.length - 1, parseInt(id, 10) + 1)}`)}
            disabled={parseInt(id, 10) === portfolioData.portfolio.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 