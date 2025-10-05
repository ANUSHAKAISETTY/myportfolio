// src/components/Home/Home.jsx
import React from 'react';
import './Home.css';
import DarkVeilBackground from './DarkVeilBackground'; // NEW IMPORT
import AnushaPhoto from '../../assets/Samplepic.png'; 

const Home = () => {
  
  const handleDownload = () => {
    // Define the file path (assumes Anusha_Resume.pdf is in the 'public' folder)
    const resumeUrl = '/Anusha_Resume.pdf';
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = resumeUrl;
    
    // Set the 'download' attribute to force the download dialogue
    link.setAttribute('download', 'Anusha_Resume.pdf'); 
    
    // Append to the document, trigger the click, and remove the element
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="home-section" id="home">
      {/* 1. The Animated Background (Placed at Z-index 0) */}
      <DarkVeilBackground 
        hueShift={0} 
        noiseIntensity={0.08} /* Subtle noise */
        scanlineIntensity={0.05} /* Subtle scanlines */
        speed={0.4} 
      /> 
      
      {/* 2. The Content and Image (Must have higher z-index) */}
      <div className="home-content-wrapper">
        <div className="home-content">
          <p className="greeting">HELLO, I AM</p>
          <h1 className="name-title">Anusha</h1>
          <p className="description">
            A final-year IT student at Dr MGR University, skilled in Python and Java, focused on developing robust and efficient software solutions.
          </p>
          <button className="resume-button" onClick={handleDownload}>
            Download Resume
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