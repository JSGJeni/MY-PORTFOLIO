import React from 'react';
import './AboutMe.css';
import profileImage from '../assets/Profileimage.jpg'; // Update with your image path

const AboutMe = () => {
  return (
    <section id="about" className="about-me-section">
      <div className="about-me-container">
        <div className="about-me-image">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="about-me-text">
          <h1>About Me</h1>
          <p>
            I am a passionate individual driven by creativity and innovation. With a focus on technology and design, I enjoy crafting solutions that bring ideas to life and make an impact.
          </p>
          <p>
            My journey in tech began with curiosity, and it has grown into a fulfilling career of constant learning and problem-solving. Whether it's through code or design, I am always exploring new ways to make a difference.
          </p>
          <p>
            Outside of work, I enjoy exploring new places, trying new food, and capturing the beauty of the world through photography.
          </p>
          <a href="path/to/your/resume.pdf" className="resume-button" target="_blank" rel="noopener noreferrer">
             Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
