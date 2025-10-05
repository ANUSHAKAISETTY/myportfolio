// src/components/Achievements/Achievements.jsx
import React from 'react';
import './Achievements.css';
import { Award, GraduationCap, Code, Heart, Presentation } from 'lucide-react'; 

const achievementData = [
  {
    icon: Heart, // Using Heart to symbolize the topic
    title: '1st Prize: Heart Disease Prediction Research',
    description: 'Secured first place at GRT Institute of Engineering and Technology for presenting a research paper on heart disease prediction, demonstrating strong research and public speaking skills.',
    date: 'GRT Institute of Eng. & Tech.'
  },
  {
    icon: Award, 
    title: '1st Place: "Seal the Deal" Business Pitch',
    description: 'Awarded first place at Sri Ramachandra Faculty of Engineering and Technology for business pitch excellence in an intercollege competition focused on innovation and negotiation.',
    date: 'Sri Ramachandra FET'
  },
  {
    icon: Presentation, 
    title: '2nd Prize: MedPredict Paper Presentation',
    description: 'Secured second place at Rajalakshmi Engineering College for presenting the MedPredict research paper, recognized for clarity, innovation, and technical depth.',
    date: 'Rajalakshmi Engineering College'
  },
  {
    icon: GraduationCap, 
    title: 'Inter-College Event Award Recognition',
    description: 'Recognized by the Department of IT at Dr. M.G.R. Educational and Research Institute for active participation and achievements in external technical and academic events.',
    date: 'Dr. M.G.R. E&R Institute'
  },
];

const Achievements = () => {
  return (
    <section className="achievements-section" id="achievements">
      <div className="achievements-container">
        <h2 className="section-title">Achievements & Recognition</h2>
        
        <div className="achievement-grid">
          {achievementData.map((item, index) => (
            <div key={index} className="achievement-card">
              <div className="icon-wrapper">
                {/* Render the icon component */}
                <item.icon size={36} />
              </div>
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-date">{item.date}</p>
              <p className="achievement-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;