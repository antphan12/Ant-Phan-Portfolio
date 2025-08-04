import './About.css';
import Portrait from '../assets/images/Portrait.jpeg';


const About = () => {
  return (
    <div className="about">
      <div className="container">
        <section className="about-hero">
          <div className="about-content">
            <h1>About Me</h1>
            <p className="about-intro">
              I’m currently studying Software Engineering at Iowa State University and plan to graduate in May 2026. This Summer, as a Telecommunications Intern at MidAmerican Energy, where I’ve been getting great hands-on experience while continuing to grow my skills. I’m someone who’s always curious and motivated to learn,whether that’s through class projects, internships, or just building things on my own. I’ve been working with tools like AWS, Java, JavaScript, HTML/CSS, and C, and I’m always excited to take on new challenges and keep growing as a developer. 
            </p>
          </div>
          <div className="about-image">
            <img 
              src={Portrait} 
              alt="Anthony Phan - Professional Photo" 
              className="professional-photo"
            />
          </div>
        </section>

        <section className="experience">
          <h2>Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">May 2025 - Present</div>
              <div className="timeline-content">
                <h3>Telecommunications Engineer Intern</h3>
                <h4>BHE MidAmerican Energy Comapny</h4>
                <p>
                  As a Telecommunications Intern at MidAmerican Energy, I helped plan and map fiber optic routes to connect substations and remote sites across Iowa, supporting improved infrastructure and network reliability. I worked on upgrading legacy networking equipment to meet cybersecurity standards and created detailed documentation for inspections, installations, and upgrade planning. I also managed inventory systems for telecom and IT equipment and used tools like Cisco, Nokia, Excel, and Visio to assist with network planning and stakeholder presentations. Additionally, I contributed to statewide Rural Broadband and AMI initiatives aimed at expanding connectivity and modernizing energy infrastructure.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">May 2024 - Aug 2024</div>
              <div className="timeline-content">
                <h3>Management Intern</h3>
                <h4>Menards</h4>
                <p>
                  During my time at Menards, I worked closely with the General Management Team, Department Managers, and team members to gain a well-rounded understanding of daily operations and long-term business strategies. I actively contributed to department sales by engaging with customers and using personalized sales techniques, which led to an 8% revenue increase. Additionally, I collaborated with senior leadership on succession planning efforts by helping identify high-potential employees and supporting the creation of development plans to build a strong internal talent pipeline.

                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="skills">
          <h2>Skills & Technologies</h2>
          <div className="skills-categories">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skill-tags">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">Swift</span>
                <span className="skill-tag">C</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">ThreeJS</span>
                <span className="skill-tag">AngularJS</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-tags">
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Flask</span>
                <span className="skill-tag">MySQL</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <div className="skill-tags">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">AWS Amplify</span>
                <span className="skill-tag">AWS EC2</span>
                <span className="skill-tag">AWS Route 53</span>
                <span className="skill-tag">VS Vode</span>
                <span className="skill-tag">Android Studio</span>
                <span className="skill-tag">IntelliJ</span>
                <span className="skill-tag">Xcode</span>
              </div>
            </div>
          </div>
        </section>

        <section className="education">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Bachelor's of Science in Software Engineering</h3>
            <h4>Iowa State University</h4>
            <p className="education-date">2021 - 2026</p>
            <p>
              I’m currently a Software Engineering student at Iowa State University, building a strong foundation in programming, system design, and real world problem solving. Through coursework and hands-on projects, I’ve gained experience in full-stack development, data structures & algorithms, software development, and team collaboration. I’m passionate about creating technology that’s both functional and meaningful, and I’m always eager to learn, grow, and take on new challenges.
            </p>
          </div>
        </section>

        <section className="personal">
          <h2>When I'm Not Coding</h2>
          <p>
            I am a very outgoing and social person who loves to meet new people and learn about the world around me. In my free time, I enjoy reading, cooking, spending time with my family and friends and playing video games. I am always looking for new experiences and ways to grow, whether it's through travel, trying new hobbies, or simply enjoying the company of others. I believe that life is all about connections and learning from each other, and I strive to embrace every opportunity that comes my way.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
