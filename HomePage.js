import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './home.css';

const HomePage = () => {
  const navigate = useNavigate();

  // Function to handle sign-in button click
  const handleSignInClick = () => {
    navigate('/login'); // Redirect to login page
  };

  // Function to handle sign-up button click
  const handleSignUpClick = () => {
    navigate('/signup'); // Redirect to signup page
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">TT</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><button className="signin-btn" onClick={handleSignInClick}>Sign in</button></li>
          <li><button className="signup-btn" onClick={handleSignUpClick}>Sign Up</button></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Threaded Tradition</h1>
          <p>The Art of Tradition in Every Fiber</p>
        </div>
        {/* Image sourced from public folder */}
        <img src="/images/product2.png" alt="designer" className="hero-image" />

        <div className="description">
          <h2>Welcome to Our Handloom Production Website!</h2>
          <p>
            We are a team of passionate individuals dedicated to promoting the art and craftsmanship of handloom production. 
            Our focus is on exploring the rich history and cultural significance of handloom textiles, showcasing innovative designs, 
            and highlighting sustainable practices. Together, we aim to raise awareness about handloom textiles, celebrate craftsmanship, 
            and support local artisans. Join us on this journey to appreciate the beauty and heritage of handloom production!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Handloom Production</p>
      </footer>
    </div>
  );
}

export default HomePage;
