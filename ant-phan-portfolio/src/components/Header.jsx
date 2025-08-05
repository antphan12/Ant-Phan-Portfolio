import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <motion.header 
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="nav">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" onClick={closeMenu}>
            <motion.span
              className="logo-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Ant Phan
            </motion.span>
          </Link>
        </motion.div>

        <AnimatePresence>
          <motion.div 
            className={`nav-menu ${isMenuOpen ? 'active' : ''}`}
            initial={false}
            animate={isMenuOpen ? "open" : "closed"}
            variants={{
              open: {
                opacity: 1,
                x: 0,
                transition: { staggerChildren: 0.1, delayChildren: 0.1 }
              },
              closed: {
                opacity: 1,
                x: 0,
                transition: { staggerChildren: 0.05, staggerDirection: -1 }
              }
            }}
          >
            <motion.div
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Home
              </Link>
            </motion.div>
            <motion.div
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/about" 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                About
              </Link>
            </motion.div>
            <motion.div
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/projects" 
                className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Projects
              </Link>
            </motion.div>
            <motion.div
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact" 
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <motion.div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span 
            className="bar"
            animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          ></motion.span>
          <motion.span 
            className="bar"
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          ></motion.span>
          <motion.span 
            className="bar"
            animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          ></motion.span>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;
