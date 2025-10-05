// src/components/Connect/Connect.jsx

import React from 'react';
import './Connect.css';
import { Github, Linkedin, Mail } from 'lucide-react'; 

const socialLinks = [
  { 
    icon: Linkedin, 
    name: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/anusha-c-265978301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' 
  },
  { 
    icon: Github, 
    name: 'GitHub', 
    url: 'https://github.com/ANUSHAKAISETTY' 
  },
  { 
    icon: Mail, 
    name: 'Email', 
    url: 'mailto:anushakaisetty@gmail.com' 
  },
];

const Connect = () => {
  return (
    <footer className="connect-section" id="connect">
      <div className="connect-container">
        <h2 className="section-title">Connect with Me</h2>
        <p className="subtitle">I'm always open to discussing new projects, opportunities, or ideas.</p>
        
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={`Connect on ${link.name}`}
              className="social-link-item"
            >
              <link.icon size={32} />
              <span className="link-name">{link.name}</span>
            </a>
          ))}
        </div>

        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Anusha's Portfolio. Built with React and Deployed on Vercel.</p>
        </div>
      </div>
    </footer>
  );
};

export default Connect;