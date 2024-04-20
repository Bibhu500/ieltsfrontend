import React, { useState, useEffect } from 'react';
import { Button, Typography, Box, Checkbox, Radio, TextField } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

import axios from "axios";

const IELTSReadingTest = () => {
  const [passage, setPassage] = useState([]);
  const [currentPart, setCurrentPart] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timer, setTimer] = useState(2400); // 40 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState(() => {
    // Retrieve saved answers from localStorage, if available
    const savedAnswers = localStorage.getItem('selectedAnswers');
    return savedAnswers ? JSON.parse(savedAnswers) : [];
  });
  const [showInstructions, setShowInstructions] = useState(true);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const fetchPassageData = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve the token from local storage
        const response = await axios.get('http://localhost:5000/api/reading/', {
          headers: {
            Authorization: `Bearer ${token}`, // Send the token in the Authorization header
          },
        });
        setPassage(response.data.data);
      } catch (error) {
        console.error('Error fetching passage data:', error);
      }
    };
  
    fetchPassageData();
  }, []);

  useEffect(() => {
    let interval = null;
    if (isActive && !showInstructions) {
      interval = setInterval(() => {
        setTimer(timer => timer - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, showInstructions]);

  useEffect(() => {
    // Save the selected answers to localStorage whenever they change
    localStorage.setItem('selectedAnswers', JSON.stringify(selectedAnswers));
  }, [selectedAnswers]);

  const handleStartTest = () => {
    setIsActive(true);
    setSelectedAnswers([]);
    setShowInstructions(false);
  };

  const handleExitTest = () => {
    setIsActive(false);
    setTimer(2400);
    setCurrentPart(0);
    setScore(0);
    setSelectedAnswers([]);
    setShowResult(false);
    // Clear the saved answers from localStorage
    localStorage.removeItem('selectedAnswers');
    setShowInstructions(true); // Display instructions
  };

  const handleStartNewTest = () => {
  setIsActive(false);
  setTimer(2400);
  setCurrentPart(0);
  setSelectedAnswers([]);
  setScore(0);
  setShowResult(false);
  localStorage.removeItem('selectedAnswers');
  setShowInstructions(false);
  setIsActive(true);
};

  const calculateScore = async () => {
    let correctAnswers = 0;
    const userAnswers = passage.map((part, index) => {
      const partAnswers = part.allQuestionsAndAnswers.map((question) => {
        const userAnswer = selectedAnswers[index]?.[question._id];
        let isCorrect = false;
        if (
          (question.questionType === 'multiple_choice' &&
            question.answer[0] === userAnswer) ||
          (question.questionType === 'fill_in_the_blank' &&
            question.answer[0] === userAnswer) ||
          (question.questionType === 'multiple_answer' &&
            question.answer.every((option) =>
              (selectedAnswers[index]?.[question._id] || []).includes(option)
            ))
        ) {
          correctAnswers++;
          isCorrect = true;
        }
        return {
          question,
          userAnswer,
          isCorrect,
        };
      });
      return partAnswers;
    });
    const totalQuestions = passage.reduce((total, part) => total + part.allQuestionsAndAnswers.length, 0);
    const total_score = ((correctAnswers/totalQuestions)*10).toFixed(2);
    setScore(total_score);
    setShowResult(true);
    setUserAnswers(userAnswers);
    setIsActive(false); // Stop the timer

    const payload = {
      passages: passage,
      results: {
        total_score,
        userAnswers
      }
    }

    console.log(payload);
    const token = localStorage.getItem("token");
    const response = await axios.post("http://localhost:5000/api/reading/saveResult", payload, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    console.log(response);
  };

  const handleNextPart = () => {
    setCurrentPart(currentPart + 1);
  };

  const handlePreviousPart = () => {
    setCurrentPart(currentPart - 1);
  };

  const handleAnswerChange = (questionId, value) => {
    setSelectedAnswers(prevState => {
      const newState = [...prevState];
      newState[currentPart] = {
        ...(newState[currentPart] || {}),
        [questionId]: value,
      };
      return newState;
    });
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">IELTS Reading Test</h1>
        {isActive ? (
          <div className="flex items-center">
            <span className="mr-4">Time remaining: {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, '0')}</span>
            <Button
              variant="contained"
              color="error"
              onClick={calculateScore}
            >
              Submit Test
            </Button>
          </div>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={handleStartTest}
            disabled={showInstructions || showResult}
          >
            Start Test
          </Button>
        )}
      </header>

      {showInstructions && (
        <div className="flex-1 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-lg max-w-md">
            <Typography variant="h4" fontWeight="bold" mb={4}>
              Instructions
            </Typography>
            <Typography mb={4}>
              Welcome to the IELTS Reading Test! This test is designed to assess
              your reading comprehension skills. You will have 40 minutes to
              complete the test, which consists of three passages and nine
              questions.
            </Typography>
            <Typography mb={4}>
              Read each passage carefully and answer the corresponding
              questions. You can navigate between the passages using the
              "Previous Part" and "Next Part" buttons at the bottom of the
              screen.
            </Typography>
            <Typography mb={4}>
              When you're ready, click the "Start Test" button to begin the
              timer and start the test.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleStartTest}
            >
              Start Test
            </Button>
          </div>
        </div>
      )}

      {!showResult && !showInstructions && passage.length > 0 && (
        <div className="flex-1 grid grid-cols-2 gap-8 p-8">
          <div>
            <Typography variant="h4" fontWeight="bold" mb={4}>
              Part {currentPart + 1}
            </Typography>
            <Typography variant="subtitle1" mb={4}>
              Read the text below and answer questions {(currentPart * 3) + 1}-
              {(currentPart * 3) + 3}
            </Typography>
            <Box className="bg-gray-200 p-4 rounded">
              <Typography variant="h5" fontWeight="bold" mb={2}>
                {passage[currentPart].passageTitle}
              </Typography>
              <Typography>{passage[currentPart].passage}</Typography>
            </Box>
          </div>
          <div>
            <Typography variant="h4" fontWeight="bold" mb={4}>
              Questions
            </Typography>
            {passage[currentPart].allQuestionsAndAnswers.map(question => (
              <Box key={question._id} className="bg-gray-200 p-4 rounded mb-4">
                <Typography variant="h5" fontWeight="bold" mb={2}>
                  Question {question._id}
                </Typography>
                <Typography>{question.questionText}</Typography>
                {isActive && (
                  <>
                    {question.questionType === 'multiple_choice' && (
  <div>
    {question.options.map((option, index) => (
      <Box key={index} display="flex" alignItems="center" mb={2}>
        <Radio
          checked={selectedAnswers[currentPart]?.[question._id] === option}
          onChange={() => handleAnswerChange(question._id, option)}
        />
        <Typography>{option}</Typography>
      </Box>
    ))}
  </div>
)}
                    {question.questionType === 'fill_in_the_blank' && (
                      <TextField
                        variant="outlined"
                        value={
                          selectedAnswers[currentPart]?.[question._id] || ''
                        }
                        onChange={(e) =>
                          handleAnswerChange(question._id, e.target.value)
                        }
                      />
                    )}
                    {question.questionType === 'multiple_answer' && (
                      <div>
                        {question.options.map((option, index) => (
                          <Box key={index} display="flex" alignItems="center" mb={2}>
                            <Checkbox
                              checked={
                                (selectedAnswers[currentPart]?.[question._id] ||
                                  []).includes(option)
                              }
                              onChange={() => {
                                const selectedOptions =
                                  selectedAnswers[currentPart]?.[question._id] ||
                                  [];
                                const newOptions = selectedOptions.includes(
                                  option
                                )
                                  ? selectedOptions.filter(opt => opt !== option)
                                  : [...selectedOptions, option];
                                handleAnswerChange(question._id, newOptions);
                              }}
                            />
                            <Typography>{option}</Typography>
                          </Box>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </Box>
            ))}
          </div>
        </div>
      )}
{showResult && (
  <div className="flex-1 flex flex-col justify-center items-center">
    <Box
      className="bg-white p-8 rounded shadow-lg max-w-md"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={4}
    >
      <Typography variant="h4" fontWeight="bold">
        Test Result
      </Typography>
      <Box display="flex" alignItems="center" gap={2}>
        <CheckCircleIcon color="success" />
        <Typography variant="h5">
          Your score: {score} / 10
        </Typography>
      </Box>
      {userAnswers.map((partAnswers, partIndex) => (
        <div key={partIndex}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Part {partIndex + 1}
          </Typography>
          {partAnswers.map((answer, answerIndex) => (
            <Box key={answerIndex} mb={2}>
              <Typography>
                <strong>Question {answer.question._id}:</strong> {answer.question.questionText}
              </Typography>
              <Typography>
                <strong>Correct Answer:</strong> {answer.question.answer.join(', ')}
              </Typography>
              <Typography
                color={answer.isCorrect ? 'green' : 'red'}
              >
                <strong>Your Answer:</strong> {Array.isArray(answer.userAnswer) ? answer.userAnswer.join(', ') : answer.userAnswer}
              </Typography>
            </Box>
          ))}
        </div>
      ))}
      <Box display="flex" gap={2}>
        <Button
          variant="contained"
          color="error"
          onClick={handleExitTest}
          startIcon={<CancelIcon />}
        >
          Exit Test
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleStartNewTest}
          startIcon={<CheckCircleIcon />}
        >
          Start New Test
        </Button>
      </Box>
    </Box>
  </div>
)}

      <nav className="bg-blue-500 text-white flex justify-between p-4">
        <Button
          variant="contained"
          color="primary"
          onClick={handlePreviousPart}
          disabled={currentPart === 0 || !isActive}
        >
          Previous Part
        </Button>
        <Button
  variant="contained"
  color="primary"
  onClick={handleNextPart}
  disabled={currentPart === passage.length - 1 || !isActive || showInstructions}
>
  Next Part
</Button>
      </nav>
    </div>
  );
};

export default IELTSReadingTest;