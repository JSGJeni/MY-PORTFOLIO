import React from 'react';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase } from 'react-icons/fa'; // Import icons from react-icons
import './Skills.css';

const skillsData = {
  programmingLanguages: [
    { title: 'Java', icon: <FaJava /> },
    { title: 'Python', icon: <FaPython /> },
    { title: 'C',  icon: <FaDatabase /> },
    { title: 'SQL', icon: <FaDatabase /> }
  ],
  frameworksLibraries: [
    { title: 'HTML', icon: <FaHtml5 /> },
    { title: 'CSS', icon: <FaCss3Alt /> },
    { title: 'JavaScript', icon: <FaJs /> },
    { title: 'React.js', icon: <FaReact /> }
  ],
  toolsPlatforms: [
    { title: 'XAMPP', icon: <FaDatabase /> },
    { title: 'Git',  icon: <FaDatabase /> },
    { title: 'MySQL',  icon: <FaDatabase /> }
  ],
  otherSkills: [
    { title: 'Machine Learning', icon: <FaDatabase /> },
    { title: 'Data Structures', icon: <FaDatabase /> }
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
    <div className="skills-section">
      <h2>Skills</h2>

      <div className="skills-category">
        <h3>Programming Languages</h3>
        <div className="skills-grid">
          {skillsData.programmingLanguages.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="icon">{skill.icon}</div>
              <h4>{skill.title}</h4>
              <div className="progress-bar">
                <div className="progress" style={{ width: skill.level }}></div>
              </div>
              <p>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-category">
        <h3>Frameworks & Libraries</h3>
        <div className="skills-grid">
          {skillsData.frameworksLibraries.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="icon">{skill.icon}</div>
              <h4>{skill.title}</h4>
              <div className="progress-bar">
                <div className="progress" style={{ width: skill.level }}></div>
              </div>
              <p>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-category">
        <h3>Tools & Platforms</h3>
        <div className="skills-grid">
          {skillsData.toolsPlatforms.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="icon">{skill.icon}</div>
              <h4>{skill.title}</h4>
              <div className="progress-bar">
                <div className="progress" style={{ width: skill.level }}></div>
              </div>
              <p>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-category">
        <h3>Other Skills</h3>
        <div className="skills-grid">
          {skillsData.otherSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="icon">{skill.icon}</div>
              <h4>{skill.title}</h4>
              <div className="progress-bar">
                <div className="progress" style={{ width: skill.level }}></div>
              </div>
              <p>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Skills;
