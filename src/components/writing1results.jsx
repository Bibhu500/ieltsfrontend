import React from 'react';
import { useLocation } from 'react-router-dom';
import ScoreCard from './ScoreCard';
import { useState } from 'react';

const Writing1Results = () => {
  const [shareLink, setShareLink] = useState('');
  
  const location = useLocation();
  const testDetails = location.state;
  if (!testDetails) {
    return <div>No test details found.</div>;
  }

  const { question, answer, wordCount, imageUrl, result, share_id } = testDetails;

  const handleShare = () => {
    // Generate a sample share link (replace with actual logic to generate a unique link)
    const sampleLink = `${import.meta.env.VITE_FRONTEND_URL}/writing/share/${share_id}`;
    setShareLink(sampleLink);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="ielts-writing-test-result p-8 bg-white rounded-lg shadow-lg">

    <div className="mb-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleShare}>
          Share Test
        </button>
        {shareLink && (
          <div className="mt-4">
            <p>Share this link:</p>
            <div className="flex items-center">
              <input type="text" value={shareLink} readOnly className="bg-gray-100 flex-1 mr-2 p-2 rounded" />
              <button
                onClick={copyToClipboard}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Copy
              </button>
            </div>
          </div>
        )}
    </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Question:</h2>
        <p className="text-lg text-gray-800">{question}</p>
        {/* Display image if available */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Question Image"
            className="mx-auto flex justify-center mt-4 rounded-lg shadow-lg"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        )}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your Essay:</h2>
        <p className="whitespace-pre-wrap">{result.ieltsinfo.feedback}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Mistakes and Corrections:</h2>
        {result.ieltsinfo.mistakes.map((mistake, idx) => (
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
        <p className="text-lg text-gray-800">{wordCount}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your Scores:</h2>
        <ScoreCard
          overallBand={result.ieltsinfo.overallBand}
          taskResponse={result.ieltsinfo.sectionalBand.TaskAchievement}
          coherenceCohesion={result.ieltsinfo.sectionalBand.CoherenceCohesion}
          lexicalResource={result.ieltsinfo.sectionalBand.LexicalResource}
          grammaticalRangeAccuracy={result.ieltsinfo.sectionalBand.GrammaticalRangeAccuracy}
        />
      </div>
    </div>
  );
};

export default Writing1Results;