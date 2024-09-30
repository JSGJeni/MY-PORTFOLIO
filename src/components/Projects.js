import React from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    title: 'E-Commerce Website',
    description: 'An interactive, modern e-commerce website built with React and Next.js.',
    githubUrl: 'https://github.com/jenijebi80/ecommerce-website'
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing my projects and skills using React.',
    githubUrl: 'https://github.com/jenijebi80/portfolio-website'
  },
  {
    title: 'To-Do List App',
    description: 'A task management app built with React and local storage for saving tasks.',
    githubUrl: 'https://github.com/jenijebi80/todo-app'
  }
];

const Project = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
                <FaGithub className="github-icon" /> View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
