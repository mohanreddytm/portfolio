import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaRegCopyright, FaAngleUp } from 'react-icons/fa';
import './index.css';

const ModernFooter = () => {
  const fadeInUp = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(30px)' },
    config: { tension: 300, friction: 30 }
  });

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/mohanreddytm/',
      label: 'LinkedIn',
      color: '#0077b5'
    },
    {
      icon: <FaGithub />,
      url: 'https://github.com/mohanreddytm',
      label: 'GitHub',
      color: '#333'
    },
    {
      icon: <FaTwitter />,
      url: 'https://x.com/MohanreddyTamm2',
      label: 'Twitter',
      color: '#1da1f2'
    },
    {
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/username_mohan/',
      label: 'Instagram',
      color: '#e4405f'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="modern-footer">
      <animated.div className="footer-container" style={fadeInUp}>
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Mohan Reddy</h3>
            <p className="footer-description">
              Full Stack Developer passionate about creating innovative web solutions 
              and turning ideas into reality through clean code and modern technologies.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Services</h4>
            <ul className="footer-links">
              <li>Web Development</li>
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>API Development</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Connect</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <animated.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{
                    ...fadeInUp,
                    animationDelay: `${index * 0.1}s`
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = social.color;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(100, 255, 218, 0.1)';
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </animated.a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-info">
            <p className="copyright">
              <FaRegCopyright className="copyright-icon" />
              2025 Mohan Reddy. All Rights Reserved.
            </p>
            <p className="location">📍 Hyderabad, India</p>
          </div>
          
          <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
            <FaAngleUp />
          </button>
        </div>
      </animated.div>
    </footer>
  );
};

export default ModernFooter; 