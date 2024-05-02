// Writing1Results.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import ScoreCard from './ScoreCard';

const Writing1Resultscombo = () => {
  const location = useLocation();
  const testDetails = location.state;

  if (!testDetails) {
    return <div>No test details found.</div>;
  }

  const { question, answer, wordCount, imageUrl, result } = testDetails;

  return (
    <div>
      <h2>Writing Task 1 Results</h2>
      <p>Question: {question}</p>
      {imageUrl && <img src={imageUrl} alt="Question Image" />}
      <p>Your Essay:</p>
      <p>{answer}</p>
      <ScoreCard {...result.ieltsinfo} />
      <p>Your Essay Word Count: {wordCount}</p>
    </div>
  );
};

export default Writing1Resultscombo;