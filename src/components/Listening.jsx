import React, { useState, useEffect } from 'react';
import audioFile from '../images/audio1.mp3';

const questions = [
  {
    _id: 1,
    audioId: 1,
    testSetId: 1,
    questionType: 'multiple_choice',
    questionText: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Rome'],
  },
  {
    _id: 2,
    audioId: 1,
    testSetId: 1,
    questionType: 'fill_in_the_blank',
    questionText: 'The Eiffel Tower is located in ______.',
  },
  {
    _id: 3,
    audioId: 1,
    testSetId: 1,
    questionType: 'multiple_answer',
    questionText: 'Which of the following are rivers in France?',
    options: ['Seine', 'Rhone', 'Thames', 'Danube'],
  },
];

const correctAnswers = [
  {
    questionId: 1,
    answerText: 'Paris',
    isCorrect: true,
  },
  {
    questionId: 2,
    answerText: 'Paris',
    isCorrect: true,
  },
  {
    questionId: 3,
    answerText: 'Seine',
    isCorrect: true,
  },
  {
    questionId: 3,
    answerText: 'Rhone',
    isCorrect: true,
  },
];

const IELTSListeningTest = () => {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});

  const handleAnswerChange = (e, questionId) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: e.target.value,
    });
  };

  const handleMultipleAnswerChange = (e, questionId) => {
    const { value, checked } = e.target;
    setUserAnswers({
      ...userAnswers,
      [questionId]: {
        ...(userAnswers[questionId] || {}),
        [value]: checked,
      },
    });
  };

  useEffect(() => {
    const audio = document.getElementById('audioElement');
    const handleAudioPlay = () => setAudioPlaying(true);
    const handleAudioPause = () => setAudioPlaying(false);

    audio.addEventListener('play', handleAudioPlay);
    audio.addEventListener('pause', handleAudioPause);

    return () => {
      audio.removeEventListener('play', handleAudioPlay);
      audio.removeEventListener('pause', handleAudioPause);
    };
  }, []);

  const renderQuestion = () => {
    return questions.map((question, index) => (
      <div key={index} className="mb-4">
        <p className="font-bold">{question.questionText}</p>
        {question.questionType === 'multiple_choice' && (
          <div>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className="ml-4">
                <input
                  type="radio"
                  name={`question_${question._id}`}
                  value={option}
                  onChange={(e) => handleAnswerChange(e, question._id)}
                  className="mr-2"
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
        )}
        {question.questionType === 'fill_in_the_blank' && (
          <div className="ml-4">
            <input
              type="text"
              name={`question_${question._id}`}
              onChange={(e) => handleAnswerChange(e, question._id)}
              className="border border-gray-400 p-1 rounded-md"
            />
          </div>
        )}
        {question.questionType === 'multiple_answer' && (
          <div>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className="ml-4">
                <input
                  type="checkbox"
                  name={`question_${question._id}`}
                  value={option}
                  onChange={(e) => handleMultipleAnswerChange(e, question._id)}
                  className="mr-2"
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
        )}
      </div>
    ));
  };

  const handleSubmit = () => {
    const totalQuestions = questions.length;
    let correctCount = 0;

    questions.forEach((question) => {
      const userAnswer = userAnswers[question._id];
      const correctAnswer = correctAnswers.filter(
        (answer) => answer.questionId === question._id && answer.isCorrect
      );

      if (question.questionType === 'multiple_answer') {
        const userAnswerSet = new Set(Object.entries(userAnswer || {}).filter(([, value]) => value).map(([key]) => key));
        const correctAnswerSet = new Set(correctAnswer.map((answer) => answer.answerText));

        if (userAnswerSet.size === correctAnswerSet.size && [...userAnswerSet].every((value) => correctAnswerSet.has(value))) {
          correctCount++;
        }
      } else {
        const isCorrect = correctAnswer.some((answer) => answer.answerText === userAnswer);
        if (isCorrect) {
          correctCount++;
        }
      }
    });

    alert(`You scored ${correctCount} out of ${totalQuestions}`);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">IELTS Listening Sample 5. Section 1</h1>
      <p className="text-lg mb-4">
        This is the first section of IELTS Listening test #5. The Listening module consists of 4 sections and takes 40 minutes. Listen to the audio and answer the questions. As you finish, press 'check' and proceed to the next section.
      </p>
      <div className="mb-8">
        {audioPlaying ? <p>Audio is playing...</p> : <p>Audio not playing.</p>}
        <audio id="audioElement" controls className="mb-4">
          <source src={audioFile} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        {renderQuestion()}
      </div>
      <button onClick={handleSubmit} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Submit</button>
    </div>
  );
};

export default IELTSListeningTest;