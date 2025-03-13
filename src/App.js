import {useState, useEffect} from 'react';


import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import profile from './images/profile.jpg';

import { IoIosMenu } from "react-icons/io";

import AOS from "aos";
import "aos/dist/aos.css";

import './App.css';

const App = () => {

  useEffect(() => {
    AOS.init({ 
      duration: 600,
      once: true, 
      offset: 10,
      easing: "ease-out"
    });
  }, []);

  const [toggleMenu, setToggleMenu] = useState(false);

  const onClickMenuIcon = () => {
    setToggleMenu(!toggleMenu);
  }


  return (
    <div className="initial-container">
      <div className="header-container">
        <header>
          <h1 className="portfolio-heading">Portfolio</h1>
          <IoIosMenu onClick={onClickMenuIcon} className="menu-icon" />
          <nav className={toggleMenu ? 'nav-active' : 'nav-inactive'}>
            <ul className="menu-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <nav className='nav-main'>
            <ul className="nav-links">
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
            <h1  data-aos="fade-up"className="name-head-1">Hi, Myself</h1>
            <h1  data-aos="fade-up"className="name-head-2">Tammineni Mohan Reddy</h1>
            <h1 data-aos="fade-up" className="name-head-1">And I'm a <span className="web-developer-span">Web Developer</span></h1>
            <p data-aos="fade-up" className='profile-description'>I'm a passionate full-stack developer, crafting seamless web experiences with React, Node.js, and modern technologies.
              I love turning ideas into functional, user-friendly applications.</p>
            <ul data-aos="fade-up">
              <li><FaFacebook className='icons' /></li>
              <li><FaInstagram className='icons' /></li>
              <li><FaLinkedin className='icons' /></li>
              <li><FaTwitter className='icons' /></li>
            </ul>
            <button data-aos="fade-up" className="resume-button">View Resume</button>
          </div>
          <img src={profile} alt='profile' className="profile-image" />
          
        </section>
        <section className="main-containers" id="home">
          <div className="home-content">
            <h1 data-aos="fade-up" className="name-head-1">Hi, Myself</h1>
            <h1 data-aos="fade-up" className="name-head-2">Tammineni Mohan Reddy</h1>
            <h1 data-aos="fade-up" className="name-head-1">And I'm a <span className="web-developer-span">Web Developer</span></h1>
            <p data-aos="fade-up" className='profile-description'>I'm a passionate full-stack developer, crafting seamless web experiences with React, Node.js, and modern technologies.
              I love turning ideas into functional, user-friendly applications.</p>
            <ul data-aos="fade-up">
              <li><FaFacebook className='icons' /></li>
              <li><FaInstagram className='icons' /></li>
              <li><FaLinkedin className='icons' /></li>
              <li><FaTwitter className='icons' /></li>
            </ul>
            <button data-aos="fade-up" className="resume-button">View Resume</button>
          </div>
          <img src={profile} alt='profile' className="profile-image" />
          
        </section>
        <section className="main-containers" id="home">
          <div className="home-content">
            <h1 data-aos="fade-up"  className="name-head-1">Hi, Myself</h1>
            <h1 data-aos="fade-up" className="name-head-2">Tammineni Mohan Reddy</h1>
            <h1 data-aos="fade-up" className="name-head-1">And I'm a <span className="web-developer-span">Web Developer</span></h1>
            <p data-aos="fade-up" className='profile-description'>I'm a passionate full-stack developer, crafting seamless web experiences with React, Node.js, and modern technologies.
              I love turning ideas into functional, user-friendly applications.</p>
            <ul data-aos="fade-up">
              <li><FaFacebook className='icons' /></li>
              <li><FaInstagram className='icons' /></li>
              <li><FaLinkedin className='icons' /></li>
              <li><FaTwitter className='icons' /></li>
            </ul>
            <button data-aos="fade-up" className="resume-button">View Resume</button>
          </div>
          <img src={profile} alt='profile' className="profile-image" />
          
        </section>
        <section id="about">
          <p>
            I’m <mark className="special-about-me-content">Tammineni Mohan Reddy</mark>, a dedicated Full-Stack Web Developer with expertise in React.js, Node.js, Express.js, and SQLite. I specialize in building modern, high-performance web applications that are responsive, efficient, and scalable.
          </p>
          <p>
           I enjoy turning ideas into reality through clean code and seamless UI/UX. Whether it's frontend development, backend APIs, or full-stack solutions, I focus on delivering high-quality and optimized web applications.
          </p>

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