import React, { useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import './MyJobs.css'; // Import the CSS file for custom styles

const MyJobs = () => {
  const { user } = useAuth();
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:9001/path/applications-by-email?email=${user.email}`)
        .then(response => response.json())
        .then(data => setApplications(data))
        .catch(error => console.error('Error fetching applications:', error));
    }
  }, [user]);

  const downloadResume = (id) => {
    fetch(`http://localhost:9001/path/resume/${id}`)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'resume.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(error => console.error('Error downloading resume:', error));
  };

  const viewResume = (id) => {
    fetch(`http://localhost:9001/path/resume/${id}`)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        window.open(url, '_blank');
      })
      .catch(error => console.error('Error viewing resume:', error));
  };

  return (
    <div className="my-jobs-container">
      <h2>My Job Applications</h2>
      {applications.length > 0 ? (
        <ul className="applications-list12">
          {applications.map(application => (
            <li key={application.id} className="application-item12">
              <div className="job-header12">
                <h3 className="job-title12">{application.role}</h3>
                <div className="company-info12">
                  <span className="company-name12">Tata Consulting Services</span>
                  <span className="reviews12">⭐ 4.0 | 2 Reviews</span>
                </div>
              </div>
              {/* <div className="job-details12">
                <span><strong>Experience:</strong> 0-2 Yrs</span>
                <span><strong>Salary:</strong> Not disclosed</span>
                <span><strong>Location:</strong> Coimbatore</span>
              </div> */}
              <div className="additional-info12">
                <strong>Full Name:</strong> {application.fullName} <br />
                <strong>Email:</strong> {application.email} <br />
                <strong>Gender:</strong> {application.gender} <br />
                <strong>Age:</strong> {application.age} <br />
                <strong>Education:</strong> {application.education} <br />
                <strong>Experience:</strong> {application.experience} <br />
                <strong>Location:</strong> {application.location} <br />
              </div>
              <div className="skills-required12">
                <strong>Resume Headline:</strong> 
                <span>{application.resumeHeadline}</span>
              </div>
              <div className="footer-info12">
                <span>3 Days Ago</span>
                <div className="footer-icons12">
                  <button onClick={() => downloadResume(application.id)}>Download Resume</button>
                  <button onClick={() => viewResume(application.id)}>View Resume</button>
                  <span>🔒 Hide</span>
                  <span>🔖 Save</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No job applications found.</p>
      )}
    </div>
  );
};

export default MyJobs;
