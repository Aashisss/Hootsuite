import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SentimentAnalysis() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/analyze')
            .then(response => {
                console.log(response.data); // Log the data to ensure it's correct
                setData(response.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err.message);
                setError(err.message);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Sentiment Analysis Dashboard</h1>
            {/* Render your data here */}
        </div>
    );
}

export default SentimentAnalysis;
