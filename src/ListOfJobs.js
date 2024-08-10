import React, { useEffect, useState } from 'react';
import './ListOfJobs.css';
import EditForm from './EditForm';

const ListOfJobs = () => {
  const [jobPosts, setJobPosts] = useState([]);
  const [editingJobId, setEditingJobId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:9001/path/jobs')
      .then(response => response.json())
      .then(data => setJobPosts(data))
      .catch(error => console.error('Error fetching job posts:', error));
  }, []);

  const removeJob = (id) => {
    fetch(`http://localhost:9001/path/jobs/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setJobPosts(jobPosts.filter(job => job.id !== id));
        } else {
          console.error('Failed to delete job from the database');
        }
      })
      .catch(error => console.error('Error deleting job:', error));
  };

  const editJob = (id) => {
    setEditingJobId(id);
  };

  const handleSave = (updatedJob) => {
    setJobPosts(jobPosts.map(job => (job.id === updatedJob.id ? updatedJob : job)));
    setEditingJobId(null); // Close the modal after saving
  };

  const handleCancel = () => {
    setEditingJobId(null); // Close the modal
  };

  return (
    <div className="jobs-container15">
      <h2>Posted Job Listings</h2>
      <div className="cards-container15">
        {jobPosts.map(job => (
          <div key={job.id} className="job-card15">
            <h3 className="job-title">{job.id} - {job.jobTitle}</h3>
            <div className="job-details">
              <p><strong>Company:</strong> {job.companyName}</p>
              <p><strong>Duration:</strong> {job.jobDuration}</p>
              <p><strong>Salary:</strong> {job.salary}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Description 1:</strong> {job.description1}</p>
              <p><strong>Description 2:</strong> {job.description2}</p>
            </div>
            <div className="button-container15">
              <button className="edit-button" onClick={() => editJob(job.id)}>Edit</button>
              <button className="remove-button" onClick={() => removeJob(job.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      {editingJobId && (
        <div className="modal">
          <div className="modal-content">
            <EditForm jobId={editingJobId} onSave={handleSave} onCancel={handleCancel} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ListOfJobs;
