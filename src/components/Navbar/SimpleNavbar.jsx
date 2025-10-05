// src/components/Navbar/SimpleNavbar.jsx

import React, { useState } from 'react';
import './SimpleNavbar.css';

const navItems = [
  { label: 'Home', sectionId: 'home' },
  { label: 'About Me', sectionId: 'about' },
  { label: 'Skills', sectionId: 'skills' },
  { label: 'Projects', sectionId: 'projects' },
  { label: 'Achievements', sectionId: 'achievements' },
  { label: 'Connect', sectionId: 'connect' }
];

const SimpleNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(navItems[0].label);

  // Function to scroll to section
  const scrollToSection = (sectionId, label) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); 
      setActiveItem(label); 
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="simple-navbar-wrapper">
      <div className="simple-navbar">
        {/* Logo/Name on the left */}
        <div className="navbar-logo" onClick={() => scrollToSection('home', 'Home')}>
          A<span className="logo-accent">.</span>
        </div>
        
        {/* Navigation Links on the right */}
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li 
              key={item.label}
              onClick={() => scrollToSection(item.sectionId, item.label)}
              className={item.label === activeItem ? 'active-item' : ''}
            >
              {item.label}
            </li>
          ))}
        </ul>
        
        {/* Mobile Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </div>
      </div>
    </nav>
  );
};

export default SimpleNavbar;