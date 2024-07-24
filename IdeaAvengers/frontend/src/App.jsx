import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <header>
        <div className="logo">
          <img src="./images/logo.png" alt="Avocata Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Team</a></li><br></br>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="log-in">LOG IN</button>
        </div>
      </header>
      <main>
        <div className="hero">
          <div className="hero-image">
            <img src="./images/avocado-chef.png" alt="Avocado Chef" />
          </div>
          <div className="hero-text">
            <h1>We make eating healthy fun.<br></br>for you.</h1>
            <p>AI-powered nutrition calculator.<br></br>
              Recipe builder.<br></br>
              Personalized cooking classes.</p>
            <button className="get-started">Get Started</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
