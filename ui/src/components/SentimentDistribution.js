import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the components with Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

function SentimentDistribution({ data }) {
  const positive = data.filter(entry => entry.sentiment === 'positive').length;
  const negative = data.filter(entry => entry.sentiment === 'negative').length;
  const neutral = data.filter(entry => entry.sentiment === 'neutral').length;

  const chartData = {
    labels: ['Positive', 'Negative', 'Neutral'],
    datasets: [
      {
        label: 'Sentiment Distribution',
        data: [positive, negative, neutral],
        backgroundColor: ['#4CAF50', '#F44336', '#FFC107'],
      },
    ],
  };

  return (
    <div>
      <h2>Sentiment Distribution</h2>
      <Pie data={chartData} />
    </div>
  );
}

export default SentimentDistribution;
