import React from 'react';
import './Login.css'; // Add this CSS for styling the page

const Login = () => {
  return (
    <div className="login-page">
      <img src="/images/product3.png" alt="background" className="background-image" /> {/* Background Image */}
      <div className="login-container">
        <h2>Log In</h2>
        <form className="login-form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
