
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import profile from './images/profile.jpg';

import './App.css';

const App = () => {
  return (
    <div className="initial-container">
      <div className="header-container">
        <header>
          <h1 className="portfolio-heading">Portfolio</h1>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>
      </div>
      <div className="main-container">
        <section className="main-containers" id="home">
          <div className="home-content">
            <h1 className="name-head-1">Hi, Myself</h1>
            <h1 className="name-head-2">Tammineni Mohan Reddy</h1>
            <h1 className="name-head-1">And I'm a <span className="web-developer-span">Web Developer</span></h1>
            <p className='profile-description'>I'm a passionate full-stack developer, crafting seamless web experiences with React, Node.js, and modern technologies.
              I love turning ideas into functional, user-friendly applications.</p>
            <ul>
              <li><FaFacebook className='icons' /></li>
              <li><FaInstagram className='icons' /></li>
              <li><FaLinkedin className='icons' /></li>
              <li><FaTwitter className='icons' /></li>
            </ul>
            <button className="resume-button">View Resume</button>
          </div>
          <img src={profile} alt='profile' className="profile-image" />
          
        </section>
        <section id="skills">
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Email:</p>
          <p>Phone:</p>
        </section>
            
      </div>
    </div>
  );
}

export default App;