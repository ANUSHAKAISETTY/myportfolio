// src/components/Skills/Skills.jsx
import React from 'react';
import './Skills.css';

const technicalSkills = [
  { name: 'Python', level: 90, category: 'Languages' },
  { name: 'Java', level: 85, category: 'Languages' },
  { name: 'JavaScript (ES6+)', level: 70, category: 'Languages' },
  { name: 'HTML/CSS', level: 95, category: 'Web Basics' },
  { name: 'React.js', level: 65, category: 'Web Basics' },
  { name: 'MySQL / SQL', level: 80, category: 'Databases' },
  { name: 'Git & GitHub', level: 90, category: 'Tools & DevOps' },
  { name: 'Linux/Bash', level: 75, category: 'Tools & DevOps' },
];

const Skills = () => {
  // Function to group skills by category
  const skillsByCategory = technicalSkills.reduce((acc, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill);
    return acc;
  }, {});

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="section-title">My Skills & Expertise</h2>
        
        <div className="skills-grid">
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <div className="skill-list">
                {skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <p className="skill-name">{skill.name}</p>
                    <div className="skill-bar-container">
                      {/* The skill-bar div controls the width based on 'level' */}
                      <div 
                        className="skill-bar" 
                        style={{ width: `${skill.level}%` }}
                      >
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <p className="skills-note">
          Focused on continuous learning in software architecture and cloud development.
        </p>
      </div>
    </section>
  );
};

export default Skills;