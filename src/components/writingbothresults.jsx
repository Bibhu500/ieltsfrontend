import Writing1Results from './Writing1Results';
import Writing2Results from './Writing2Results';

// ...

const Results = ({ writing1Result, writing2Result, finalBand }) => {
  return (
    <div>
      <h2>Test Results</h2>
      <h3>Writing Task 1</h3>
      {writing1Result && <Writing1Results {...writing1Result} />}
      <h3>Writing Task 2</h3>
      {writing2Result && <Writing2Results {...writing2Result} />}
      <h3>Final Band Score</h3>
      <p>{finalBand.toFixed(1)}</p>
    </div>
  );
};