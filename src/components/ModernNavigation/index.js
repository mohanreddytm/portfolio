import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { IoIosMenu } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import './index.css';

const ModernNavigation = ({ activeSection, onClickMenuLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuAnimation = useSpring({
    opacity: isMenuOpen ? 1 : 0,
    transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
    config: { tension: 300, friction: 30 }
  });

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    onClickMenuLinks();
    setIsMenuOpen(false);
  };

  return (
    <nav className={`modern-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <h1 className="portfolio-heading">
            <span>Port</span>folio
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-desktop">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? "active" : ""}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <IoIosMenu />}
        </button>

        {/* Mobile Navigation */}
        <animated.div className="nav-mobile" style={menuAnimation}>
          <div className="mobile-menu-header">
            <h2>Menu</h2>
            <button className="close-menu" onClick={toggleMenu}>
              <FaTimes />
            </button>
          </div>
          <ul className="mobile-nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? "active" : ""}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </animated.div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="mobile-overlay" onClick={toggleMenu} />
        )}
      </div>
    </nav>
  );
};

export default ModernNavigation; 