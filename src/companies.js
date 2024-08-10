import React, { useState } from 'react';
import tcsLogo from './tcs-logo.png';
import iciciLogo from './icici-logo.png';
import wellsFargoLogo from './wellsfargo-logo.png';
import datamaticsLogo from './datamatics-logo.png';
import amazonLogo from './amazon-logo.png';
import actelent from './actalent-logo.png';
import airtel from './airtel-logo.png';
import capegemini from './capegemini-logo.png';
import chart from './chart-logo.png';
import fis from './fis-logo.png';
import genpact from './genpact-logo.png';
import jio from './jio-logo.png';
import jp from './jp-logo.png';
import persistant from './persistent-logo.png';
import relainceretail from './relianceretail-logo.png';
import xoriant from './xoriant-logo.png';
import acc from './accenture-logo.png';
import google from './g1.png';

import './companies.css';
import Navbar from './navbar';
import { Box, Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const companies = [
  { src: tcsLogo, name: 'Tata Consultancy Services', rating: '3.8', reviews: '78K+', description: 'Explore challenging and exciting opportunities at TCS',link:'/view1' },
  { src: amazonLogo, name: 'Amazon', rating: '4.1', reviews: '60K+', description: 'World\'s largest e-commerce company.',link:'/view2' },
  { src: google, name: 'Google', rating: '4.8', reviews: '499K+', description: 'Innovating for a Better World and user-friendly search algorithm.',link:'/view3' },
  { src: acc, name: 'Accenture', rating: '4.1', reviews: '199K+', description: 'Innovating Tomorrow\'s Technology Today.',link:'/view4' },
  { src: iciciLogo, name: 'ICICI Bank', rating: '4.0', reviews: '34.5K+', description: 'Leading private sector bank in India.',link:'/view5' },
  { src: wellsFargoLogo, name: 'Wells Fargo', rating: '4.0', reviews: '5.5K+', description: 'Start your future now',link:'/view6' },
  { src: datamaticsLogo, name: 'Datamatics', rating: '3.5', reviews: '1.8K+', description: 'Global digital solutions & technology company.',link:'/view7' },
  { src: actelent, name: 'Actalent', rating: '3.7', reviews: '80K+', description: 'Global Engineering company.',link:'/view8' },
  { src: airtel, name: 'Airtel', rating: '4.0', reviews: '58K+', description: 'Largest telecom provider.',link:'/view9' },
  { src: jio, name: 'Jio', rating: '4.2', reviews: '50K+', description: 'Shaping the Future with Groundbreaking Technology and Consulting.',link:'/view10' },
  { src: relainceretail, name: 'Reliance Retail', rating: '3.9', reviews: '18K+', description: 'The Forefront of Technology and Digital Advancement.',link:'/view11' },
  { src: chart, name: 'Standard Chartered', rating: '3.8', reviews: '111K+', description: 'Delivering Next-Generation IT Services and Solutions Worldwide.',link:'/view12' },
  { src: xoriant, name: 'Xoriant', rating: '3.9', reviews: '35K+', description: 'Global leader in digital transformation.',link:'/view13' },
  { src: fis, name: 'FIS', rating: '3.7', reviews: '78K+', description: 'Empowering Businesses through Innovative Technology and Expertise.',link:'/view14' },
  { src: jp, name: 'JP Morgan', rating: '4.3', reviews: '78K+', description: 'Leading the Charge in Digital Transformation and Solutions.',link:'/view15' },
  { src: genpact, name: 'Genpact', rating: '4.0', reviews: '90K+', description: 'Redefining the Digital Landscape with Cutting-Edge Solutions.',link:'/view16' },
  { src: persistant, name: 'Persistent', rating: '4.2', reviews: '109K+', description: 'Driving Excellence in Global IT and Consulting Services.',link:'/view17' },
  { src: capegemini, name: 'CapeGemini', rating: '4.1', reviews: '108K+', description: 'Global leader in consulting and digital transformation.',link:'/view18' },
];

const categories = [
  { name: 'MNCs', count: '1.9K+ Companies' },
  { name: 'Product', count: '962 Companies' },
  { name: 'Banking & Finance', count: '343 Companies' },
  { name: 'Hospitality', count: '94 Companies' },
  { name: 'Fintech', count: '111 Companies' },
];

const Companies = () => {
  const [showAll, setShowAll] = useState(false);
  const [checkedFilters, setCheckedFilters] = useState([]);

  const handleViewAllToggle = () => {
    setShowAll(!showAll);
  };

  const handleClearAll = () => {
    setCheckedFilters([]);
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  return (
    <div>
      <Navbar />

      <div className="companies-container123">
        <div className="filters123">
          <div className="filters-header">
            <h4>Filters</h4>
            <button className="clear-all-button" onClick={handleClearAll}>Clear All</button>
          </div>
          <div>
            <h5>Company Type</h5>
            <label>
              <input type="checkbox" /> Corporate (3671)
            </label>
            <label>
              <input type="checkbox" /> Foreign MNC (1327)
            </label>
            <label>
              <input type="checkbox" /> Indian MNC (622)
            </label>
            <label>
              <input type="checkbox" /> Startup (420)
            </label>
          </div>
          <div>
            <h5>Location</h5>
            <label>
              <input type="checkbox" /> Chennai
            </label>
            <label>
              <input type="checkbox" /> Hyderabad
            </label>
            <label>
              <input type="checkbox" /> Bangalore
            </label>
            <label>
              <input type="checkbox" /> New Delhi
            </label>
            <label>
              <input type="checkbox" /> Pune
            </label>
            <label>
              <input type="checkbox" /> Kolkata
            </label>
          </div>
          <div>
            <h5>Industry</h5>
            <label>
              <input type="checkbox" /> IT Services & Consulting
            </label>
            <label>
              <input type="checkbox" /> Software Product
            </label>
            <label>
              <input type="checkbox" /> Financial Services
            </label>
            <label>
              <input type="checkbox" /> Internet
            </label>
          </div>
          <div>
            <h5>Department</h5>
            <label>
              <input type="checkbox" /> Human Resources
            </label>
            <label>
              <input type="checkbox" /> Software Development
            </label>
            <label>
              <input type="checkbox" /> Sales & Business
            </label>
            <label>
              <input type="checkbox" /> Data science & Analyst
            </label>
            <label>
              <input type="checkbox" /> Research & Development
            </label>
            <label>
              <input type="checkbox" /> Consulting
            </label>
          </div>
          <div>
            <h5>Experience</h5>
            <label>
              <input type="checkbox" /> Experienced (7131)
            </label>
            <label>
              <input type="checkbox" /> Entry level (1815)
            </label>
          </div>
          {/* <div>
            <h5>Nature of Business</h5>
            <label>
              <input type="checkbox" /> B2B
            </label>
            <label>
              <input type="checkbox" /> SaaS
            </label>
            <label>
              <input type="checkbox" /> PaaS
            </label>
            <label>
              <input type="checkbox" /> D2C
            </label>
          </div> */}
        </div>

        <div className="featured-companies">
          <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
            <Typography variant="h4">Top Companies Hiring Now</Typography>
            <Grid container spacing={4} sx={{ marginTop: '20px', justifyContent: 'center' }}>
              {categories.map((category, index) => (
                <Grid item key={index}>
                  <Button variant="contained" color="primary">
                    {category.name} <br /> {category.count}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>

          <h3>Featured companies actively hiring</h3>
          <div className="company-cards">
            {companies.slice(0, showAll ? companies.length : 4).map((company, index) => (
              <div key={index} className="company-card1">
                <img src={company.src} alt={company.name} />
                <h4>{company.name}</h4>
                <p className="rating">{company.rating} <span>{company.reviews} reviews</span></p>
                <p>{company.description}</p>
                <button className="view-jobs">
                  <Link to={company.link}>View jobs</Link>
                </button>
              </div>
            ))}
          </div>
          {companies.length > 4 && (
            <div className="view-all-button-container">
              <Button variant="contained" color="primary" onClick={handleViewAllToggle}>
                {showAll ? 'View Less' : 'View All'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Companies;
