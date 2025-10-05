// src/components/Projects/Projects.jsx
import React from 'react';
import './Projects.css'; // <-- FIX: Changed path from '../Projects.css' to './Projects.css'
import { Github } from 'lucide-react'; // Removed Link icon

const projectData = [
  {
    title: 'Anomaly Detection in Stock Market Trends',
    description: 'Engineered a Streamlit dashboard to detect anomalies in stock market behavior using the Isolation Forest algorithm. Enabled real-time analysis with automated email alerts.',
    technologies: ['Python', 'Isolation Forest', 'Streamlit', 'Data Science'],
    githubLink: 'https://github.com/ANUSHAKAISETTY/AnomalyDetection.git', 
  },
  {
    title: 'BuilderCo CRM (E-commerce)',
    description: 'Developed an e-commerce website for construction materials, built with Python Flask, featuring a customer storefront and a complete admin dashboard for managing the business.',
    technologies: ['Python', 'Flask', 'HTML/CSS', 'MySQL', 'Full-Stack'],
    githubLink: 'https://github.com/ANUSHAKAISETTY/BUILDERCO.git',
  },
  {
    title: 'Payroll System using Java Spring Boot',
    description: 'Built a complete backend for an employee payroll system using Spring Boot. This REST API handles all data and calculations, making it easy for any frontend to connect.',
    technologies: ['Java', 'Spring Boot', 'REST API', 'Backend', 'JPA'],
    githubLink: 'https://github.com/ANUSHAKAISETTY/Payrollsystem.git',
  },
  {
    title: 'Mushroom Classification Using Supervised Learning',
    description: 'Developed a classifier to detect edible vs. poisonous mushrooms using the UCI dataset. Deployed as a GUI app for improved accessibility and food safety awareness.',
    technologies: ['Python', 'Supervised Learning', 'GUI', 'Data Analysis'],
    githubLink: 'https://github.com/ANUSHAKAISETTY/Mushroom-Classification.git',
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Key Projects</h2>
        
        <div className="project-grid">
          {projectData.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="tech-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                {/* Only render GitHub link */}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={20} /> View on GitHub
                  </a>
                )}
                {/* Live Demo link is REMOVED */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;