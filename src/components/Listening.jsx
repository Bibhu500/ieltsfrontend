import { useState, useEffect } from 'react';

// Sample data
const sampleData = [
  {
    part: 1,
    instructions: 'Instructions for Part 1: Listen to the audio and answer the following multiple-choice questions.',
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'What is the speaker\'s name?',
        options: ['John', 'Mary', 'David', 'Emily'],
        answer: 'David',
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'What was the main topic of the speech?',
        options: ['Climate Change', 'Economic Growth', 'Political Reforms', 'Education'],
        answer: 'Climate Change',
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'Which country was mentioned as an example of successful environmental policies?',
        options: ['USA', 'Canada', 'Germany', 'Japan'],
        answer: 'Germany',
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: 'What was the primary cause of climate change mentioned in the speech?',
        options: ['Deforestation', 'Greenhouse Gas Emissions', 'Overpopulation', 'Pollution'],
        answer: 'Greenhouse Gas Emissions',
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: 'Which sector was cited as the largest contributor to greenhouse gas emissions?',
        options: ['Transportation', 'Agriculture', 'Energy', 'Industrial Processes'],
        answer: 'Energy',
      },
      {
        id: 6,
        type: 'multiple-choice',
        question: 'According to the speaker, what is the most effective way to reduce greenhouse gas emissions?',
        options: ['Switching to Renewable Energy', 'Planting More Trees', 'Reducing Meat Consumption', 'Improving Public Transportation'],
        answer: 'Switching to Renewable Energy',
      },
      {
        id: 7,
        type: 'multiple-choice',
        question: 'Which international agreement on climate change was mentioned in the speech?',
        options: ['Kyoto Protocol', 'Paris Agreement', 'Copenhagen Accord', 'Rio Declaration'],
        answer: 'Paris Agreement',
      },
      {
        id: 8,
        type: 'multiple-choice',
        question: 'What was the speaker\'s opinion on the role of individuals in addressing climate change?',
        options: ['Individuals have no impact', 'Individuals can make a significant difference', 'Individual efforts are futile', 'Individuals should rely on governments'],
        answer: 'Individuals can make a significant difference',
      },
      {
        id: 9,
        type: 'multiple-choice',
        question: 'Which renewable energy source was highlighted as the most promising?',
        options: ['Solar Power', 'Wind Power', 'Hydroelectric Power', 'Geothermal Energy'],
        answer: 'Solar Power',
      },
      {
        id: 10,
        type: 'multiple-choice',
        question: 'According to the speaker, what is the biggest obstacle to transitioning to renewable energy sources?',
        options: ['Cost', 'Technology Limitations', 'Political Resistance', 'Public Awareness'],
        answer: 'Political Resistance',
      },
    ],
    audioPath: '/path/to/audio/file/part1.mp3',
  },
  {
    part: 2,
    instructions: 'Instructions for Part 2: Listen to the audio and fill in the blanks.',
    questions: [
      {
        id: 11,
        type: 'fill-in-the-blank',
        question: 'The meeting will be held on _____ at 2:00 PM.',
        answer: 'Monday',
      },
      {
        id: 12,
        type: 'fill-in-the-blank',
        question: 'The project deadline is _____ weeks from today.',
        answer: '6',
      },
      {
        id: 13,
        type: 'fill-in-the-blank',
        question: 'The company\'s new product is called _____.',
        answer: 'SmartWatch',
      },
      {
        id: 14,
        type: 'multiple-choice',
        question: 'What is the main purpose of the meeting?',
        options: ['Discuss Budget', 'Review Project Progress', 'Team Building', 'Product Launch'],
        answer: 'Review Project Progress',
      },
      {
        id: 15,
        type: 'multiple-choice',
        question: 'Who will be leading the meeting?',
        options: ['John Smith', 'Emily Johnson', 'David Lee', 'Sarah Williams'],
        answer: 'John Smith',
      },
      {
        id: 16,
        type: 'fill-in-the-blank',
        question: 'The project is expected to be completed by _____.',
        answer: 'June 30th',
      },
      {
        id: 17,
        type: 'multiple-choice',
        question: 'What is the estimated budget for the project?',
        options: ['$50,000', '$75,000', '$100,000', '$125,000'],
        answer: '$100,000',
      },
      {
        id: 18,
        type: 'fill-in-the-blank',
        question: 'The project manager\'s name is _____.',
        answer: 'Sarah Johnson',
      },
      {
        id: 19,
        type: 'multiple-choice',
        question: 'Which department is responsible for the project\'s marketing strategy?',
        options: ['Sales', 'Marketing', 'Product Development', 'Finance'],
        answer: 'Marketing',
      },
      {
        id: 20,
        type: 'fill-in-the-blank',
        question: 'The meeting will be held in the _____ conference room.',
        answer: 'Main',
      },
    ],
    audioPath: '/path/to/audio/file/part2.mp3',
  },
  {
    part: 3,
    instructions: 'Instructions for Part 3: Listen to the audio and select the correct options from the checkboxes.',
    questions: [
      {
        id: 21,
        type: 'checkbox',
        question: 'Which of the following items are on the shopping list?',
        options: ['Apples', 'Oranges', 'Bananas', 'Grapes', 'Strawberries'],
        answers: ['Apples', 'Bananas', 'Grapes'],
      },
      {
        id: 22,
        type: 'fill-in-the-blank',
        question: 'The grocery store is located on _____ Street.',
        answer: 'Main',
      },
      {
        id: 23,
        type: 'multiple-choice',
        question: 'What is the estimated total cost of the shopping list?',
        options: ['$20', '$35', '$45', '$60'],
        answer: '$45',
      },
      {
        id: 24,
        type: 'checkbox',
        question: 'Which of the following items need to be purchased from the pharmacy?',
        options: ['Aspirin', 'Bandages', 'Cough Syrup', 'Vitamins', 'Shampoo'],
        answers: ['Bandages', 'Cough Syrup', 'Vitamins'],
      },
      {
        id: 25,
        type: 'multiple-choice',
        question: 'How will the items be paid for?',
        options: ['Cash', 'Credit Card', 'Debit Card', 'Check'],
        answer: 'Debit Card',
      },
      {
        id: 26,
        type: 'checkbox',
        question: 'Which of the following items need to be purchased from the hardware store?',
        options: ['Hammer', 'Nails', 'Screwdriver', 'Saw', 'Paint Brushes'],
        answers: ['Nails', 'Screwdriver', 'Paint Brushes'],
      },
      {
        id: 27,
        type: 'fill-in-the-blank',
        question: 'The hardware store is located _____ blocks from the grocery store.',
        answer: '3',
      },
      {
        id: 28,
        type: 'multiple-choice',
        question: 'Which mode of transportation will be used for the shopping trip?',
        options: ['Car', 'Bus', 'Walking', 'Bicycle'],
        answer: 'Car',
      },
      {
        id: 29,
        type: 'checkbox',
        question: 'Which of the following items need to be purchased from the pet store?',
        options: ['Dog Food', 'Cat Litter', 'Fish Tank', 'Bird Seed', 'Hamster Cage'],
        answers: ['Dog Food', 'Cat Litter', 'Bird Seed'],
      },
      {
        id: 30,
        type: 'fill-in-the-blank',
        question: 'The pet store is located _____ miles from the grocery store.',
        answer: '2',
      },
    ],
    audioPath: '/path/to/audio/file/part3.mp3',
  },
  {
    part: 4,
    instructions: 'Instructions for Part 4: Listen to the audio and answer the following questions.',
    questions: [
      {
        id: 31,
        type: 'multiple-choice',
        question: 'What is the main topic of the lecture?',
        options: ['History of Art', 'Renaissance Painters', 'Modern Art Techniques', 'Art Appreciation'],
        answer: 'Renaissance Painters',
      },
      {
        id: 32,
        type: 'fill-in-the-blank',
        question: 'The lecture focuses on the works of _____ and _____.',
        answer: 'Michelangelo, Leonardo da Vinci',
      },
      {
        id: 33,
        type: 'multiple-choice',
        question: 'Which famous painting was discussed in detail?',
        options: ['Mona Lisa', 'The Last Supper', 'The Sistine Chapel', 'The Birth of Venus'],
        answer: 'The Last Supper',
      },
      {
        id: 34,
        type: 'checkbox',
        question: 'Which of the following techniques were mentioned as being used by Renaissance painters?',
        options: ['Chiaroscuro', 'Perspective', 'Oil Paints', 'Fresco', 'Watercolors'],
        answers: ['Chiaroscuro', 'Perspective', 'Oil Paints', 'Fresco'],
      },
      {
        id: 35,
        type: 'fill-in-the-blank',
        question: 'The lecture mentioned that the Renaissance period began in _____ century.',
        answer: '15th',
      },
      {
        id: 36,
        type: 'multiple-choice',
        question: 'Which city was considered the center of the Renaissance art movement?',
        options: ['Rome', 'Florence', 'Venice', 'Milan'],
        answer: 'Florence',
      },
      {
        id: 37,
        type: 'fill-in-the-blank',
        question: 'The lecture mentioned that _____ was a patron of the arts during the Renaissance.',
        answer: 'the Medici family',
      },
      {
        id: 38,
        type: 'multiple-choice',
        question: 'Which of the following artists was known for his scientific approach to art?',
        options: ['Raphael', 'Michelangelo', 'Leonardo da Vinci', 'Botticelli'],
        answer: 'Leonardo da Vinci',
      },
      {
        id: 39,
        type: 'checkbox',
        question: 'Which of the following artistic techniques were discussed in relation to Michelangelo\'s work?',
        options: ['Fresco Painting', 'Sculpture', 'Oil Painting', 'Engraving', 'Mosaic'],
        answers: ['Fresco Painting', 'Sculpture'],
      },
      {
        id: 40,
        type: 'fill-in-the-blank',
        question: 'The lecture mentioned that the Mona Lisa was painted by _____ around the year _____.',
        answer: 'Leonardo da Vinci, 1503',
      },
    ],
    audioPath: '/path/to/audio/file/part4.mp3',
  },
];


const IELTSListeningTest = () => {
  const [userAnswers, setUserAnswers] = useState({});
  const [timer, setTimer] = useState(null);
  const [timerId, setTimerId] = useState(null);
  const [score, setScore] = useState(0);
  const [isTestSubmitted, setIsTestSubmitted] = useState(false);

  useEffect(() => {
    const id = startTimer();
    setTimerId(id);
    return () => clearInterval(id);
  }, []);

  const startTimer = () => {
    const totalTime = 30 * 60; // 30 minutes in seconds
    let timeRemaining = totalTime;
    const id = setInterval(() => {
      timeRemaining--;
      const minutes = Math.floor(timeRemaining / 60);
      const seconds = timeRemaining % 60;
      setTimer(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
      if (timeRemaining === 0) {
        clearInterval(id);
        handleSubmit();
      }
    }, 1000);
    return id;
  };

  const handleAnswerChange = (questionId, answer) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleSubmit = () => {
    clearInterval(timerId);

    let score = 0;
    sampleData.forEach((part) => {
      part.questions.forEach((question) => {
        if (question.type === 'multiple-choice' || question.type === 'fill-in-the-blank') {
          if (userAnswers[question.id] === question.answer) {
            score++;
          }
        } else if (question.type === 'checkbox') {
          const userAnswersForQuestion = userAnswers[question.id] || [];
          if (userAnswersForQuestion.length === question.answers.length && userAnswersForQuestion.every((answer) => question.answers.includes(answer))) {
            score++;
          }
        }
      });
    });
    setScore(score);
    setIsTestSubmitted(true);
  };

  return (
    <div className="ielts-listening-test container mx-auto px-4 py-8">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">IELTS Listening Test</h1>
        <div className="timer text-lg font-semibold">{timer}</div>
      </div>
      {sampleData.map((part, index) => (
        <div key={index} className={`part mb-8 ${index === 0 ? '' : 'mt-8'}`}>
          <div className="instructions mb-4">
            <h2 className="text-xl font-semibold">Part {part.part}</h2>
            <p>{part.instructions}</p>
          </div>
          <div className="questions">
            {part.questions.map((question) => (
              <div key={question.id} className="question mb-4">
                <h3 className="text-lg font-semibold">{question.question}</h3>
                {question.type === 'multiple-choice' && (
                  <div className="options">
                    {question.options.map((option, index) => (
                      <div key={index} className="option">
                        <input
                          type="radio"
                          id={`question-${question.id}-option-${index}`}
                          name={`question-${question.id}`}
                          value={option}
                          checked={userAnswers[question.id] === option}
                          onChange={() => handleAnswerChange(question.id, option)}
                          disabled={isTestSubmitted}
                          className={isTestSubmitted ? (option === question.answer ? 'text-green-500' : userAnswers[question.id] === option ? 'text-red-500' : '') : ''}
                        />
                        <label htmlFor={`question-${question.id}-option-${index}`} className={isTestSubmitted ? (option === question.answer ? 'text-green-500' : userAnswers[question.id] === option ? 'text-red-500' : '') : ''}>{option}</label>
                      </div>
                    ))}
                  </div>
                )}
                {question.type === 'fill-in-the-blank' && (
  <div className="fill-in-the-blank">
    <input
      type="text"
      value={userAnswers[question.id] || ''}
      onChange={(e) => handleAnswerChange(question.id, e.target.value)}
      disabled={isTestSubmitted}
      className={isTestSubmitted ? (userAnswers[question.id] === question.answer ? 'text-green-500' : 'text-red-500') : ''}
    />
    {isTestSubmitted && (
      <div className="answer-text text-green-500">Correct Answer: {question.answer}</div>
    )}
  </div>
)}
                {question.type === 'checkbox' && (
                  <div className="options">
                    {question.options.map((option, index) => (
                      <div key={index} className="option">
                        <input
                          type="checkbox"
                          id={`question-${question.id}-option-${index}`}
                          value={option}
                          checked={(userAnswers[question.id] || []).includes(option)}
                          onChange={(e) => {
                            const isChecked = e.target.checked;
                            const answer = e.target.value;
                            const updatedAnswers = isChecked
                              ? [...(userAnswers[question.id] || []), answer]
                              : (userAnswers[question.id] || []).filter((item) => item !== answer);
                            handleAnswerChange(question.id, updatedAnswers);
                          }}
                          disabled={isTestSubmitted}
                          className={isTestSubmitted ? (question.answers.includes(option) ? 'text-green-500' : (userAnswers[question.id] || []).includes(option) ? 'text-red-500' : '') : ''}
                        />
                        <label htmlFor={`question-${question.id}-option-${index}`} className={isTestSubmitted ? (question.answers.includes(option) ? 'text-green-500' : (userAnswers[question.id] || []).includes(option) ? 'text-red-500' : '') : ''}>{option}</label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <audio src={part.audioPath} controls></audio>
        </div>
      ))}
      <button
        className="submit-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSubmit}
        disabled={isTestSubmitted}
      >
        Submit
      </button>
      {isTestSubmitted && <div className="score">Your score: {score} / 40</div>}
    </div>
  );
};

export default IELTSListeningTest;  