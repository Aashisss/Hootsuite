import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components with Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function SentimentTrends({ data }) {
  const chartData = {
    labels: data.map(entry => entry.timestamp),
    datasets: [
      {
        label: 'Sentiment Score',
        data: data.map(entry => entry.sentiment_score),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2>Sentiment Trends Over Time</h2>
      <Line data={chartData} />
    </div>
  );
}

export default SentimentTrends;
