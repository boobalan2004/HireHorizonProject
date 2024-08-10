import React from 'react';
import './SocialStatsCard.css'; // CSS for the SocialStatsCard layout

const SocialStatsCard = ({ platform, count, feeds, icon, color }) => {
  return (
    <div className="social-stats-card">
      <div className="social-stats-icon" style={{ backgroundColor: color }}>
        <i className={icon}></i>
      </div>
      <div className="social-stats-content">
        <h3>{count}</h3>
        <p>{platform}</p>
        {feeds && <p className="social-stats-feeds">{feeds}</p>}
      </div>
    </div>
  );
};

export default SocialStatsCard;
