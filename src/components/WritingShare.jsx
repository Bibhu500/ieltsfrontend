import { useLocation, useNavigate } from 'react-router-dom';
import ScoreCard from './ScoreCard';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Typography from '@mui/material/Typography';

const WritingShare = () => {
  const location = useLocation();
  const [testDetails, setTestDetails] = useState(null);
  const [remarkText, setRemarkText] = useState('');
  const [remarkRemark, setRemarkRemark] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTestDetails = async () => {
      try {
        // Extract the shareId from the URL
        const shareId = location.pathname.split('/').pop();
        console.log(shareId)
        const token = localStorage.getItem('token');
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/writing/share/${shareId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response)
        if (!(response.status == 200)) {
            throw new Error('Failed to fetch test details');
        }
        const data = await response.data;
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
    const { _id, user_id, share_id } = testDetails;
    const message_type = "writing";

    const token = localStorage.getItem('token');
    if (!token) {
      localStorage.setItem('redirectToWritingShare', 'true');
      localStorage.setItem('writingShareUrl', location.pathname);
      navigate('/loginsignup');
      return;
    }

    try{

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/notification/sendRequest`, {
        _id, user_id, message_type, share_id
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }); 
      if((response.status == 201)){
        alert("The request has been send");
      }
      
      console.log(response.data);
    } catch(err){
      if(err.response.status){
        alert("Already Requested")
      }
    }
  };

  const handleRemarkSubmit = async () => {
    const { _id, share_id } = testDetails;
    const token = localStorage.getItem('token');

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/writing/share/add-remark`, {
        share_id,
        remarkText,
        remarkRemark
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);

      setTestDetails(prevDetails => ({
        ...prevDetails,
        remarks: [...prevDetails.remarks, { remarkText, remarkRemark }]
      }));

      alert("Submited");
      // Clear the input fields after successful submission
      setRemarkText('');
      setRemarkRemark('');
    } catch (error) {
      console.error('Error submitting remark:', error);
    }
  };

  return (
    testDetails && <div className="ielts-writing-test-result p-8 bg-white rounded-lg shadow-lg">
        {!testDetails.editor_id && !testDetails.isOwner? (
          <div className="mb-8">
            <button onClick={handleRequestToEdit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Review The Test
            </button>
          </div>
        ):null}
        {testDetails.editor_name && (
          <Typography variant="subtitle1" className="text-right text-gray-600 mb-4">
            Edited by: {testDetails.editor_name}
          </Typography>
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

      {testDetails.isEditor? <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add Remark</h2>
        <div>
          <textarea
            value={remarkText}
            onChange={(e) => setRemarkText(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            placeholder="Enter remark text"
          ></textarea>
          <textarea
            value={remarkRemark}
            onChange={(e) => setRemarkRemark(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            placeholder="Enter remark"
          ></textarea>
          <button
            onClick={handleRemarkSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit Remark
          </button>
        </div>
      </div>
      : null }

      {testDetails.remarks.length>0 ? (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Remarks</h2>
          {testDetails.remarks.map((remark, idx) => (
            <div key={idx} className="mb-4">
              <p><strong>Remark Text:</strong> {remark.remarkText}</p>
              <p><strong>Remark:</strong> {remark.remarkRemark}</p>
            </div>
          ))}
        </div>
      ) : null}

    </div>
  );
};

export default WritingShare;