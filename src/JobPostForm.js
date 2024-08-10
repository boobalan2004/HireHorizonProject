import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './JobPostForm.css';

const JobPostForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    jobDuration: '',
    salary: '',
    location: '',
    description1: '',
    description2: '',
  });

  const [showForm, setShowForm] = useState(true);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9001/path/post-job', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted:', formData);
        setShowForm(false);
        setShowSuccessPopup(true);
      } else {
        console.error('Failed to post job');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
    navigate('/admin-dash'); // Redirect to admin dashboard or any other route
  };

  return (
    <div className="form-container-ab">
      <div className="form-image-section">
        <img src="pj1.webp" alt="Job Post" className="form-image" />
      </div>
      <div className="form-content">
        {showForm && (
          <div className="job-post-form">
            <h2>Add New Job</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group-ab">
                <label>Job Title</label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group-ab">
                <label>Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group-ab">
                <label>Job Duration</label>
                <input
                  type="text"
                  name="jobDuration"
                  value={formData.jobDuration}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group-ab">
                <label>Salary</label>
                <input
                  type="text"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group-ab">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group-ab">
                <label>Description 1</label>
                <textarea
                  name="description1"
                  value={formData.description1}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group-ab">
                <label>Description 2</label>
                <textarea
                  name="description2"
                  value={formData.description2}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='btn123'>
                <button type="submit">Post Job</button>
              </div>
            </form>
          </div>
        )}

        {showSuccessPopup && (
          <div className="success-popup-overlay">
            <div className="success-popup-container">
              <button className="close-btn success-close-btn" onClick={closeSuccessPopup}>X</button>
              <div className="success-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#4CAF50" strokeWidth="2"/>
                  <path d="M8 12l2 2 4-4" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Posted Successfully</h3>
              <p>Successfully posted a job for the role of {formData.jobTitle}.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobPostForm;
