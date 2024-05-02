import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const TestResults = () => {
  const location = useLocation();
  const [data, setData] = useState(undefined);

  
  useEffect(() => {
      const fetchTestDetails = async () => {
          console.log("Hello")
          try {
              // Extract the shareId from the URL
              const shareId = location.pathname.split('/').pop();
              console.log(shareId)
              const response = await fetch(`${import.meta.env.VITE_BASE_URL}/reading/share/${shareId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch test details');
        }
        const response_data = await response.json();
        setData(response_data); // Assuming the response contains the test details
    } catch (error) {
        console.error('Error fetching test details:', error);
    }
};
fetchTestDetails();
}, [location.pathname]);


  const formatDateTime = (dateString) => {
      const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        };
        return new Date(dateString).toLocaleString(undefined, options);
    };
    
    if (!data) {
      return (
        <div className="flex items-center justify-center h-screen">
          <p className="text-2xl text-gray-500">Test details not found...</p>
        </div>
      );
    }

    const { passages, results, createdAt, share_id } = data;
    const { total_score, userAnswers } = results;

    return (
        <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Test Results</h1>
        <p className="text-gray-600 mb-8">
          Test given on: {formatDateTime(createdAt)}
        </p>
        <div className="flex items-center justify-between mb-8">
          <p className="text-xl font-bold">
            Total Score: {total_score} / 10
          </p>
          <p className="text-xl font-bold">
            Percentage: {(total_score * 10).toFixed(2)}%
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {passages.map((passage, passageIndex) => (
            <div key={passage._id} className="bg-gray-100 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">{passage.passageTitle}</h2>
              <p className="mb-6 text-gray-700">{passage.passage}</p>
              <div>
                {passage.allQuestionsAndAnswers.map((qa) => {
                  const userAnswer = userAnswers[passageIndex].find(
                    (answer) => answer.question._id === qa._id
                  );
                  const answerClass = userAnswer.isCorrect
                    ? 'text-green-600'
                    : 'text-red-600';

                  return (
                    <div key={qa._id} className="mb-6">
                      <p className="font-bold text-lg mb-2">{qa.questionText}</p>
                      <div>
                        <p className={`${answerClass} mb-1`}>
                          Your Answer:{' '}
                          {Array.isArray(userAnswer.userAnswer)
                            ? userAnswer.userAnswer.join(', ')
                            : userAnswer.userAnswer}
                        </p>
                        <p className="text-gray-700">
                          Correct Answer: {qa.answer.join(', ')}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestResults;