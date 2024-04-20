import { useEffect, useState } from 'react';
import axios from 'axios';

const UserWritings = () => {
  const [testResult, setTestResult] = useState(null);

  useEffect(() => {
    const fetchTestResult = async () => {
      try {
        const token = localStorage.getItem('token');
       
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/writing`, {
          headers: {
            'Authorization': token
          }
        });
        
        setTestResult(response.data);
        console.log(response)
      } catch (error) {
        console.error('Error fetching test result:', error);
      }
    };

    fetchTestResult();
  }, []);

  if (!testResult) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-test-result">
      <h2>User Test Result</h2>
      <div className="question">
        <h3>Question</h3>
        <p>{testResult.question}</p>
        <img src={testResult.image} alt="Question" />
      </div>
      <div className="essay">
        <h3>Essay</h3>
        <p>{testResult.answer}</p>
        <p>Word Count: {testResult.wordCount}</p>
      </div>
      <div className="result">
        <h3>Result</h3>
        <p>Overall Band: {testResult.result.ieltsinfo.overallBand}</p>
        <div className="sectional-band">
          <h4>Sectional Band</h4>
          <ul>
            <li>Task Achievement: {testResult.result.ieltsinfo.sectionalBand.TaskAchievement}</li>
            <li>Coherence Cohesion: {testResult.result.ieltsinfo.sectionalBand.CoherenceCohesion}</li>
            <li>Lexical Resource: {testResult.result.ieltsinfo.sectionalBand.LexicalResource}</li>
            <li>Grammatical Range Accuracy: {testResult.result.ieltsinfo.sectionalBand.GrammaticalRangeAccuracy}</li>
          </ul>
        </div>
        <p>Feedback: {testResult.result.ieltsinfo.feedback}</p>
        <div className="mistakes">
          <h4>Mistakes</h4>
          <ul>
            {testResult.result.ieltsinfo.mistakes.map((mistake, index) => (
              <li key={index}>
                <p>Mistake: {mistake.mistake}</p>
                <p>Correction: {mistake.correction}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserWritings;