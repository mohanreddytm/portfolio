import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import { FaExternalLinkAlt, FaGithub, FaEye, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './index.css';

const EnhancedProjects = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const fadeInUp = useSpring({
    opacity: inView ? 1 : 0.8,
    transform: inView ? 'translateY(0px)' : 'translateY(30px)',
    config: { tension: 200, friction: 20 }
  });

  const slideInLeft = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0px)' : 'translateX(-50px)',
    config: { tension: 300, friction: 30 }
  });

  const slideInRight = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0px)' : 'translateX(50px)',
    config: { tension: 300, friction: 30 }
  });

  const currentProject = projects[selectedProject];

  const nextProject = () => {
    setSelectedProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setSelectedProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="enhanced-projects" id="projects" ref={ref}>
      <animated.div className="projects-container" style={fadeInUp}>
        <div className="projects-header">
          <h2 className="projects-title">
            <span className="title-accent">My</span> Projects
          </h2>
          <p className="projects-subtitle">
            Explore my latest work showcasing modern web development and innovative solutions
          </p>
        </div>

        {/* Featured Project Showcase */}
        <div className="featured-project">
          <animated.div className="project-content" style={slideInLeft}>
            <div className="project-info">
              <div className="project-number">
                <span className="number-bg">0{currentProject.projectNo}</span>
                <span className="number-text">0{currentProject.projectNo}</span>
              </div>
              
              <h3 className="project-title">{currentProject.title}</h3>
              <p className="project-description">{currentProject.desc}</p>
              
              <div className="project-tech-stack">
                <span className="tech-label">Technologies Used:</span>
                <div className="tech-tags">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">Express</span>
                  <span className="tech-tag">PostgreSQL</span>
                </div>
              </div>

              <div className="project-actions">
                <a 
                  href={currentProject.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link live-demo"
                >
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </a>
                {currentProject.githubUrl && (
                  <a 
                    href={currentProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link source-code"
                  >
                    <FaGithub />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>
          </animated.div>

          <animated.div className="project-visual" style={slideInRight}>
            <div className="project-image-container">
              <img 
                src={currentProject.image} 
                alt={currentProject.title} 
                className="project-image"
              />
              <div className="project-overlay">
                <div className="overlay-content">
                  <img src={currentProject.logo} alt="Project Logo" className="project-logo" />
                  <h4>{currentProject.title}</h4>
                  <div className="overlay-actions">
                    <a 
                      href={currentProject.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="overlay-btn"
                    >
                      <FaEye />
                      <span>View Project</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </animated.div>
        </div>

        {/* Project Navigation */}
        <div className="project-navigation">
          <button 
            className="nav-btn prev-btn" 
            onClick={prevProject}
            disabled={selectedProject === 0}
          >
            <FaArrowLeft />
            <span>Previous</span>
          </button>
          
          <div className="project-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`indicator ${selectedProject === index ? 'active' : ''}`}
                onClick={() => setSelectedProject(index)}
              >
                <span className="indicator-number">0{index + 1}</span>
              </button>
            ))}
          </div>

          <button 
            className="nav-btn next-btn" 
            onClick={nextProject}
            disabled={selectedProject === projects.length - 1}
          >
            <span>Next</span>
            <FaArrowRight />
          </button>
        </div>

        {/* All Projects Grid
        <div className="projects-grid">
          <h3 className="grid-title">All Projects</h3>
          <div className="projects-list">
            {projects.map((project, index) => (
              <animated.div
                key={project.projectNo}
                className={`project-card ${selectedProject === index ? 'active' : ''}`}
                style={{
                  ...fadeInUp,
                  animationDelay: `${index * 0.1}s`
                }}
                onClick={() => setSelectedProject(index)}
              >
                <div className="card-image">
                  <img src={project.image} alt={project.title} />
                  <div className="card-overlay">
                    <FaCode />
                  </div>
                </div>
                <div className="card-content">
                  <h4 className="card-title">{project.title}</h4>
                  <p className="card-desc">{project.desc.substring(0, 80)}...</p>
                  <div className="card-number">0{project.projectNo}</div>
                </div>
              </animated.div>
            ))}
          </div>
        </div> */}
      </animated.div>
    </section>
  );
};

export default EnhancedProjects; 