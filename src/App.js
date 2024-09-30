import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <section id="home" className="section home">
        <h1>Welcome to My Portfolio</h1>
        <p>This is where you showcase your best work.</p>
      </section>

      <section id="projects" className="section projects">
        <h2>Projects</h2>
        <p>Here are some of the projects I've worked on:</p>
        {/* Add project details here */}
      </section>

      <section id="about" className="section about">
        <h2>About Me</h2>
        <p>A short introduction about yourself.</p>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <p>Feel free to reach out through my social links.</p>
      </section>

      <Footer />
    </div>
  );
}

export default App;
