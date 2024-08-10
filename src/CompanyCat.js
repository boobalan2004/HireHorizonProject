import React, { useState } from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';
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

import './companies.css';
const CompanyCat = () => {
  const [showAll, setShowAll] = useState(false);

  const handleViewAllToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="sponsored-companies">
          <h1>HireHorizon Sponsored Companies</h1>
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
            <div className="sponsored-company-card">
              <img src={jio} alt="jio" />
              <h4>Jio</h4>
              <p>Shaping the Future with Groundbreaking Technology and Consulting.</p>
            </div>
            <div className="sponsored-company-card">
              <img src={chart} alt="chart" />
              <h4>Standard Chartered</h4>
              <p>Delivering Next-Generation IT Services and Solutions Worldwide.</p>
            </div>
            <div className="sponsored-company-card">
              <img src={relainceretail} alt="reliance" />
              <h4>Reliance Retail</h4>
              <p>The Forefront of Technology and Digital Advancement.</p>
            </div>
            <div className="sponsored-company-card">
              <img src={jp} alt="jp" />
              <h4>JP Morgan</h4>
              <p>Leading the Charge in Digital Transformation and Solutions.</p>
            </div>
            <div className="sponsored-company-card">
              <img src={acc} alt="acc" />
              <h4>Accenture</h4>
              <p>Innovating Tomorrow\'s Technology Today.</p>
            </div>
            <div className="sponsored-company-card">
              <img src={persistant} alt="persistant" />
              <h4>Persistent</h4>
              <p>Driving Excellence in Global IT and Consulting Services.</p>
            </div>
            <div className="sponsored-company-card">
              <img src={genpact} alt="genpact" />
              <h4>Genpact</h4>
              <p>Redefining the Digital Landscape with Cutting-Edge Solutions.</p>
            </div>
            <div className="sponsored-company-card">
              <img src={fis} alt="fis" />
              <h4>FIS</h4>
              <p>Empowering Businesses through Innovative Technology and Expertise.</p>
            </div>
            <div className="sponsored-company-card">
              <img src={xoriant} alt="xoriant" />
              <h4>Xoriant</h4>
              <p>Global leader in digital transformation.</p>
            </div>
          </div>
        </div>
  );
};

export default CompanyCat;
