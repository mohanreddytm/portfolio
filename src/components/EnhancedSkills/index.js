import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import CountUp from 'react-countup';
import { FaCode, FaDatabase, FaServer, FaMobile, FaCloud, FaShieldAlt, FaTimes, FaExpand } from 'react-icons/fa';
import './index.css';

const EnhancedSkills = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const fadeInUp = useSpring({
    opacity: inView ? 1 : 0.8,
    transform: inView ? 'translateY(0px)' : 'translateY(20px)',
    config: { tension: 200, friction: 20 }
  });

  const skillCategories = [
    { id: 'all', name: 'All Skills', icon: <FaCode /> },
    { id: 'frontend', name: 'Frontend', icon: <FaCode /> },
    { id: 'backend', name: 'Backend', icon: <FaServer /> },
    { id: 'database', name: 'Database', icon: <FaDatabase /> },
    { id: 'mobile', name: 'Mobile', icon: <FaMobile /> },
    { id: 'cloud', name: 'Cloud', icon: <FaCloud /> },
    { id: 'security', name: 'Security', icon: <FaShieldAlt /> }
  ];

  const categorizedSkills = {
    frontend: skills?.filter(skill => 
      ['HTML/CSS', 'JavaScript', 'React Js', 'Responsive Web Design', 'Responsive Web Design using Flexbox'].includes(skill.name)
    ) || [],
    backend: skills?.filter(skill => 
      ['Node Js & Express Js', 'Dynamic Web Application'].includes(skill.name)
    ) || [],
    database: skills?.filter(skill => 
      ['SqLite & PostgreSql'].includes(skill.name)
    ) || [],
    mobile: skills?.filter(skill => 
      ['Python'].includes(skill.name)
    ) || [],
    cloud: skills?.filter(skill => 
      ['Dynamic Web Application'].includes(skill.name)
    ) || [],
    security: skills?.filter(skill => 
      ['Dynamic Web Application'].includes(skill.name)
    ) || []
  };

  const filteredSkills = selectedCategory === 'all' 
    ? (skills || [])
    : (categorizedSkills[selectedCategory] || []);

  const openCertificate = (certificate, skillName) => {
    setSelectedCertificate({ certificate, skillName });
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedCertificate) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('modal-open');
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('modal-open');
    };
  }, [selectedCertificate]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && selectedCertificate) {
        closeCertificate();
      }
    };

    if (selectedCertificate) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedCertificate]);

  return (
    <section className="enhanced-skills" id="skills" ref={ref}>
      <animated.div className="skills-container" style={inView ? fadeInUp : { opacity: 1, transform: 'translateY(0px)' }}>
        <div className="skills-header">
          <h2 className="skills-title">
            <span className="title-accent">Skills</span> & Expertise
          </h2>
          <p className="skills-subtitle">
            My technical expertise spans across modern web technologies, 
            enabling me to build comprehensive solutions from concept to deployment.
          </p>
        </div>

        <div className="skills-categories">
          {skillCategories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill, index) => (
              <animated.div
                key={skill.name}
                className="skill-card"
                style={{
                  ...fadeInUp,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="skill-header">
                  <div className="skill-icon">
                    <img src={skill.image} alt={skill.name} className="skill-image" />
                  </div>
                  <div className="skill-info">
                    <h3 className="skill-name">{skill.name}</h3>
                    <div className="skill-level">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill"
                          style={{ width: `${Math.min(85 + Math.random() * 15, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="skill-certificate" onClick={() => openCertificate(skill.certificate, skill.name)}>
                  <img 
                    src={skill.certificate} 
                    alt={`${skill.name} Certificate`} 
                    className="certificate-image"
                  />
                  <div className="certificate-overlay">
                    <FaExpand />
                    <span>View Certificate</span>
                  </div>
                </div>
              </animated.div>
            ))
          ) : (
            <div className="no-skills-message">
              <p>No skills found for the selected category. Skills count: {skills?.length || 0}</p>
            </div>
          )}
        </div>

        <div className="skills-stats">
          <div className="stat-item">
            <CountUp end={skills?.length || 0} duration={2} className="stat-number" />
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-item">
            <CountUp end={100} duration={2} suffix="%" className="stat-number" />
            <span className="stat-label">Success Rate</span>
          </div>
          <div className="stat-item">
            <CountUp end={24} duration={2} suffix="h" className="stat-number" />
            <span className="stat-label">Response Time</span>
          </div>
          <div className="stat-item">
            <CountUp end={50} duration={2} suffix="+" className="stat-number" />
            <span className="stat-label">Projects Completed</span>
          </div>
        </div>
      </animated.div>

      {/* Full Screen Certificate Modal */}
      {selectedCertificate && createPortal(
        <div className="certificate-modal" onClick={closeCertificate}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedCertificate.skillName} Certificate</h3>
              <button className="close-btn" onClick={closeCertificate}>
                <FaTimes />
              </button>
            </div>
            <div className="modal-body">
              <img 
                src={selectedCertificate.certificate} 
                alt={`${selectedCertificate.skillName} Certificate`} 
                className="modal-certificate-image"
              />
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default EnhancedSkills; 