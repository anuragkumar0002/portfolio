import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div id="home" className="intro-section">
        <h3>I'm</h3>
        <h1>Anurag Kumar</h1>
        <p>Java Developer</p>
      </div>

      <section id="about" className="about">
        <div className="about-content">
          <div className="about-info">
            <img src="images\myphoto.jpeg" alt="Anurag Kumar" className="profile-image" />
            <p>
              I'm Anurag Kumar, a Java developer with over 2 years of experience in Spring Boot, REST APIs, and frontend technologies like React, HTML, CSS, and JavaScript.
            </p>
          </div>
          <div className="about-skills">
            <h2>Skills</h2>
            <ul>
              <li><strong>Java:</strong> Expert</li>
              <li><strong>Spring Boot:</strong> Advanced</li>
              <li><strong>React:</strong> Intermediate</li>
              <li><strong>HTML/CSS:</strong> Advanced</li>
              <li><strong>JavaScript:</strong> Intermediate</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <div className="project-list">
          <div className="project-item">
            <img src="images/tmobile.png" alt="T-Mobile Telecom App" className="project-image" />
            <div className="overlay">
              <h3>T-Mobile Telecom App</h3>
            </div>
          </div>
          <div className="project-item">
            <img src="images/helix.png" alt="Helix PLM Platform" className="project-image" />
            <div className="overlay">
              <h3>Helix PLM Platform</h3>
            </div>
          </div>
          <div className="project-item">
            <img src="images/giftcard.png" alt="Login and Gift Card Website" className="project-image" />
            <div className="overlay">
              <h3>Login and Gift Card Website</h3>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <p>Contact: anurag@example.com</p>
      </footer>
    </div>
  );
}

export default App;
