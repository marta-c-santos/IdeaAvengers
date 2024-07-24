import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <header>
        <div className="logo">
          <img src="./images/logo.png" alt="Avocata Logo" />
        </div>
        
      </header>
      <main>
        <div className="hero">
          <div className="hero-image">
            <img src="./images/avocado-chef.png" alt="Avocado Chef" />
          </div>
          <div className="hero-text">
            <h1>We make eating healthy fun<br></br>for you.</h1>
            <p>Personalized cooking classes<br></br>
              Recipe builder<br></br>
              AI-powered nutrition calculator</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5jahsJzJ6SPiZ-1iswju48UwF_1L_5z_egq20I9wXnup-Kg/viewform?usp=sf_link" className="get-started">Get Started</a>
          </div>
        </div>
      </main>

      <div className="text-information">
        <div className="column left">
          <h2>Recipe Builder</h2>
          <p>Elevate your culinary experience with the Recipe Builder! Create custom recipes tailored to your dietary preferences and nutritional goals, with detailed nutritional information and easy-to-follow instructions.</p>
        </div>
        <div className="column center">
          <h2>Cooking Classes</h2>
          <p>Transform you kitchen skills with our gamified cooking classes! Enjoy hands-on, interactive lessons in different cuisines from low to high level designed to fit your culinary goals.</p>
        </div>
        <div className="column right">
          <h2>Nutrition Calculator</h2>
          <p>Track your daily intake and plan balanced meals with the Nutrition Calculator! Tailored to your health goals, it provides detailed nutritional information for thousands of foods.</p>
        </div>
      </div>
    </>
  );
}

export default App;
