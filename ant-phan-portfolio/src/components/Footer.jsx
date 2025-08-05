import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Ant Phan</h3>
          <p>Frontend Focused Developer passionate about creating innovative solutions.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="https://github.com/antphan12" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/anthony-phan-8bb143231/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:antphan12@gmail.com">Email</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Ant Phan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
