import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import logo from './job logo.png'; 
import GoogleButton from 'react-google-button';

const Adminlog = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignupRedirect = () => {
    navigate('/signup');
  };

  const handleLoginRedirect = (e) => {
    e.preventDefault();
    if (email === 'hhadmin@gmail.com' && password === 'Hirehorizon@123') {
      setErrorMessage('');
      navigate('/admin-dash');
    } else {
      setErrorMessage('Invalid email or password.');
    }
  };

  const handleGoogleSignIn = () => {
    window.location.href = 'https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AdF4I77rk1NbmNxRdn3CJpW8K7MZ2i53xfVThcG1NohgrFnItL2SBdCtjmCmTp13egtSXQ7rm2rB&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-601739518%3A1721974654067006&ddm=0';
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Logo" className="logo" />
      <div className="login-form">
        <div className="form-header">
          <h2>Admin Login</h2>
          <div className="google-button-container">
            <GoogleButton onClick={handleGoogleSignIn} />
          </div>
          <p>OR</p>
        </div>
        <form onSubmit={handleLoginRedirect}>
          <div className="form-group">
            <label>Email*</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password*</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <small>Must be at least 8 characters.</small>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
          <button type="submit" className="create-account">Login</button>
          <p className="forgot-password" onClick={handleForgotPassword}>
            Forgot Password?
          </p>
        </form>
        {/* <p className="login-link">
          Don't have an account? <a onClick={handleSignupRedirect} className='h' style={{ cursor: 'pointer' }}>Create Account</a>
        </p> */}
      </div>
      <div className="login-image">
        {/* <div className="overlay-text">
          <h2>"Your Pathway to Career Success."</h2>
          <p>Create a free account and get full access to all features for 30 days. No credit card needed.</p><p> Trusted by over 7,000 professionals.</p>
          <div className="reviews">
            <div className="review-stars">⭐⭐⭐⭐⭐</div>
            <div className="review-count">from 200+ reviews</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Adminlog;
