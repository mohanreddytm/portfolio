import {useState, useEffect} from 'react';


import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiSolidRightArrow, BiSolidDownArrow } from "react-icons/bi";

import profile from './images/profile.jpg';
import about from './images/aboutme.jpg';

import { IoIosMenu } from "react-icons/io";

import Services from './components/SericesData';

import reactimage from "./images/reactimage.png"
import flexbox from './images/flexbox.png'

import responsivewebdesigncertificate from './images/responsivewebdesigncertificate.png'
import htmlcsscertificate from './images/htmlcsscertificate.png'
import dynamicwebappcertificate from './images/dynamicwebappcertificate.png'
import nodecertificate from './images/nodecertificate.png'
import reactcertificate from './images/reactcertificate.png'
import javascriptcertificate from './images/javascriptcertificate.png'
import pythoncertificate from './images/pythoncertificate.png'
import webdesignflexboxcertificate from './images/webdesignflexboxcertificate.png'
import databasecertificate from './images/databasecertificate.png'

import EveryService from './components/EveryService';
import EverySkill  from './components/EverySkill';


import AOS from "aos";
import "aos/dist/aos.css";

import './App.css';

const App = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [loadservices, setloadservices] = useState(false)

  

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

  const CertificatePopup = () => {
    return (
      <div>
        <h1>Certificate</h1>
        <img src="https://certificates.ccbp.in/academy/node-js?id=WJKEDWVIYP" />
      </div>
    )
  }

  const skills = [
    {name :"HTML/CSS", certificate:htmlcsscertificate, image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name :"JavaScript", certificate : javascriptcertificate , image: "https://img.freepik.com/free-vector/programming-code-writing-isometric-icon-software-development-laptop-with-text-program-code_39422-887.jpg?t=st=1742619897~exp=1742623497~hmac=74c2d4bc1553bebf731340ee65bc23723a6cc726a350e9a7c4de911662bf164d&w=1380"},
    {name :"React Js", certificate : reactcertificate, image: reactimage},
    {name:"Node Js & Express Js",certificate: nodecertificate, image:"https://img.freepik.com/free-photo/application-programming-interface-hologram_23-2149092255.jpg?t=st=1742728364~exp=1742731964~hmac=7f25b7c56a20d269f423d9b04e279f25ee4ecf1a3b6f6d6f504bec865902b5d3&w=1480"},
    {name :"SqLite & PostgreSql", certificate:databasecertificate, image: "https://img.freepik.com/free-vector/gradient-sql-illustration_23-2149247491.jpg?t=st=1742725626~exp=1742729226~hmac=40724bbc1336ac35336eead41c2e20a9f443ddafc6063e4c70ec5984ef5619a0&w=1800"},
    {name :"Python",certificate:pythoncertificate, image: "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?t=st=1742619819~exp=1742623419~hmac=711734d50c819529729f33029e57fb28980a924efc83bd044bfe8e1d0ed9e84d&w=1380"},
   
    {name :"Responsive Web Design", certificate:responsivewebdesigncertificate, image: "https://img.freepik.com/free-vector/cartoon-web-design-landing-page_52683-70880.jpg?t=st=1742726953~exp=1742730553~hmac=633fb3532016a3b7156793a0db30c2ad178bd2f001acc25cf9c50ae0de910ef1&w=1800"},
    {name :"Responsive Web Design using Flexbox",certificate:webdesignflexboxcertificate, image: flexbox},
    {name :"Dynamic Web Application",certificate:dynamicwebappcertificate, image: "https://img.freepik.com/free-photo/smartphone-with-user-interface-concept_52683-104210.jpg?t=st=1742727800~exp=1742731400~hmac=8a85fb386cebcbcdb19195c1b556ce651a808daadffe8123f6d5d647d67e2e49&w=1480"}
  ]





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
              <li><a href="#skills">Skills & Certificates</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <nav className='nav-main'>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills & Certificates</a></li>
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
        
        <section id="about">
      <img src={about} alt="about" className="about-image" />

      <div className="about-content">
        <h2 data-aos="fade-up" className="about-head">About Me</h2>
        <p data-aos="fade-up" className="about-me-text">
          I’m <mark>Tammineni Mohan Reddy</mark>, a dedicated <mark>Full-Stack Web Developer</mark> with expertise in <mark>React.js, Node.js, Express.js, and SQLite</mark>. 
          I specialize in building modern, high-performance web applications that are <mark>responsive, efficient, and scalable</mark>.
        </p>
        <p data-aos="fade-up" className="about-me-text">
          I enjoy turning ideas into reality through <mark>clean code and seamless UI/UX</mark>. 
          Whether it's <mark>frontend development, backend APIs, or full-stack solutions</mark>, I focus on delivering high-quality and optimized web applications.
        </p>

        <button data-aos="fade-up" className="read-more" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 
            <div>
              <BiSolidDownArrow /> <p>Read Less</p> 
            </div>: 
            <div>
              <BiSolidRightArrow /> <p>Read More</p>
            </div>}
        </button>

        <div className={`expandable-content ${isOpen ? "open" : ""}`}>
          <h2 className="about-key-skills-heading">Key Skills</h2>
          <ul className="about-key-skills">
            <li><p>React.js & Modern Frontend Development</p></li>
            <li><p>Node.js & Express.js for Scalable Backend Solutions</p></li>
            <li><p>REST API Development & Third-Party API Integration</p></li>
            <li><p>Database Management with SQLite & PostgreSQL (Docker)</p></li>
            <li><p>State Management (Redux, Context API) & Performance Optimization</p></li>
            <li><p>Authentication & Security (JWT, OAuth)</p></li>
            <li><p>Deployment & Hosting (Render, Docker, Netlify)</p></li>
            <li><p>Debugging & Bug Fixing</p></li>
          </ul>
          <p className="desc-bottom">
            I am always eager to learn and stay updated with the latest technologies 
            to deliver the best solutions. Let’s connect and build something amazing together!
          </p>
        </div>
      </div>
    </section>
        <section id="skills">
          <h1 data-aos="fade-up" className='skills-head'>Skills & Certificates</h1>
          <ul className='skills-list'>
            {skills.slice(0, loadMore ? skills.length : 6).map(eachSkill => <EverySkill key={eachSkill.name} skill={eachSkill} />)}
          </ul>
          <div data-aos="fade-up" className='show-more-button'>
             <button onClick={() => setLoadMore(!loadMore)} className='load-more-button'>Show {loadMore ? "Less" : "More"}</button>
          </div>
       </section>
       <section id="services">
        <h1 className='services-main-head'>Services</h1>
        <ul className='serives-container'>
          {loadservices === false ? Services.slice(0,2).map(eachService => <EveryService service={eachService} key={eachService.id} />):Services.map(eachService => <EveryService service={eachService} key={eachService.id} />)}
          
        </ul>
        <div data-aos="fade-up" className='show-more-button show-more-in-services'>
          <button onClick={() => setloadservices(!loadservices)} className='load-more-button'>Show {loadservices ? "Less" : "More"}</button>
        </div>
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