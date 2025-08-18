import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration from environment variables
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'antphan12@gmail.com'
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <div className="contact-info">
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
          </div>

          <div className="contact-form-section">
            <h2>Send a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project or just say hello..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="form-status success">
                  <p>✅ Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-status error">
                  <p>❌ Something went wrong. Please try again or contact me directly.</p>
                </div>
              )}
            </form>
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
