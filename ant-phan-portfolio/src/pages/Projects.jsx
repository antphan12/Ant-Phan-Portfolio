import { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      image: "project1.jpg",
      liveDemo: "#",
      github: "#",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team collaboration features.",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      category: "fullstack",
      image: "project2.jpg",
      liveDemo: "#",
      github: "#",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts and interactive charts.",
      technologies: ["JavaScript", "API Integration", "Chart.js", "CSS3"],
      category: "frontend",
      image: "project3.jpg",
      liveDemo: "#",
      github: "#",
      featured: false
    },
    {
      id: 4,
      title: "RESTful API Service",
      description: "A scalable REST API with authentication, rate limiting, and comprehensive documentation.",
      technologies: ["Node.js", "Express", "JWT", "Swagger"],
      category: "backend",
      image: "project4.jpg",
      liveDemo: "#",
      github: "#",
      featured: false
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and modern design principles.",
      technologies: ["React", "CSS3", "Vite", "React Router"],
      category: "frontend",
      image: "project5.jpg",
      liveDemo: "#",
      github: "#",
      featured: false
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
                <div className="placeholder-project-image">
                  <span>Project Image</span>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link">
                      Live Demo
                    </a>
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
