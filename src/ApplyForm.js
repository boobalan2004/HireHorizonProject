import React, { useState } from 'react';
import './ApplyForm.css';

const ApplyForm = ({ jobTitle, onClose, onFormSubmit }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [education, setEducation] = useState('');
    const [experience, setExperience] = useState('');
    const [location, setLocation] = useState('');
    const [resumeHeadline, setResumeHeadline] = useState('');
    const [resumeFile, setResumeFile] = useState(null);
    const [isSuccessPopupVisible, setIsSuccessPopupVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('fullName', fullName);
        formData.append('email', email);
        formData.append('gender', gender);
        formData.append('age', age);
        formData.append('education', education);
        formData.append('experience', experience);
        formData.append('location', location);
        formData.append('resumeHeadline', resumeHeadline);
        formData.append('resumeFile', resumeFile);
        formData.append('role', jobTitle);

        fetch('http://localhost:9001/path/apply', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            setIsSuccessPopupVisible(true); // Show success popup
            onFormSubmit(); // Notify parent component that form is submitted
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    const handleFileChange = (e) => {
        setResumeFile(e.target.files[0]);
    };

    const closeSuccessPopup = () => {
        setIsSuccessPopupVisible(false);
        onClose(); // Close the ApplyForm component after closing the success popup
    };

    return (
        <div className="apply-form-overlay12">
            {!isSuccessPopupVisible && (
                <div className="apply-form-container12">
                    <button className="close-btn" onClick={onClose}>X</button>
                    <h2>Apply for {jobTitle}</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-columns12">
                            <div className="form-column12">
                                <label>
                                    Full Name:
                                    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                                </label>
                                <label>
                                    Email:
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </label>
                                <label>
                                    Role:
                                    <input type="text" value={jobTitle} readOnly />
                                </label>
                                <label>
                                    Gender:
                                    <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </label>
                                <label>
                                    Age:
                                    <select value={age} onChange={(e) => setAge(e.target.value)} required>
                                        <option value="">Select Age</option>
                                        <option value="20-25">20-25 years</option>
                                        <option value="26-30">26-30 years</option>
                                        <option value="30+">Above 30 years</option>
                                    </select>
                                </label>
                            </div>
                            <div className="form-column12">
                                <label>
                                    Education:
                                    <select value={education} onChange={(e) => setEducation(e.target.value)} required>
                                        <option value="">Select Education</option>
                                        <option value="UG">Undergraduate</option>
                                        <option value="PG">Postgraduate</option>
                                        <option value="Diploma">Diploma</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </label>
                                <label>
                                    Experience:
                                    <select value={experience} onChange={(e) => setExperience(e.target.value)} required>
                                        <option value="">Select Experience</option>
                                        <option value="Fresher">Fresher</option>
                                        <option value="2 years">2 years</option>
                                        <option value="3 years">3 years</option>
                                        <option value="5 years">5 years</option>
                                    </select>
                                </label>
                                <label>
                                    Location:
                                    <select value={location} onChange={(e) => setLocation(e.target.value)} required>
                                        <option value="">Select Location</option>
                                        <option value="Chennai">Chennai</option>
                                        <option value="Hyderabad">Hyderabad</option>
                                        <option value="Bangalore">Bangalore</option>
                                        <option value="Mumbai">Mumbai</option>
                                    </select>
                                </label>
                                
                                <label>
                                    Resume Headline:
                                    <textarea value={resumeHeadline} onChange={(e) => setResumeHeadline(e.target.value)} required />
                                </label>
                                <label>
                                    Resume File:
                                    <input type="file" onChange={handleFileChange} required />
                                </label>
                            </div>
                        </div>
                        <div className="submit-btn-container">
                            <button type="submit" className="submit-btn">Submit</button>
                        </div>
                    </form>
                </div>
            )}

            {isSuccessPopupVisible && (
                <div className="success-popup-overlay">
                    <div className="success-popup-container">
                        <button className="close-btn success-close-btn" onClick={closeSuccessPopup}>X</button>
                        <div className="success-icon">
                            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="#4CAF50" strokeWidth="2"/>
                                <path d="M8 12l2 2 4-4" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h3>Applied Successfully</h3>
                        <p>Your application for the {jobTitle} role has been successfully submitted.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ApplyForm;
