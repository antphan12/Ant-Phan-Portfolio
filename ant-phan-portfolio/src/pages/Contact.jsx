import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>
            I'm always interested in hearing about new opportunities and exciting projects. 
            Whether you have a question or just want to say hello, feel free to reach out!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info centered">
            <div className="contact-item">
              <div className="contact-icon">
                <span>📧</span>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>antphan12@gmail.com</p>
                <a href="mailto:antphan12@gmail.com">Send a message</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <span>💼</span>
              </div>
              <div className="contact-details">
                <h3>LinkedIn</h3>
                <p>Connect with me professionally</p>
                <a href="https://www.linkedin.com/in/anthony-phan-8bb143231/" target="_blank" rel="noopener noreferrer">View profile</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <span>💻</span>
              </div>
              <div className="contact-details">
                <h3>GitHub</h3>
                <p>Check out my code and projects</p>
                <a href="https://github.com/antphan12" target="_blank" rel="noopener noreferrer">View repositories</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <span>📄</span>
              </div>
              <div className="contact-details">
                <h3>Resume</h3>
                <p>View my experience and skills</p>
                <a href="/Anthony_Phan_Resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="availability">
          <div className="availability-card">
            <h3>Current Availability</h3>
            <div className="status-indicator">
              <span className="status-dot available"></span>
              <span>Available for new projects</span>
            </div>
            <p>
              I'm currently available for freelance work and full-time opportunities. 
              Response time is typically within 24 hours.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
