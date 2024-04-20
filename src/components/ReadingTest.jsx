import React, { useState, useEffect } from 'react';

const IELTSReadingTest = () => {
  const [passages, setPassages] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timer, setTimer] = useState(2400); // 40 minutes in seconds
  const [isTestStarted, setIsTestStarted] = useState(false);

  useEffect(() => {
    const data = {
      data: [
        {
          _id: '6613be86c124c01fd0ceddcf',
          set_id: 3,
          passageTitle: 'Amazon Rainforest',
          passage:
            'The Amazon Rainforest, often referred to as the \'Lungs of the Earth,\' is the largest tropical rainforest in the world, covering over 5.5 million square kilometers. It spans nine countries in South America, including Brazil, Peru, Colombia, and Venezuela. The Amazon is home to an incredible diversity of flora and fauna, with millions of species of plants, animals, and insects yet to be discovered. The rainforest plays a crucial role in regulating the Earth\'s climate by absorbing carbon dioxide and producing oxygen through photosynthesis. It also helps maintain global biodiversity and influences rainfall patterns across the planet. However, deforestation, primarily for agriculture, logging, and infrastructure development, poses a significant threat to the Amazon ecosystem and its indigenous communities.',
          allQuestionsAndAnswers: [
            {
              _id: 1,
              questionType: 'multiple_choice',
              questionText: 'Which continent is the Amazon Rainforest located in?',
              options: ['Africa', 'South America', 'Asia', 'Australia'],
              answer: ['South America'],
            },
            {
              _id: 2,
              testSetId: 3,
              questionType: 'fill_in_the_blank',
              questionText: 'The Amazon Rainforest spans over __ countries in South America.',
              answer: ['nine'],
            },
            {
              _id: 3,
              questionType: 'multiple_answer',
              questionText: 'What are some activities contributing to deforestation in the Amazon Rainforest?',
              options: ['Mining', 'Agriculture', 'Logging', 'Tourism'],
              answer: ['Agriculture', 'Logging'],
            },
          ],
        },
        {
          _id: '6613be86c124c01fd0ceddd0',
          set_id: 4,
          passageTitle: 'Mount Everest',
          passage:
            'Mount Everest, located in the Himalayas on the border between Nepal and China, is the tallest mountain in the world, with a peak that reaches 8,848 meters above sea level. It is a part of the Seven Summits, the highest peaks on each of the seven continents. Mount Everest has been a fascination for adventurers and mountaineers for decades, with thousands attempting to reach its summit every year. However, climbing Everest is not without risks. The extreme altitude, harsh weather conditions, and treacherous terrain make it one of the most dangerous mountains to climb. Despite the challenges, reaching the summit of Mount Everest remains a pinnacle achievement for many climbers, symbolizing the triumph of human determination and endurance.',
          allQuestionsAndAnswers: [
            {
              _id: 1,
              questionType: 'multiple_choice',
              questionText: 'Where is Mount Everest located?',
              options: ['Europe', 'Asia', 'South America', 'Africa'],
              answer: ['Asia'],
            },
            {
              _id: 2,
              testSetId: 4,
              questionType: 'fill_in_the_blank',
              questionText: 'Mount Everest is the tallest mountain in the world, reaching __ meters above sea level.',
              answer: ['8,848'],
            },
            {
              _id: 3,
              questionType: 'multiple_answer',
              questionText: 'What are some challenges faced by climbers attempting to summit Mount Everest?',
              options: ['Extreme altitude', 'Harsh weather conditions', 'Smooth terrain', 'Abundant resources'],
              answer: ['Extreme altitude', 'Harsh weather conditions'],
            },
          ],
        },
        {
          _id: '6613be86c124c01fd0ceddce',
          set_id: 2,
          passageTitle: 'Great Barrier Reef, Australia',
          passage:
            'The Great Barrier Reef is the worlds largest coral reef system, composed of over 2,900 individual reefs and 900 islands stretching for over 2,300 kilometers over an area of approximately 344,400 square kilometers. The reef is located in the Coral Sea, off the coast of Queensland, Australia. It is home to a diverse range of marine life, including over 1,500 species of fish, 411 types of hard coral, and countless other organisms.The Great Barrier Reef is not only a UNESCO World Heritage Site but also one of the seven natural wonders of the world. It is a popular destination for tourists, divers, and researchers alike. However, the reef faces numerous threats, including climate change, pollution, and overfishing, which have led to coral bleaching and degradation of marine habitats.',
          allQuestionsAndAnswers: [
            {
              _id: 1,
              questionType: 'multiple_choice',
              questionText: 'Where is the Great Barrier Reef located?',
              options: ['Brazil', 'Australia', 'Thailand', 'South Africa'],
              answer: ['Australia'],
            },
            {
              _id: 2,
              testSetId: 2,
              questionType: 'fill_in_the_blank',
              questionText: 'The Great Barrier Reef is composed of over __ individual reefs.',
              answer: ['2,900'],
            },
            {
              _id: 3,
              questionType: 'multiple_answer',
              questionText: 'What are some threats to the Great Barrier Reef?',
              options: ['Climate change', 'Overfishing', 'Deforestation', 'Volcanic eruptions'],
              answer: ['Climate change', 'Overfishing'],
            },
          ],
        },
      ],
    };

    setPassages(data.data);
  }, []);

  useEffect(() => {
    let interval;
    if (isTestStarted) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTestStarted]);

  const handleAnswerChange = (questionId, option) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option,
    }));
  };

  const handleTestStart = () => {
    setIsTestStarted(true);
  };

  const handleTestSubmit = () => {
    console.log('Submitted answers:', selectedAnswers);
    // TODO: Implement submission to the API
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-8">IELTS Reading Test</h1>
        {isTestStarted ? (
          <>
            <div className="mb-8 text-right">
              <span className="text-gray-500">Time Remaining:</span> {formatTime(timer)}
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                {passages[currentQuestionIndex]?.passageTitle}
              </h2>
              <p>{passages[currentQuestionIndex]?.passage}</p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">
                Question {currentQuestionIndex + 1}
              </h3>
              <p>{passages[currentQuestionIndex]?.allQuestionsAndAnswers[0].questionText}</p>
              <div className="mt-4">
                {passages[currentQuestionIndex]?.allQuestionsAndAnswers[0].options.map((option, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="radio"
                      id={`option-${index}`}
                      name={`question-${currentQuestionIndex}`}
                      value={option}
                      checked={
                        selectedAnswers[
                          passages[currentQuestionIndex]?.allQuestionsAndAnswers[0]._id
                        ] === option
                      }
                      onChange={() =>
                        handleAnswerChange(
                          passages[currentQuestionIndex]?.allQuestionsAndAnswers[0]._id,
                          option
                        )
                      }
                      className="mr-2"
                    />
                    <label htmlFor={`option-${index}`}>{option}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setCurrentQuestionIndex((prevIndex) => prevIndex - 1)}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setCurrentQuestionIndex((prevIndex) => prevIndex + 1)}
                disabled={currentQuestionIndex === passages.length - 1}
              >
                Next
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleTestSubmit}
              >
                Submit Test
              </button>
            </div>
          </>
        ) : (
          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleTestStart}
            >
              Start Test
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default IELTSReadingTest;