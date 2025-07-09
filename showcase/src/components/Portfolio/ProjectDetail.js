import React from 'react';
import { useParams } from 'react-router-dom';
import portfolioData from '../../data/portfolio.json';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = portfolioData.portfolio[parseInt(id, 10)];

  if (!project) return <div style={{ color: '#000', background: '#fff', minHeight: '100vh', padding: 40 }}>Project not found.</div>;

  return (
    <div style={{ background: '#fff', color: '#000', minHeight: '100vh', padding: 40, maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 20 }}>{project.title}</h1>
      <img src={project.cover} alt={project.title} style={{ width: '100%', maxWidth: 400, borderRadius: 12, marginBottom: 24 }} />
      <div style={{ fontSize: 20, color: '#444', marginBottom: 20 }}>{project.description}</div>
      <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', fontWeight: 700, fontSize: 18, textDecoration: 'underline' }}>
        Visit Project
      </a>
    </div>
  );
};

export default ProjectDetail; 