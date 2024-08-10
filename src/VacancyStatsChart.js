import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const VacancyStatsChart = () => {
  const data = {
    labels: ['Week 01', 'Week 02', 'Week 03', 'Week 04', 'Week 05', 'Week 06', 'Week 07', 'Week 08', 'Week 09', 'Week 10'],
    datasets: [
      {
        label: 'Application Sent',
        data: [80, 60, 40, 55, 70, 85, 60, 75, 65, 90],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Interviews',
        data: [40, 35, 45, 30, 50, 45, 50, 55, 45, 50],
        borderColor: 'green',
        backgroundColor: 'rgba(0, 255, 0, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Rejected',
        data: [20, 25, 15, 10, 15, 20, 10, 15, 20, 5],
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true, // Use circle instead of box
          pointStyle: 'circle', // Set point style to circle
          padding: 20, // Add some padding for better spacing
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="vacancy-stats-chart">
      <h2>Vacancy Stats</h2>
      <Line data={data} options={options} width={600} height={300} /> {/* Increased width and height */}
    </div>
  );
};

export default VacancyStatsChart;
