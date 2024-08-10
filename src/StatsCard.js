import React from 'react';
import './StatsCard.css';

const StatsCard = ({ title, count, icon, color }) => {
  return (
    <div className={`stats-card ${color}`}>
      <div className="card-content1234">
        <div className="icon12">
          <i className={icon}></i>
        </div>
        <h3>{title}</h3>
        <span>{count}</span>
      </div>
    </div>
  );
};

export default StatsCard;
