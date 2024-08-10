import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import StatsCard from './StatsCard';
import SocialStatsCard from './SocialStatsCard'; // New component
import VacancyStatsChart from './VacancyStatsChart'; // Import the new chart component
import './DashboardContainer.css'; // CSS for the main layout
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const DashboardContainer = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content21">
        <Header />
        <div className="dashboard-stats">
          <StatsCard title="Total Job Category" count={5} icon="fas fa-book" color="purple" />
          <StatsCard title="Total Registered Employer" count={3} icon="fas fa-building" color="blue" />
          <StatsCard title="Total Registered Candidates" count={2} icon="fas fa-users" color="cyan" />
          <StatsCard title="Total Listed Jobs" count={7} icon="fas fa-briefcase" color="teal" />
        </div>

        <div className="dashboard-extra-stats">
          <SocialStatsCard platform="Welcome" count="2500" icon="fas fa-user" color="#FFA500" />
          <SocialStatsCard platform="Average Time" count="123.50" icon="fas fa-clock" color="#1E90FF" />
          <SocialStatsCard platform="Collections" count="1,805" icon="fas fa-cloud-download-alt" color="#32CD32" />
          <SocialStatsCard platform="Comments" count="54" icon="fas fa-comments" color="#FF69B4" />

          <SocialStatsCard platform="Friends" count="35k" feeds="128 Feeds" icon="fab fa-facebook" color="#3b5998" />
          <SocialStatsCard platform="Followers" count="584k" feeds="978 Tweets" icon="fab fa-twitter" color="#00acee" />
          <SocialStatsCard platform="Contacts" count="758+" feeds="365 Feeds" icon="fab fa-linkedin" color="#0077b5" />
          <SocialStatsCard platform="Followers" count="450" feeds="57 Circles" icon="fab fa-google-plus-g" color="#dd4b39" />
        </div>

        {/* Vacancy Stats Chart */}
        <VacancyStatsChart />
      </div>
    </div>
  );
};

export default DashboardContainer;
