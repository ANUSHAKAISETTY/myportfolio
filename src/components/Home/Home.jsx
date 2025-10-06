// src/components/Home/Home.jsx
import React from 'react';
import './Home.css';
import DarkVeilBackground from './DarkVeilBackground';
import AnushaPhoto from '../../assets/Samplepic.png';

const Home = () => {
  // NOTE: The JavaScript function handleViewResume is now removed,
  // as the link will be handled directly by the HTML <a> tag.

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
          
          {/* --- FIX: Using an <a> tag around the button to view the static file --- */}
          <a
            href="/Anusha_Resume.pdf" // Direct path to the file in the public folder
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer"
            className="resume-button-link" // New class for applying layout styles
          >
            <button className="resume-button">
              View Resume
            </button>
          </a>
          {/* ---------------------------------------------------------------------- */}
        </div>
        <div className="home-image-container">
          <img src={AnushaPhoto} alt="Anusha's Portfolio Picture" className="profile-photo" />
        </div>
      </div>
    </section>
  );
};

export default Home;