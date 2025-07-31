import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaDownload, FaArrowDown } from "react-icons/fa";
import './index.css';

const HeroSection = ({ profile, downloadResume }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const fadeInUp = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 300, friction: 30 }
  });

  return (
    <section className="hero-section" id="home">
      <div className="hero-background">
        <div className="particles-container">
          {/* Simple CSS-based particles effect */}
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>
      </div>

      <div className="hero-container" ref={ref}>
        <animated.div className="hero-content" style={fadeInUp}>
          <div className="hero-text">
            <div className="greeting">
              <span className="wave">👋</span>
              <span className="greeting-text">Hello, I'm</span>
            </div>
            
            <h1 className="hero-name">
              <span className="name-gradient">Tammineni Mohan Reddy</span>
            </h1>
            
            <div className="hero-title">
              <span className="title-prefix">I'm a </span>
              <span className="typed-text">
                <span className="typing-animation">Full Stack Developer</span>
              </span>
            </div>
            
            <p className="hero-description">
              Passionate about creating seamless web experiences with modern technologies. 
              I transform ideas into functional, scalable applications that users love.
            </p>
            
            <div className="hero-actions">
              <button className="cta-button primary" onClick={downloadResume}>
                <FaDownload className="button-icon" />
                Download Resume
              </button>
              <button className="cta-button secondary">
                <FaArrowDown className="button-icon" />
                View Projects
              </button>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/mohanreddytm" className="social-link" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/mohanreddytm/" className="social-link" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://x.com/MohanreddyTamm2" className="social-link" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/username_mohan/" className="social-link" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </animated.div>
        
        <animated.div className="hero-image" style={fadeInUp}>
          <div className="image-container">
            <div className="image-border">
              <img src={profile} alt="Mohan Reddy" className="profile-image" />
            </div>
            <div className="floating-elements">
              <div className="floating-element tech-badge">React</div>
              <div className="floating-element tech-badge">Node.js</div>
              <div className="floating-element tech-badge">JavaScript</div>
              <div className="floating-element tech-badge">SQL</div>
            </div>
          </div>
        </animated.div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default HeroSection; 