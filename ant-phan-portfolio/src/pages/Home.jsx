import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';
import Starfield from '../components/Starfield';
import Portrait from '../assets/images/Headshot.jpg';
import ZentryImage from '../assets/images/Zentry.png';
import BlueSkyBankImage from '../assets/images/BlueSkyLogo.png';

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
            Student at Iowa State University, on a mission to build impactful tech that’s out of this world. From launching full-stack web apps, with a focus on frontend to mapping fiber optic routes across Iowa, I’ve explored both digital and physical networks. I’ve worked on projects like rural broadband expansion and AMI smart grids, always aiming to bridge gaps and connect systems. Whether it’s backend APIs, frontend interfaces, or network infrastructure, I’m creating solutions that are both stellar and practical.
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
                Explore My Projects
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="btn btn-secondary">
                Make Contact
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="social-icons"
            variants={itemVariants}
          >
            <motion.a
              href="https://www.linkedin.com/in/anthony-phan-8bb143231/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              title="LinkedIn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>
            <motion.a
              href="https://github.com/antphan12"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              title="GitHub"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
            <motion.a
              href="mailto:antphan12@gmail.com"
              className="social-icon"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              title="Email"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
              </svg>
            </motion.a>
            <motion.a
              href="/Anthony_Phan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              title="Resume"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div 
          className="hero-image"
          variants={floatingVariants}
          animate="animate"
        >
          <motion.div 
            className="portrait-container"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={Portrait} 
              alt="Anthony Phan Portrait" 
              className="portrait-image"
            />
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
              <h4>🌐 Progamming Languages</h4>
              <p> Java, JavaScript, TypeScript, Python, HTML, CSS, ,Swift, C</p>
            </motion.div>
            <motion.div 
              className="skill-item"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4>🌐 Frontend</h4>
              <p>React, Node.js, ThreeJS, TailwindCSS, AngularJS</p>
            </motion.div>
            <motion.div 
              className="skill-item"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4>⚙️ Backend & Cloud</h4>
              <p>MongoDB, Flask, MySQL, AWS EC2, AWS Amplify, AWS Route 53, AWS S3</p>
            </motion.div>
            <motion.div 
              className="skill-item"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4>🛠️ Tools & Others</h4>
              <p>Git, Docker, Figma, Microsoft Office, VS Code, Android Studio, IntelliJ, XCode</p>
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
            Featured Projects 
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
                <motion.img 
                  src={ZentryImage}
                  alt="Zentry Project"
                  className="project-image-actual"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="project-info">
                <h4>Zentry</h4>
                <p>A full stack productivy web application that allows users to use different tools for studying.</p>
                <div className="project-links">
                  {/* <motion.a 
                    href="#" 
                    className="project-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a> */}
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
                <motion.img 
                  src={BlueSkyBankImage}
                  alt="Blue Sky Bank Project"
                  className="project-image-actual"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="project-info">
                <h4>Blue Sky Bank</h4>
                <p>A banking application, where users can track their spendings.</p>
                <div className="project-links">
                  <motion.a 
                    href="https://github.com/antphan12/Blue_Sky_Bank" 
                    className="project-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
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
                Explore All My Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;
