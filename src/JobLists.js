import React, { useEffect, useState } from 'react';
import './JobLists.css';

const JobList = () => {
    const [jobData, setJobData] = useState([]);

    useEffect(() => {
        const fetchJobApplications = async () => {
            try {
                const response = await fetch('http://localhost:9001/path/applications');
                const data = await response.json();
                console.log('Fetched job data:', data); // Log the data for debugging
                if (Array.isArray(data)) {
                    setJobData(data);
                } else {
                    console.error('Unexpected data format:', data);
                }
            } catch (error) {
                console.error('Error fetching job applications:', error);
            }
        };

        fetchJobApplications();
    }, []);

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
        <div className="container2004">
            <div className="header2004">
                <button className="header-button">All applications</button>
                <p>Job Seekers Information</p>
            </div>
            <div className="job-list-container">
                <div className="job-row header-row">
                    <div className="job-cell id-cell">Id</div>
                    <div className="job-cell name-cell">Job Seeker</div>
                    <div className="job-cell">Job Name</div>
                    <div className="job-cell">Education</div>
                    <div className="job-cell">Gender</div>
                    <div className="job-cell">Experience</div>
                    <div className="job-cell">Location</div>
                    <div className="job-cell actions-cell">Status</div>
                    <div className="job-cell actions-cell">Resume</div> {/* New column */}
                </div>
                {Array.isArray(jobData) && jobData.length > 0 ? (
                    jobData.map((job, index) => (
                        <div key={index} className="job-row">
                            <div className="job-cell id-cell">{job.id}</div>
                            <div className="job-cell name-cell">{job.fullName}</div>
                            <div className="job-cell">{job.role}</div>
                            <div className="job-cell">{job.education}</div>
                            <div className="job-cell">{job.gender}</div>
                            <div className="job-cell">{job.experience}</div>
                            <div className="job-cell">{job.location}</div>
                            <div className="job-cell actions-cell">
                                <button className="apply-button">Applied</button>
                            </div>
                            <div className="job-cell actions-cell">
                                <button className="view-resume-button" onClick={() => viewResume(job.id)}>View Resume</button>
                            </div> {/* New button */}
                        </div>
                    ))
                ) : (
                    <div>No job data available</div>
                )}
            </div>
        </div>
    );
};

export default JobList;
