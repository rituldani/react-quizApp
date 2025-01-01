import React from 'react';

export default function Scores({ score }) {  // Changed Scores to score
  return (
    <div>
      <h2>Results</h2>
      <h4>Your score: {score}</h4>
    </div>
  );
}
