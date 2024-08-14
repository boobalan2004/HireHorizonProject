import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import Navbar from './navbar.js';
import './dashboard.css';
import tcsLogo from './tcs-logo.png';
import iciciLogo from './icici-logo.png';
import wellsFargoLogo from './wellsfargo-logo.png';
import datamaticsLogo from './datamatics-logo.png';
import amazonLogo from './amazon-logo.png';
import actelent from './actalent-logo.png';
import airtel from './airtel-logo.png';
import capegemini from './capegemini-logo.png';
import logo from './logo.png'; // Add your logo here
import introVideo from './vid1.mp4';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Footer from './footer.js';
import Newsletter from './Newsletter.js';

function Dashboard() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleExploreClick = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handlecomRedirect = () => {
    navigate('/companies');
  };
  const handleComRedirect = () => {
    navigate('/view1');
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    const query = searchQuery.trim().toLowerCase();

    if (query === 'tcs' || query === 'tata consultancy services') {
      navigate('/view1');
    } else if (query === 'amazon') {
      navigate('/view2');
    } else if (query === 'icici' || query === 'icici bank') {
      navigate('/icici');
    } else if (query === 'wells fargo') {
      navigate('/wellsfargo');
    } else if (query === 'datamatics') {
      navigate('/datamatics');
    } else if (query === 'actalent') {
      navigate('/actalent');
    } else if (query === 'airtel') {
      navigate('/airtel');
    } else if (query === 'capegemini') {
      navigate('/capegemini');
    } else if (query === 'google') {
      navigate('/view3');
    } else {
      alert('Company not found. Please check the spelling or search for a different company.');
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="dashboard">
      <Navbar />
      <header className="header1">
        <video className="intro-video" src={introVideo} autoPlay loop muted />
        <div className="header-content">
          <h1>Welcome to the HireHorizon</h1>
          <h3>Your career starts here</h3>
        </div>
      </header>
      <main className="main">
        <h2>Find your dream job now</h2>
        <p>5 lakh+ jobs for you to explore</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Job titles, key words or company"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="search-button" onClick={handleSearchSubmit}>Search</button>
        </div>
        <div className="promotion">
          <h3>Think career, Think us</h3>
          <p>A suite of tools, services, and resources that help you get ahead in your career</p>
          <button className="explore-button" onClick={handleExploreClick}>Explore now</button>
        </div>
        <div className="categories">
          <button>Remote</button>
          <button>MNC</button>
          <button>Internship</button>
          <button>Supply Chain</button>
          <button>Sales</button>
          <button>Engineering</button>
        </div>
        <div ref={sectionRef} className="featured-companies">
          <h3>Featured companies actively hiring</h3>
          <Slider {...sliderSettings}>
            <div className="company-card">
              <img src={tcsLogo} alt="Tata Consultancy Services" />
              <h4>Tata Consultancy Services</h4>
              <p className="rating">3.8 <span>78K+ reviews</span></p>
              <p>Explore challenging and exciting opportunities at TCS</p>
              <button className="view-jobs" onClick={handleComRedirect}>View jobs</button>
            </div>
            <div className="company-card">
              <img src={iciciLogo} alt="ICICI Bank" />
              <h4>ICICI Bank</h4>
              <p className="rating">4.0 <span>34.5K+ reviews</span></p>
              <p>Leading private sector bank in India.</p>
              <button className="view-jobs">View jobs</button>
            </div>
            <div className="company-card">
              <img src={wellsFargoLogo} alt="Wells Fargo" />
              <h4>Wells Fargo</h4>
              <p className="rating">4.0 <span>5.5K+ reviews</span></p>
              <p>Start your future now</p>
              <button className="view-jobs">View jobs</button>
            </div>
            <div className="company-card">
              <img src={datamaticsLogo} alt="Datamatics" />
              <h4>Datamatics</h4>
              <p className="rating">3.5 <span>1.8K+ reviews</span></p>
              <p>Global digital solutions & technology company.</p>
              <button className="view-jobs">View jobs</button>
            </div>
            <div className="company-card">
              <img src={amazonLogo} alt="Amazon" />
              <h4>Amazon</h4>
              <p className="rating">4.1 <span>60K+ reviews</span></p>
              <p>World's largest e-commerce company.</p>
              <button className="view-jobs">View jobs</button>
            </div>
            <div className="company-card">
              <img src={actelent} alt="Actalent" />
              <h4>Actalent</h4>
              <p className="rating">4.1 <span>80K+ reviews</span></p>
              <p>Global Engineering company.</p>
              <button className="view-jobs">View jobs</button>
            </div>
            <div className="company-card">
              <img src={airtel} alt="Airtel" />
              <h4>Airtel</h4>
              <p className="rating">4.1 <span>58K+ reviews</span></p>
              <p>Largest telecom provider.</p>
              <button className="view-jobs">View jobs</button>
            </div>
            <div className="company-card">
              <img src={capegemini} alt="CapeGemini" />
              <h4>CapeGemini</h4>
              <p className="rating">4.1 <span>108K+ reviews</span></p>
              <p>Global leader in consulting and digital transformation.</p>
              <button className="view-jobs">View jobs</button>
            </div>
          </Slider>
          <button className="view-all-companies" onClick={handlecomRedirect}>View all companies</button>
        </div>
        <div className="sponsored-companies">
          <h3>Sponsored Companies</h3>
          <div className="sponsored-company-cards">
            <div className="sponsored-company-card">
              <img src={tcsLogo} alt="TCS" />
              <h4>TCS</h4>
              <p>Innovative IT Solutions</p>
            </div>
            <div className="sponsored-company-card">
              <img src={iciciLogo} alt="ICICI Bank" />
              <h4>ICICI Bank</h4>
              <p>Leading Private Bank</p>
            </div>
            <div className="sponsored-company-card">
              <img src={wellsFargoLogo} alt="Wells Fargo" />
              <h4>Wells Fargo</h4>
              <p>Start Your Future</p>
            </div>
            <div className="sponsored-company-card">
              <img src={datamaticsLogo} alt="Datamatics" />
              <h4>Datamatics</h4>
              <p>Global Digital Solutions</p>
            </div>
            <div className="sponsored-company-card">
              <img src={amazonLogo} alt="Amazon" />
              <h4>Amazon</h4>
              <p>World's Largest E-commerce</p>
            </div>
            <div className="sponsored-company-card">
              <img src={actelent} alt="Actalent" />
              <h4>Actalent</h4>
              <p>Global Engineering Company</p>
            </div>
            <div className="sponsored-company-card">
              <img src={airtel} alt="Airtel" />
              <h4>Airtel</h4>
              <p>Largest Telecom Provider</p>
            </div>
            <div className="sponsored-company-card">
              <img src={capegemini} alt="CapeGemini" />
              <h4>CapeGemini</h4>
              <p>Consulting & Digital Transformation</p>
            </div>
          </div>
        </div>
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Dashboard;
