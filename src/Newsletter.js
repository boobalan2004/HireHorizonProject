import React, { useState } from 'react';
import './Newsletter.css';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle the subscription logic here, e.g., send the email to a server
    console.log('Subscribed with email:', email);

    // Show success message
    setShowSuccess(true);
    
    // Clear the email input field
    setEmail('');

    // Hide success message after 5 seconds
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div className="newsletter">
      <h3>Subscribe to our Newsletter</h3>
      <p>Get the latest job updates and career advice directly in your inbox.</p>
      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {showSuccess && (
        <div className="success-popup">
          Thanks for subscribing to our newsletter!
        </div>
      )}
    </div>
  );
}

export default Newsletter;
