import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    location: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { password } = formData;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@]{8,}$/;

    // Validate password length and pattern
    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long.');
      return;
    } else if (!passwordPattern.test(password)) {
      setErrorMessage('Password must contain at least one uppercase letter, one lowercase letter, one number, and one "@".');
      return;
    }

    setErrorMessage(''); // Clear previous error messages

    try {
      const response = await fetch('http://localhost:9001/path/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccessPopup(true);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Error signing up');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Error signing up');
    }
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
    navigate('/login');
  };

  return (
    <div className="signup">
      <div className="signup-main">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h1 className="hi">Register to HireHorizon</h1>
          <hr className="co"></hr>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              placeholder="Enter your location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="signup-button">Register</button>
        </form>
        <p className="signin-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>

      {showSuccessPopup && (
        <div className="popup12">
          <div className="popup-content12">
            <p>Successfully registered! A confirmation email will be sent to you.</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
