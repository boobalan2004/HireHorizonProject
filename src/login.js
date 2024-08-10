import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Modal from 'react-modal';
import './login.css';
import logo from './job logo.png';
import GoogleButton from 'react-google-button';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetErrorMessage, setResetErrorMessage] = useState('');

  const handleSignupRedirect = () => {
    navigate('/signup');
  };

  const handleLoginRedirect = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long.');
      return;
    }
    setErrorMessage('');
  
    const username = email.split('@')[0]; 
  
    try {
      const response = await fetch('http://localhost:9001/path/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const contentType = response.headers.get('content-type');
      let data;
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = await response.text();
      } 
      if (response.ok) {
        login(username, email);
        navigate('/dashboard');
      } else {
        setErrorMessage(typeof data === 'string' ? data : JSON.stringify(data) || 'Error logging in');
      }
    } catch (error) {
      setErrorMessage('Error logging in');
    }
  };

  const handleGoogleSignIn = () => {
    window.location.href = 'https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AdF4I77rk1NbmNxRdn3CJpW8K7MZ2i53xfVThcG1NohgrFnItL2SBdCtjmCmTp13egtSXQ7rm2rB&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-601739518%3A1721974654067006&ddm=0';
  };

  const handleForgotPassword = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setResetEmail('');
    setResetErrorMessage('');
  };

  const handlePasswordReset = async () => {
    if (!resetEmail) {
      setResetErrorMessage('Please enter your email.');
      return;
    }

    try {
      const response = await fetch('http://localhost:9001/path/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: resetEmail }),
      });

      if (response.ok) {
        alert('Password reset email sent!');
        handleModalClose();
      } else {
        const data = await response.json();
        setResetErrorMessage(typeof data === 'string' ? data : JSON.stringify(data) || 'Error sending password reset email');
      }
    } catch (error) {
      setResetErrorMessage('Error sending password reset email');
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Logo" className="logo" />
      <div className="login-form">
        <div className="form-header">
          <h2>User Login</h2>
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
        <p className="login-link">
          Don't have an account? <a onClick={handleSignupRedirect} className='h' style={{ cursor: 'pointer' }}>Create Account</a>
        </p>
      </div>

      {/* Modal for password reset */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Reset Password"
        className="reset-password-modal"
        overlayClassName="reset-password-overlay"
        ariaHideApp={false} // Needed to avoid accessibility warnings
      >
        <h2>Reset Password</h2>
        <div className="form-group">
          <label>Email*</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
          />
          {resetErrorMessage && <p className="error-message">{resetErrorMessage}</p>}
        </div>
        <button onClick={handlePasswordReset} className="reset-password-button">Send Reset Email</button>
        <button onClick={handleModalClose} className="cancel-button">Cancel</button>
      </Modal>

      <div className="login-image"></div>
    </div>
  );
};

export default Login;
