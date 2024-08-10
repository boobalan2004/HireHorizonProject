import React, { useState, useEffect } from 'react';
import './View1.css';
import { FaSave } from 'react-icons/fa';
import ApplyForm from './ApplyForm'; // Import the ApplyForm component

const View1 = () => {
    const [isFollowed, setIsFollowed] = useState(false);
    const [savedJobs, setSavedJobs] = useState({});
    const [appliedJobs, setAppliedJobs] = useState({});
    const [isApplyFormVisible, setIsApplyFormVisible] = useState(false);
    const [selectedJobTitle, setSelectedJobTitle] = useState('');
    const [jobList, setJobList] = useState([]);
    const [filteredJobList, setFilteredJobList] = useState([]);

    useEffect(() => {
        const companyName = 'TCS';
        fetch(`http://localhost:9001/path/company/${companyName}`)
            .then(response => response.json())
            .then(data => {
                setJobList(data);
                setFilteredJobList(data); // Display all jobs for TCS
            })
            .catch(error => console.error('Error fetching job posts:', error));
    }, []);

    const handleFollowClick = () => {
        setIsFollowed(!isFollowed);
    };

    const handleSaveClick = (jobId) => {
        setSavedJobs((prevSavedJobs) => ({
            ...prevSavedJobs,
            [jobId]: !prevSavedJobs[jobId]
        }));
    };

    const handleApplyClick = (jobTitle) => {
        setSelectedJobTitle(jobTitle);
        setIsApplyFormVisible(true);
    };

    const handleFormSubmit = (jobTitle) => {
        setAppliedJobs((prevAppliedJobs) => ({
            ...prevAppliedJobs,
            [jobTitle]: true
        }));
    };

    const closeApplyForm = () => {
        setIsApplyFormVisible(false);
        setSelectedJobTitle('');
    };

    return (
        <div className="view1-container">
            <section className="content">
                <div className="banner">
                    <h1>We're among the <br /> Top 50 Inspiring Workplaces EMEA</h1>
                    <p>for outstanding work in Culture & Purpose</p>
                </div>
                <div className="company-info">
                    <img src="tcs.png" alt="TCS Logo" className="company-logo" />
                    <div className="company-details">
                        <h2>Tata Consultancy Services</h2>
                        <p>Transforming the Future, Now</p>
                        <div className="tags">
                            <span>IT Services & Consulting</span>
                            <span>Private</span>
                            <span>Foreign MNC</span>
                            <span>B2B</span>
                        </div>
                        <div className="followers">
                            <p>79.8K followers</p>
                            <button className="follow-btn" onClick={handleFollowClick}>
                                {isFollowed ? "Following" : "+ Follow"}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="job-listings">
                    {filteredJobList.map(job => (
                        <div className="job-card" key={job.id}>
                            <div className="job-info">
                                <h3>{job.jobTitle}</h3>
                                <p>{job.companyName}</p>
                                <p><span>⭐ 3.4</span> (596 Reviews)</p>
                                <div className="job-meta">
                                    <span>{job.jobDuration}</span>
                                    <span>₹ {job.salary}</span>
                                    <span>{job.location}</span>
                                </div>
                                <p>{job.description1}</p>
                                <div className="job-tags">
                                    <span>{job.description2.split(',').join(' - ')}</span>
                                </div>
                                <p className="job-date">30+ Days Ago</p>
                            </div>
                            <div className="job-save">
                                <img src="tcs.png" alt="TCS Logo" className="job-logo" />
                                <div className="job-actions">
                                    <button
                                        className="save-btn"
                                        onClick={() => handleSaveClick(job.id)}
                                    >
                                        <FaSave className="save-icon" />
                                        {savedJobs[job.id] ? "Saved" : "Save"}
                                    </button>
                                    <button
                                        className="apply-btn"
                                        onClick={() => handleApplyClick(job.jobTitle)}
                                        disabled={appliedJobs[job.jobTitle]}
                                    >
                                        {appliedJobs[job.jobTitle] ? "Applied" : "Apply"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {isApplyFormVisible && (
                <ApplyForm
                    jobTitle={selectedJobTitle}
                    onClose={closeApplyForm}
                    onFormSubmit={() => handleFormSubmit(selectedJobTitle)}
                />
            )}
        </div>
    );
};

export default View1;
