import React from 'react';
import './Signup.css'; // Add this CSS for styling the page

const Signup = () => {
  return (
    <div className="signup-page">
      {/* Full-screen background image */}
      <img src="/images/product3.png" alt="background" className="background-image" />
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form className="signup-form">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" /> {/* Fixed typo here */}
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
