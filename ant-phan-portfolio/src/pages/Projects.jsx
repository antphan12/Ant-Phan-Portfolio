import { useState } from 'react';
import './Projects.css';

// Import project images
import PortfolioImage from '../assets/images/Portfolio.png';
import ZentryImage from '../assets/images/Zentry.png';
import BlueSkyImage from '../assets/images/BlueSkyLogo.png';
import ISUQuizImage from '../assets/images/ISU_Quiz.png';
import TinkedInImage from '../assets/images/TinkedIn.png';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with Vite, React, modern design principles, and animations.",
      technologies: ["React", "CSS", "Vite", "HTML", "Framer Motion"],
      category: "frontend",
      image: PortfolioImage,
      github: "https://github.com/antphan12/Ant-Phan-Portfolio",
      featured: true
    },
    {
      id: 2,
      title: "Zentry",
      description: "A full stack productivy web application that allows users to use different tools for studying.",
      technologies: ["React", "CSS", "Vite", "HTML", "Flask", "Auth0", "AWS RDS" ],
      category: "fullstack",
      image: ZentryImage,
      github: "https://github.com/antphan12/Zentry",
      featured: true
    },
    {
      id: 3,
      title: "Blue Sky Bank",
      description: "A banking application, where users can track their spendings.",
      technologies: ["React", "TailwindCSS", "Next.js", "JSX", "Appwrite", "Plaid API", "Dwolla API"],
      category: "fullstack",
      image: BlueSkyImage,
      github: "https://github.com/antphan12/Blue_Sky_Bank",
      featured: true
    },
    {
      id: 4,
      title: "ISU Quiz App",
      description: "A small iOS project to test the students of Iowa State University.",
      technologies: ["Swift", "SwiftUI", "XCode"],
      category: "frontend",
      image: ISUQuizImage,
      github: "https://github.com/antphan12/ISUQuiz",
      featured: true
    },
    {
      id: 5,
      title: "TinkedIn",
      description: "A semester class project. A social app that allows users to connect with each other.",
      technologies: ["Java", "CRUD", "Postman", "WebSocket", "Anroid Studio"],
      category: "fullstack",
      image: TinkedInImage,
      github: "",
      featured: true
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="projects">
      <div className="container">
        <div className="projects-header">
          <h1>My Projects</h1>
          <p>Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.</p>
        </div>

        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category.key}
              className={`filter-btn ${filter === category.key ? 'active' : ''}`}
              onClick={() => setFilter(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`project-img ${project.title === 'TinkedIn' ? 'tinkedin-img' : ''} ${project.title === 'Portfolio Website' ? 'portfolio-img' : ''}`}
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  {project.featured && <span className="featured-badge">Featured</span>}
                </div>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found for the selected category.</p>
          </div>
        )}

        <div className="cta-section">
          <h2>Interested in working together?</h2>
          <p>I'm always open to discussing new opportunities and interesting projects.</p>
          <a href="/contact" className="btn btn-primary">Get In Touch</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
