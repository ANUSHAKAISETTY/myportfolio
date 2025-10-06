// src/components/Home/Home.jsx
import React from 'react';
import './Home.css';
import DarkVeilBackground from './DarkVeilBackground';
import AnushaPhoto from '../../assets/Samplepic.png';

const Home = () => {
  const handleViewResume = () => { // Changed function name for clarity
    const resumeUrl = '/Anusha_Resume.pdf'; // Path to your resume in the public folder
    window.open(resumeUrl, '_blank'); // Opens the PDF in a new browser tab
  };

  return (
    <section className="home-section" id="home">
      <DarkVeilBackground
        hueShift={0}
        noiseIntensity={0.08}
        scanlineIntensity={0.05}
        speed={0.4}
      />

      <div className="home-content-wrapper">
        <div className="home-content">
          <p className="greeting">HELLO, I AM</p>
          <h1 className="name-title">Anusha</h1>
          <p className="description">
            A final-year IT student at Dr MGR University, skilled in Python and Java, focused on developing robust and efficient software solutions.
          </p>
          <button className="resume-button" onClick={handleViewResume}> {/* Changed onClick and button text */}
            View Resume
          </button>
        </div>
        <div className="home-image-container">
          <img src={AnushaPhoto} alt="Anusha's Portfolio Picture" className="profile-photo" />
        </div>
      </div>
    </section>
  );
};

export default Home;