import { useLocation, useNavigate } from 'react-router-dom';
import ScoreCard from './ScoreCard';
import React, { useState, useEffect } from 'react';
import axios from "axios";

const WritingShare = () => {
  const location = useLocation();
  const [testDetails, setTestDetails] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTestDetails = async () => {
      try {
        // Extract the shareId from the URL
        const shareId = location.pathname.split('/').pop();
        console.log(shareId)
        const response = await fetch(`http://localhost:5000/api/writing/share/${shareId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch test details');
        }
        const data = await response.json();
        console.log(data)
        setTestDetails(data); // Assuming the response contains the test details
    } catch (error) {
        console.error('Error fetching test details:', error);
    }
};

fetchTestDetails();
}, [location.pathname]);

  if (!testDetails) {
        return <div>No test details found.</div>;
  }
  const handleRequestToEdit = async () => {
    // if (!isLoggedIn) {
    //   // Redirect to the /loginsignup page if not logged in
    //   navigate('/loginsignup');
    // } else {
    //   // Handle request edit functionality here
    //   // For example, you can show a confirmation dialog or send a request to the backend
    //   console.log('Request edit clicked');
    // }
    const { _id, user_id, share_id } = testDetails;
    const message_type = "writing";

    const token = localStorage.getItem('token');
    const response = await axios.post('http://localhost:5000/api/notification/sendRequest', {
      _id, user_id, message_type, share_id
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });        
    console.log(response.data);
  };

  return (
    testDetails && <div className="ielts-writing-test-result p-8 bg-white rounded-lg shadow-lg">
        {!testDetails.editor_id && (
          <div className="mb-8">
            <button onClick={handleRequestToEdit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Request to Edit
            </button>
          </div>
        )}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Question:</h2>
        <p className="text-lg text-gray-800">{testDetails.question}</p>
        {/* Display image if available */}
        {testDetails.imageUrl && (
          <img
            src={testDetails.imageUrl}
            alt="Question Image"
            className="mx-auto flex justify-center mt-4 rounded-lg shadow-lg"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        )}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your Essay:</h2>
        <p className="whitespace-pre-wrap">{testDetails.result.ieltsinfo.feedback}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Mistakes and Corrections:</h2>
        {testDetails.result.ieltsinfo.mistakes.map((mistake, idx) => (
          <div key={idx} className="mb-2">
            <p>
              <strong>Mistake:</strong> <span style={{ color: 'red' }}>{mistake.mistake}</span>
            </p>
            <p>
              <strong>Correction:</strong> <span style={{ color: 'green' }}>{mistake.correction}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your Essay Word Count:</h2>
        <p className="text-lg text-gray-800">{testDetails.wordCount}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your Scores:</h2>
        <ScoreCard
          overallBand={testDetails.result.ieltsinfo.overallBand}
          taskResponse={testDetails.result.ieltsinfo.sectionalBand.TaskAchievement}
          coherenceCohesion={testDetails.result.ieltsinfo.sectionalBand.CoherenceCohesion}
          lexicalResource={testDetails.result.ieltsinfo.sectionalBand.LexicalResource}
          grammaticalRangeAccuracy={testDetails.result.ieltsinfo.sectionalBand.GrammaticalRangeAccuracy}
        />
      </div>
    </div>
  );
};

export default WritingShare;