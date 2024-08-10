import React, { useState } from 'react';
import './Resume.css'; // Import a separate CSS file for styling

const Resume = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="resume-container">
      <header className="header12">
        <h1>HireHorizon FASTFORWARD</h1>
        <h2>Get a Featured Profile & increase your visibility to recruiters up to 3 times</h2>
      </header>
      <section className="key-features">
        <h3>Key Features</h3>
        <ul>
          <li>
            <h4>Highlight Your Profile</h4>
            <p>Your profile is marked as "Featured" to make you stand out in the Naukri Database as an active jobseeker.</p>
          </li>
          <li>
            <h4>Rank Higher In Search Results</h4>
            <p>Your profile is given a higher rank when recruiters search CVs of active candidates in the Naukri database.</p>
          </li>
          <li>
            <h4>A dedicated relationship manager post purchase**</h4>
            <p>A dedicated relationship manager will resolve if you have any query post purchasing the service.</p>
          </li>
        </ul>
      </section>
      <section className="subscription-options">
        <h3>Choose Subscription</h3>
        <div className="options">
          <div
            className={`option ${selectedOption === '1 Month' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('1 Month')}
          >
            <h4>1 Month</h4>
            <p>₹890* <span>(₹29.7/day)</span></p>
          </div>
          <div
            className={`option ${selectedOption === '3 Month' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('3 Month')}
          >
            <h4>3 Month</h4>
            <p>₹2,119* <span>(₹23.5/day)</span></p>
          </div>
          <div
            className={`option ${selectedOption === '6 Month' ? 'selected best-value' : ''}`}
            onClick={() => handleOptionClick('6 Month')}
          >
            <h4>6 Month</h4>
            <p>₹3,241* <span>(₹18.0/day)</span></p>
          </div>
        </div>
        <button className="buy-now">BUY NOW</button>
      </section>
      <section className="benefits">
        <h3>How our customers are getting benefitted?</h3>
        <div className="benefits-stats">
          <div className="stat">
            <h4>4.40L</h4>
            <p>Got recruiter calls using this service*</p>
          </div>
          <div className="stat">
            <h4>94.03%</h4>
            <p>Increase in profile reach to recruiters*</p>
          </div>
          <div className="stat">
            <h4>65,899</h4>
            <p>Users bought this service so far</p>
          </div>
        </div>
        <p className="note">*The figure has been calculated till 1st Jul '24. Next update will be done soon.</p>
      </section>
      <section className="profile-issues">
        <h3>Why your profile might go unnoticed in Recruiter Searches?</h3>
        <ul>
          <li>Recruiter cannot differentiate your profile among 7 Crore other candidates on Naukri</li>
          <li>Your profile ranking is low in Recruiters Search Results</li>
          <li>Your profile lacks the relevant skills that recruiters are looking for</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
