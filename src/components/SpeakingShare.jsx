import { useLocation, useNavigate } from 'react-router-dom';
import EvaluationCard from './EvaluationCard';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';
import axios from "axios";

const SpeakingShare = () => {
  const location = useLocation();
  const [testDetails, setTestDetails] = useState(null);
  const [remarks, setRemarks] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTestDetails = async () => {
      try {
        const shareId = location.pathname.split('/').pop();
        console.log(shareId);
        const token = localStorage.getItem('token');
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/speaking/share/${shareId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);
        if (!(response.status === 200)) {
          throw new Error('Failed to fetch test details');
        }
        const data = await response.data;
        console.log(data);
        setTestDetails(data);
        setRemarks(data.remarks || {});
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
    const message_type = "speaking";

    const token = localStorage.getItem('token');
    if (!token) {
      localStorage.setItem('redirectToSpeakingShare', 'true');
      localStorage.setItem('speakingShareUrl', location.pathname);
      navigate('/loginsignup');
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/notification/sendRequest`, {
        _id, user_id, message_type, share_id
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 201) {
        alert("The request has been sent");
      }
      console.log(response.data);
    } catch (err) {
      if (err.response.status) {
        alert("Already Requested");
      }
    }
  };

  const handleRemarkSubmit = async () => {
    const { share_id } = testDetails;
    const token = localStorage.getItem('token');
    console.log(remarks);
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/speaking/share/add-remark`, {
        share_id,
        remarks
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      alert("Remarks submitted");
    } catch (error) {
      console.error('Error submitting remarks:', error);
    }
  };

  const handleRemarkChange = (partIndex, qaIndex, remark) => {
    setRemarks(prevRemarks => ({
      ...prevRemarks,
      [`part${partIndex}_qa${qaIndex}`]: remark
    }));
  };

  return (
    <div className="ielts-speaking-test-result bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Typography variant="h2" component="h1" className="mb-8 text-center text-gray-800 font-bold">
          Speaking Test Results
        </Typography>
        <div className="bg-white rounded-lg shadow-lg p-8">
          {!testDetails.editor_id && !testDetails.isOwner ? (
            <div className="mb-8">
              <button onClick={handleRequestToEdit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Review The Test
              </button>
            </div>
          ) : null}
        {testDetails.editor_name && (
          <Typography variant="subtitle1" className="text-right text-gray-600 mb-4">
            Edited by: {testDetails.editor_name}
          </Typography>
        )}
          <div className="mb-12">
            {testDetails.allQuestionsAndAnswers.map((part, partIndex) => (
              <div key={partIndex} className="mb-8">
                <Typography variant="h4" component="h2" className="mb-4 text-gray-800 font-semibold">
                  Part {part.part}
                </Typography>
                {part.questionanswer.map((qa, qaIndex) => (
                    <div key={qaIndex} className="mb-4">
                        {Object.entries(qa).map(([key, value], index) => (
                        <div key={index}>
                            {key.startsWith('question') && (
                            <Typography variant="subtitle1" className="font-medium text-gray-800">
                                Question: {value}
                            </Typography>
                            )}
                            {key.startsWith('answer') && (
                            <div>
                                <Typography variant="body1" className="text-gray-700 mb-2">
                                Answer: {value}
                                </Typography>
                                {testDetails.isEditor && (
                                <div>
                                    <textarea
                                    value={remarks[`part${partIndex}_qa${qaIndex}`] || ''}
                                    onChange={e => handleRemarkChange(partIndex, qaIndex, e.target.value)}
                                    className="w-full p-2 mt-2 border border-gray-300 rounded"
                                    placeholder="Add remark"
                                    ></textarea>
                                </div>
                                )}
                                {!testDetails.isEditor && testDetails.remarks && testDetails.remarks[`part${partIndex}_qa${qaIndex}`] && (
                                <div className="mt-2 flex">
                                    <Typography variant="subtitle2" className="font-medium text-red-800" style={{ fontWeight: 'bold' }}>
                                        Remark: &nbsp;
                                    </Typography>
                                    <Typography variant="body2" className="text-gray-700">
                                    {testDetails.remarks[`part${partIndex}_qa${qaIndex}`]}
                                    </Typography>
                                </div>
                                )}
                            </div>
                            )}
                        </div>
                        ))}
                    </div>
                ))}
              </div>
            ))}
          </div>
          <div className="mb-8">
            <Typography variant="h4" component="h2" className="mb-4 text-gray-800 font-semibold">
              Evaluation:
            </Typography>
            <EvaluationCard
              overallBand={testDetails.result.ieltsInfo.overallBand}
              fluencyCoherence={testDetails.result.ieltsInfo.sectionalBand.FluencyCoherence}
              lexicalResource={testDetails.result.ieltsInfo.sectionalBand.LexicalResource}
              grammaticalRangeAccuracy={testDetails.result.ieltsInfo.sectionalBand.GrammaticalRangeAccuracy}
              pronunciation={testDetails.result.ieltsInfo.sectionalBand.Pronunciation}
              feedback={testDetails.result.ieltsInfo.feedback}
              mistakes={testDetails.result.ieltsInfo.mistakes}
            />
          </div>
          {testDetails.isEditor && (
            <div className="mb-8">
              <button
                onClick={handleRemarkSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit Remarks
              </button>
            </div>
          )}
          <div className="text-gray-500 flex items-center justify-end">
            <AccessTimeIcon className="mr-1" />
            <Typography variant="body2">
              Test taken on {new Date(testDetails.createdAt).toLocaleString()}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingShare;