import React, { useState, useEffect } from 'react';
import './Modal.css'; // Import the CSS file containing modal styles

const EditForm = ({ jobId, onSave, onCancel }) => {
  const [jobDetails, setJobDetails] = useState({
    jobTitle: '',
    companyName: '',
    jobDuration: '',
    salary: '',
    location: '',
    description1: '',
    description2: '',
  });

  useEffect(() => {
    // Fetch job details when jobId changes
    if (jobId) {
      fetch(`http://localhost:9001/path/jobs/${jobId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setJobDetails(data);
        })
        .catch(error => console.error('Error fetching job details:', error));
    }
  }, [jobId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({
      ...jobDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:9001/path/jobs/${jobId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jobDetails),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        onSave(data);
      })
      .catch(error => console.error('Error updating job:', error));
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <div>
        <label>Job Title:</label>
        <input type="text" name="jobTitle" value={jobDetails.jobTitle} onChange={handleChange} />
      </div>
      <div>
        <label>Company Name:</label>
        <input type="text" name="companyName" value={jobDetails.companyName} onChange={handleChange} />
      </div>
      <div>
        <label>Job Duration:</label>
        <input type="text" name="jobDuration" value={jobDetails.jobDuration} onChange={handleChange} />
      </div>
      <div>
        <label>Salary:</label>
        <input type="text" name="salary" value={jobDetails.salary} onChange={handleChange} />
      </div>
      <div>
        <label>Location:</label>
        <input type="text" name="location" value={jobDetails.location} onChange={handleChange} />
      </div>
      <div>
        <label>Description 1:</label>
        <textarea name="description1" value={jobDetails.description1} onChange={handleChange} />
      </div>
      <div>
        <label>Description 2:</label>
        <textarea name="description2" value={jobDetails.description2} onChange={handleChange} />
      </div>
      <div className="form-buttons">
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default EditForm;
