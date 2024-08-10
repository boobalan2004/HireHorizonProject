// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faBook, faBuilding, faUsers, faBriefcase, faChartBar, faSearch } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="admin-profile">
        <img src="adminlogo.png" alt="Admin" />
        <span>HireHorizon</span>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/admin-login">
              <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/add-job">
              <FontAwesomeIcon icon={faBriefcase} /> Add Jobs
            </Link>
          </li>
          <li>
            <Link to="/list-of-jobs">
              <FontAwesomeIcon icon={faBuilding} /> Posted Jobs
            </Link>
          </li>
          <li>
            <Link to="/joblist">
              <FontAwesomeIcon icon={faUsers} /> Reg Jobseekers
            </Link>
          </li>
          <li>
            <Link to="/query-list">
              <FontAwesomeIcon icon={faChartBar} /> Users Queries
            </Link>
          </li>
          <li>
            <Link to="/com-category">
              <FontAwesomeIcon icon={faBook} /> Company Category
            </Link>
          </li>
          <li>
            <Link to="/search">
              <FontAwesomeIcon icon={faSearch} /> Search
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
