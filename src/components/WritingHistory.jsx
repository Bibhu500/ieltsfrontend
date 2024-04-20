import React, { useState, useEffect } from 'react';
import axios from 'axios';

function WritingHistory() {
  const [writingHistory, setWritingHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWritingHistory();
  }, []);

  const fetchWritingHistory = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log('Authentication Token:', token);
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/writing`, {
        headers: {
          'Authorization': token
        }
      });
      console.log('Response Data:', response.data);
      setWritingHistory(Array.isArray(response.data) ? response.data : [response.data]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching writing history:', error);
      setError('Failed to fetch writing history. Please try again.');
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Writing History</h2>
      {writingHistory.length > 0 ? (
        writingHistory.map((writing) => (
          <div key={writing._id}>
            <h3>{writing.question}</h3>
            <p>Answer: {writing.answer}</p>
            <p>Word Count: {writing.wordCount}</p>
            {/* Display other relevant data */}
          </div>
        ))
      ) : (
        <p>No writing history found.</p>
      )}
    </div>
  );
}

export default WritingHistory;