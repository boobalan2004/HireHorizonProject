import React from 'react';
import Navbar from './navbar';
import './aboutus.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Footer from './footer';
import ValuesSlideshow from './ValuesSlideshow';

function AboutUs() {
  return (
    <div className="about-us">
      <Navbar />
      <header className="header">
        <div className="header-overlay">
          <h1>About HireHorizon</h1>
          <p>Connecting talent with opportunity, globally.</p>
        </div>
      </header>
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
        At HireHorizon, we believe in bridging the gap between job seekers and employers. Our mission is to empower individuals by providing them with the tools and resources they need to achieve their career aspirations. We are dedicated to creating a seamless and efficient job search experience, connecting talented professionals with top companies across various industries.
        </p>
        <h4>Why Choose HireHorizon:</h4>
        <p>1. Comprehensive Database: Access to a vast database of job opportunities from leading companies in various sectors.</p>
<p>2. Personalized Experience: Tailored job recommendations and personalized support to help you navigate your career path.</p>
<p>3. Community Support: Join a thriving community of professionals and experts who share knowledge, provide mentorship, and offer support.</p>
        <h4>Our Services:</h4>
        <p>1. Job Matching: Our advanced algorithm matches job seekers with roles that align with their skills, experience, and career goals, ensuring a perfect fit.</p>
<p>2. Career Resources: We provide a wealth of resources, including resume building tools, interview preparation guides, and industry insights to help job seekers succeed.</p>
<p>3. Employer Solutions: We offer employers a suite of tools to find and engage top talent, streamline recruitment processes, and build strong teams.</p>
      </section>
      <section className="values">
        <h2>Our Values</h2>
        <ValuesSlideshow /> {/* Add the ValuesSlideshow component here */}
      </section>
      {/* <section className="team">
        <h2>Meet Our Team</h2>
        <p>
          Our dedicated team of professionals is committed to helping you succeed. Get to know the people behind HireHorizon.
        </p>
        <div className="team-cards">
          <div className="team-card">
            <img src="path/to/image1.jpg" alt="Darshan S" />
            <h3>Darshan S</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-card">
            <img src="path/to/image2.jpg" alt="Chidambaram" />
            <h3>Chidambaram</h3>
            <p>Chief Technology Officer</p>
          </div>
          <div className="team-card">
            <img src="path/to/image3.jpg" alt="Boobalan" />
            <h3>Boobalan</h3>
            <p>Chief Marketing Officer</p>
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
}

export default AboutUs;
