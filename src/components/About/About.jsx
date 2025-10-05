// src/components/About/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <p className="about-paragraph">
            Hello! I'm Anusha, final-year Information Technology student at MGR University. 
            My academic journey has equipped me with a strong foundation in modern computing principles 
            and hands-on experience in software development.
          </p>
          <p className="about-paragraph">
            I specialize in developing efficient and scalable solutions, particularly using **Python** for data processing and backend automation, and **Java** for robust application development. 
            I am driven by a passion for technology and am constantly exploring new frameworks and tools 
            to enhance my skill set.
          </p>
          <p className="about-paragraph">
            I am actively seeking opportunities where I can apply my technical knowledge and problem-solving 
            skills to contribute to innovative projects. Beyond coding, I enjoy learning about system architecture 
            and exploring emerging trends in the IT sector.
          </p>
        </div>

        <div className="about-details">
          <h3>Personal Details</h3>
          <ul>
            <li>NAME: Anusha</li>
            <li>AGE: 20</li>
            <li>UNIVERSITY: MGR University</li>
            <li>MAJOR: Information Technology (IT)</li>
            <li>STATUS: Final Year Student</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;