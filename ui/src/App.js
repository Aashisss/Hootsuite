import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SentimentTrends from './components/SentimentTrends';
import SentimentDistribution from './components/SentimentDistribution';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Alerts from './components/Alerts';
import SentimentAnalysis from './components/SentimentAnalysis'; // Import the SentimentAnalysis component

function App() {
  const [data, setData] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [filters, setFilters] = useState({});

  // Fetching data from the backend using axios
  useEffect(() => {
    axios.get('/api/get_sentiment_data', { params: filters })
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [filters]);

  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [filterName]: value }));
  };

  const handleResolveAlert = (alertId) => {
    setAlerts(prevAlerts => prevAlerts.filter(alert => alert.id !== alertId));
  };

  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar onFilterChange={handleFilterChange} />
        <div style={{ flex: 1, padding: '20px' }}>
          <SentimentAnalysis /> {/* Add the SentimentAnalysis component */}
          <SentimentTrends data={data} />
          <SentimentDistribution data={data} />
          <Alerts alerts={alerts} onResolve={handleResolveAlert} />
        </div>
      </div>
    </div>
  );
}

export default App;
