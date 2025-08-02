import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';
import Starfield from '../components/Starfield';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Starfield />
      <section className="hero">
        <motion.div className="hero-content" variants={itemVariants}>
          <motion.h1 
            className="hero-title"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hi, I'm <motion.span 
              className="highlight"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Anthony Phan
            </motion.span>
          </motion.h1>
          <motion.h2 
            className="hero-subtitle"
            variants={itemVariants}
          >
            Software Engineering Student
          </motion.h2>
          <motion.p 
            className="hero-description"
            variants={itemVariants}
          >
            I create modern, responsive web applications that reach for the stars. 
            Passionate about turning cosmic ideas into digital reality across the universe of code.
          </motion.p>
          <motion.div 
            className="hero-buttons"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/projects" className="btn btn-primary">
                🚀 Explore My Universe
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="btn btn-secondary">
                ✨ Make Contact
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div 
          className="hero-image"
          variants={floatingVariants}
          animate="animate"
        >
          <motion.div 
            className="placeholder-image"
            whileHover={{ scale: 1.1, rotateY: 15 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              🌟
            </motion.span>
            <span>Your Cosmic Photo</span>
          </motion.div>
        </motion.div>
      </section>

      <motion.section 
        className="skills-preview"
        variants={itemVariants}
      >
        <div className="container">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Technologies From Across The Galaxy 🌌
          </motion.h3>
          <motion.div 
            className="skills-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="skill-item"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4>🌐 Frontend</h4>
              <p>React, JavaScript, HTML5, CSS3, Tailwind CSS</p>
            </motion.div>
            <motion.div 
              className="skill-item"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4>⚙️ Backend</h4>
              <p>Node.js, Express, Python, RESTful APIs</p>
            </motion.div>
            <motion.div 
              className="skill-item"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4>🗄️ Database</h4>
              <p>MongoDB, PostgreSQL, MySQL</p>
            </motion.div>
            <motion.div 
              className="skill-item"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4>🛠️ Tools</h4>
              <p>Git, Docker, AWS, Figma</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="featured-projects"
        variants={itemVariants}
      >
        <div className="container">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Featured Cosmic Projects 🚀
          </motion.h3>
          <motion.div 
            className="projects-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="project-card"
              whileHover={{ scale: 1.05, y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-image">
                <motion.div 
                  className="placeholder-project"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  🌟 Project 1
                </motion.div>
              </div>
              <div className="project-info">
                <h4>Stellar Web App</h4>
                <p>A cosmic web application that reaches across galaxies with modern technologies.</p>
                <div className="project-links">
                  <motion.a 
                    href="#" 
                    className="project-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🚀 Live Demo
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="project-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    💫 GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="project-card"
              whileHover={{ scale: 1.05, y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="project-image">
                <motion.div 
                  className="placeholder-project"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  🌌 Project 2
                </motion.div>
              </div>
              <div className="project-info">
                <h4>Galactic Dashboard</h4>
                <p>An interstellar control center built with cutting-edge space technologies.</p>
                <div className="project-links">
                  <motion.a 
                    href="#" 
                    className="project-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🚀 Live Demo
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="project-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    💫 GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="view-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/projects" className="btn btn-outline">
                🌟 Explore All Cosmic Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;
