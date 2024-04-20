import React from 'react';
import { useLocation } from 'react-router-dom';
import EvaluationCard from './EvaluationCard';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Typography from '@mui/material/Typography';

const SpeakingResults = () => {
  const location = useLocation();
  const testDetails = location.state;

  if (!testDetails) {
    return <div>No test details found.</div>;
  }

  const { allQuestionsAndAnswers, result, createdAt } = testDetails;

  return (
    <div className="ielts-speaking-test-result bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Typography variant="h2" component="h1" className="mb-8 text-center text-gray-800 font-bold">
          Speaking Test Results
        </Typography>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-12">
            <Typography variant="h4" component="h2" className="mb-4 text-gray-800 font-semibold">
              Questions and Answers:
            </Typography>
            {allQuestionsAndAnswers.map((part, partIndex) => (
              <div key={partIndex} className="mb-8">
                <Typography variant="h5" component="h3" className="mb-4 text-gray-800 font-semibold">
                  Part {part.part}
                </Typography>
                {part.questionanswer.map((qa, qaIndex) => (
                  <div key={qaIndex} className="mb-4">
                    {Object.entries(qa).map(([question, answer]) => (
                      <div key={question} className="mb-2">
                        <Typography variant="subtitle1" className="font-medium text-gray-800">
                          {question}
                        </Typography>
                        <Typography variant="body1" className="text-gray-700">
                          {answer}
                        </Typography>
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
              overallBand={result.ieltsInfo.overallBand}
              fluencyCoherence={result.ieltsInfo.sectionalBand.FluencyCoherence}
              lexicalResource={result.ieltsInfo.sectionalBand.LexicalResource}
              grammaticalRangeAccuracy={result.ieltsInfo.sectionalBand.GrammaticalRangeAccuracy}
              pronunciation={result.ieltsInfo.sectionalBand.Pronunciation}
              feedback={result.ieltsInfo.feedback}
              mistakes={result.ieltsInfo.mistakes}
            />
          </div>
          <div className="text-gray-500 flex items-center justify-end">
            <AccessTimeIcon className="mr-1" />
            <Typography variant="body2">
              Test taken on {new Date(createdAt).toLocaleString()}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingResults;