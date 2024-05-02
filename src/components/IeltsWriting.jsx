import React, { useState, useEffect, useRef } from 'react';
import OpenAI from './OpenAI';
import ScoreCard from './ScoreCard';
import './Writing.css';
import axios from 'axios';
import questionstask2 from './questionstask2';

const IeltsWriting = () => {
  const [activeTest, setActiveTest] = useState(null);
  const [showInstructions, setShowInstructions] = useState(true);
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
  const [testResults, setTestResults] = useState({});
  const timerRef = useRef(null);

  const [userInput, setUserInput] = useState('');
  const [responses, setResponses] = useState([]);
  const [randomQuestion, setRandomQuestion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState(null);

  const systemprompt1 = `As an 10 years experienced IELTS examiner, 
        evaluate IELTS Writing task 1 essays based on four criteria—Task Achivement, Coherence and Cohesion, 
        Lexical Resource, and Grammatical Range & Accuracy—dividing each into sub-criteria scored 
        between 0 to 9 (multiples of 0.5). For Task Achievement,the two sub tasks assess if the essay fully addresses all task parts and 
        meets the 150-word minimum which gives 50-50% of bands 0-9 weightage each. Coherence and Cohesion evaluate logical paragraph organization and appropriate use 
        of cohesive devices. Lexical Resource considers the use of less common vocabulary, accurate synonyms without 
        repetition, spelling accuracy, and phrasal verb usage. Grammatical Range & Accuracy look at the variety of 
        complex structures, grammatical accuracy, and avoidance of word formation mistakes. Calculate the average 
        score for each criterion based on its sub-criteria score, then average these main criteria scores to derive 
        the essay's overall band score on a scale of 0 to 9, providing a comprehensive assessment of the essay's 
        quality across key writing aspects. Offer brief but concise feedback on strengths and weaknesses with justification reason of the sectional bands, correcting 
        any mistakes. Maintain alignment with official IELTS evaluation standards. Evaluate and send the response in 
        json as "ieltsinfo" ex- {"ieltsinfo": {"overallBand": 7, "sectionalBand": {"TaskAchievement": 8, "CoherenceCohesion": 7.5, "LexicalResource": 6.5, "GrammaticalRangeAccuracy": 6.5}, "feedback": "The essay provides a clear discussion of both sides of the argument, presenting reasons why wealthy nations should share their wealth with poorer nations while also acknowledging potential drawbacks. The ideas are well-developed and supported with relevant examples. However, there are some grammatical errors and awkward phrasings that slightly affect the overall coherence and clarity of the essay.", "mistakes": [{"mistake": "But their helping should only stop at providing such things as food and education because of the three following reasons.", "correction": "But their assistance should be limited to providing necessities such as food and education for three main reasons."}, {"mistake": "we can not look at, hear of, or talk about people who lack food, education, etc.", "correction": "we cannot ignore or remain indifferent to people who lack food, education, etc."}, {"mistake": "Sharing wealth with poorer nations is not only a good deed but is also a task .", "correction": "Sharing wealth with poorer nations is not only a moral obligation but also a responsibility."}, {"mistake": "Secondly, many nations in Africa and Asia are very very poor.", "correction": "Secondly, many nations in Africa and Asia are extremely impoverished."}, {"mistake": "Famine, diseases, crime and illiteracy are killing the citizens of these countries.", "correction": "Famine, diseases, crime, and illiteracy are plaguing the citizens of these countries."}, {"mistake": "In the contrary, many nations in Europe and, America are too rich.", "correction": "On the contrary, many nations in Europe and America are excessively wealthy."}, {"mistake": "this inequality will increase dramatically.", "correction": "this inequality will dramatically increase."}, {"mistake": "So, sharing wealth is an useful way to prevent people from that bad future.", "correction": "Thus, sharing wealth is a useful way to prevent such a bleak future."}, {"mistake": "Thirdly, although sharing wealth with poorer nations is very necessary but this help should only stop at providing such things as food, medicine and education.", "correction": "Thirdly, while sharing wealth with poorer nations is indeed necessary, this assistance should be limited to providing essentials such as food, medicine, and education."}, {"mistake": "Or else, poor nations may become dependent on the aid.", "correction": "Otherwise, poor nations may become dependent on foreign aid."}, {"mistake": "Moreover, rich nations can take advantage of sharing wealth to interfere with the governance of poor nations.", "correction": "Moreover, wealthy nations may exploit sharing wealth to interfere with the governance of poorer nations."}, {"mistake": "This can't be considered a humane action and should be prevented.", "correction": "Such actions cannot be considered humane and should be prevented."}, {"mistake": "In my opinion, sharing wealth with poorer nations has both a bad side and a good side.", "correction": "In my opinion, sharing wealth with poorer nations has both advantages and disadvantages."}, {"mistake": "What we have to do is avoiding its bad side and practicing its good side.", "correction": "We need to avoid the negative aspects and embrace the positive aspects of wealth sharing."}]}}. Here is the Question, Essay, and the picture description of the task which you have to evaluate and genrate the ieltsinfo json object for. match the description against the essay for a gunuine evalatuation:-`;

  const systemprompt2 = `As an 10 years experienced IELTS examiner, 
        evaluate IELTS essays based on four criteria—Task Response, Coherence and Cohesion, 
        Lexical Resource, and Grammatical Range & Accuracy—dividing each into sub-criteria scored 
        between 0 to 9 (multiples of 0.5). For Task Response, assess if the essay fully addresses all task parts and 
        meets the 250-word minimum. Coherence and Cohesion evaluate logical paragraph organization and appropriate use 
        of cohesive devices. Lexical Resource considers the use of less common vocabulary, accurate synonyms without 
        repetition, spelling accuracy, and phrasal verb usage. Grammatical Range & Accuracy look at the variety of 
        complex structures, grammatical accuracy, and avoidance of word formation mistakes. Calculate the average 
        score for each criterion based on its sub-criteria score, then average these main criteria scores to derive 
        the essay's overall band score on a scale of 0 to 9, providing a comprehensive assessment of the essay's 
        quality across key writing aspects. Offer brief but concise feedback on strengths and weaknesses with sectional band justification reason, correcting 
        any mistakes. Maintain alignment with official IELTS evaluation standards. Evaluate and send the response in 
        json as "ieltsinfo" ex- {"ieltsinfo": {"overallBand": 7, "sectionalBand": {"TaskResponse": 8, "CoherenceCohesion": 7.5, "LexicalResource": 6.5, "GrammaticalRangeAccuracy": 6.5}, "feedback": "The essay provides a clear discussion of both sides of the argument, presenting reasons why wealthy nations should share their wealth with poorer nations while also acknowledging potential drawbacks. The ideas are well-developed and supported with relevant examples. However, there are some grammatical errors and awkward phrasings that slightly affect the overall coherence and clarity of the essay.", "mistakes": [{"mistake": "But their helping should only stop at providing such things as food and education because of the three following reasons.", "correction": "But their assistance should be limited to providing necessities such as food and education for three main reasons."}, {"mistake": "we can not look at, hear of, or talk about people who lack food, education, etc.", "correction": "we cannot ignore or remain indifferent to people who lack food, education, etc."}, {"mistake": "Sharing wealth with poorer nations is not only a good deed but is also a task .", "correction": "Sharing wealth with poorer nations is not only a moral obligation but also a responsibility."}, {"mistake": "Secondly, many nations in Africa and Asia are very very poor.", "correction": "Secondly, many nations in Africa and Asia are extremely impoverished."}, {"mistake": "Famine, diseases, crime and illiteracy are killing the citizens of these countries.", "correction": "Famine, diseases, crime, and illiteracy are plaguing the citizens of these countries."}, {"mistake": "In the contrary, many nations in Europe and, America are too rich.", "correction": "On the contrary, many nations in Europe and America are excessively wealthy."}, {"mistake": "this inequality will increase dramatically.", "correction": "this inequality will dramatically increase."}, {"mistake": "So, sharing wealth is an useful way to prevent people from that bad future.", "correction": "Thus, sharing wealth is a useful way to prevent such a bleak future."}, {"mistake": "Thirdly, although sharing wealth with poorer nations is very necessary but this help should only stop at providing such things as food, medicine and education.", "correction": "Thirdly, while sharing wealth with poorer nations is indeed necessary, this assistance should be limited to providing essentials such as food, medicine, and education."}, {"mistake": "Or else, poor nations may become dependent on the aid.", "correction": "Otherwise, poor nations may become dependent on foreign aid."}, {"mistake": "Moreover, rich nations can take advantage of sharing wealth to interfere with the governance of poor nations.", "correction": "Moreover, wealthy nations may exploit sharing wealth to interfere with the governance of poorer nations."}, {"mistake": "This can't be considered a humane action and should be prevented.", "correction": "Such actions cannot be considered humane and should be prevented."}, {"mistake": "In my opinion, sharing wealth with poorer nations has both a bad side and a good side.", "correction": "In my opinion, sharing wealth with poorer nations has both advantages and disadvantages."}, {"mistake": "What we have to do is avoiding its bad side and practicing its good side.", "correction": "We need to avoid the negative aspects and embrace the positive aspects of wealth sharing."}]}}. Here is the Question and Essay which you have to evaluate and genrate the ieltsinfo json object for:-`;



  useEffect(() => {
    if (timeLeft === 0) {
      submitTest();
    }
  }, [timeLeft]);

  useEffect(() => {
    const fetchRandomQuestion = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/writing`,
          { type: 'Essay' },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const questionData = response.data;
        const randomIndex = Math.floor(Math.random() * questionstask2.length);
        setRandomQuestion(questionstask2[randomIndex]);
        setQuestionData(questionData);
      } catch (error) {
        console.error('Error fetching random question:', error);
      }
    };

    fetchRandomQuestion();
  }, []);

  const startTest = () => {
    setShowInstructions(false);
    setActiveTest('Writing Task 1');
    startTimer();
  };

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);
  };

  const exitTest = () => {
    clearInterval(timerRef.current);
    setActiveTest(null);
    setShowInstructions(true);
    setTimeLeft(3600);
    setTestResults({});
  };

  const submitTest = () => {
    clearInterval(timerRef.current);
    const writing1Result = document.getElementsByClassName('writing1-component')[0];
    const writing2Result = document.getElementsByClassName('writing2-component')[0];

    if (writing1Result) {
      writing1Result.dispatchEvent(new Event('submit'));
    }

    if (writing2Result) {
      writing2Result.dispatchEvent(new Event('submit'));
    }

    // Store the results in the testResults state
    const combinedResults = {
      writing1Result: writing1Result ? writing1Result.getResult() : null,
      writing2Result: writing2Result ? writing2Result.getResult() : null,
    };
    setTestResults(combinedResults);
    console.log(combinedResults);
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    try {
      setLoading(true);

      const wordCount = userInput.trim().split(/\s+/).length;
      const description = randomQuestion && randomQuestion.description ? randomQuestion.description : '';
      const prompt = `${systemprompt1} \n\nQuestion: ${randomQuestion}\n\nDescription:${description}\n\nEssay:${userInput}\n\nEssay WordCount: ${wordCount}`;

      const response = await OpenAI.post('/chat/completions', {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.1,
      });

      const result = JSON.parse(response.data.choices[0].message.content);
      setEvaluationResult(result);

      const newResponse = {
        question: randomQuestion,
        answer: result,
        wordCount: wordCount
      };
      setResponses([...responses, newResponse]);
      setUserInput('');
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.status === 429) {
        console.error('We have hit the rate limit. Please try again later.');
      } else {
        console.error('Error fetching data:', error);
      }
    }
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    try {
      setLoading(true);

      // Calculate word count
      const wordCount = userInput.trim().split(/\s+/).length;
      console.log(wordCount)

      // Concatenate systemPrompt, randomQuestion, essay, and word count
      const prompt = `${systemprompt2} ${randomQuestion}\n\n${userInput}\n\nWord Count: ${wordCount}`;

      const response = await OpenAI.post('/chat/completions', {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      });

      // Parse the response to extract evaluation results
      const result = JSON.parse(response.data.choices[0].message.content);
      setEvaluationResult(result);

      // Update responses state with the new response
      const newResponse = {
        question: randomQuestion,
        answer: result,
        wordCount: wordCount  // Add word count to the response object
      };
      setResponses([...responses, newResponse]);
      setUserInput('');
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.status === 429) {
        console.error('We have hit the rate limit. Please try again later.');
      } else {
        console.error('Error fetching data:', error);
      }
    }
  };

  return (
    <div className="ielts-writing-container min-h-screen bg-gray-100">
      {showInstructions ? (
        <div className="instructions-card bg-white p-8 rounded-lg shadow-lg mx-auto max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
          <p className="text-gray-800 mb-4">
            This is a full IELTS Writing Test with Task 1 and Task 2. You have 1 hour to complete the test.
          </p>
          <button
            onClick={startTest}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Start
          </button>
        </div>
      ) : (
        <>
          <nav className="navbar bg-indigo-600 text-white py-4 px-8 fixed top-0 left-0 right-0">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">IeltsWritingBoth</h1>
              <div className="timer text-lg">{formatTime(timeLeft)}</div>
              <div>
                <button
                  onClick={exitTest}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg mr-2"
                >
                  Exit the Test
                </button>
                <button
                  onClick={submitTest}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </nav>
          <div className="sidebar bg-gray-800 text-white py-8 fixed top-20 left-0 h-screen">
            <ul className="space-y-4 pl-4">
              <li
                onClick={() => setActiveTest('Writing Task 1')}
                className={`cursor-pointer ${activeTest === 'Writing Task 1' ? 'bg-gray-700' : ''} px-4 py-2 rounded-lg`}
              >
                Writing Task 1
              </li>
              <li
                onClick={() => setActiveTest('Writing Task 2')}
                className={`cursor-pointer ${activeTest === 'Writing Task 2' ? 'bg-gray-700' : ''} px-4 py-2 rounded-lg`}
              >
                Writing Task 2
              </li>
            </ul>
          </div>
          <div className="test-container ml-64 pt-20 p-8">
            {activeTest === 'Writing Task 1' && (
              <div className="writing1-component">
                <div className="flex justify-between">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800">Question:</h2>
                  <ScoreCard
                    overallBand={evaluationResult?.ieltsinfo.overallBand || 0}
                    taskResponse={evaluationResult?.ieltsinfo.sectionalBand.TaskAchievement || 0}
                    coherenceCohesion={evaluationResult?.ieltsinfo.sectionalBand.CoherenceCohesion || 0}
                    lexicalResource={evaluationResult?.ieltsinfo.sectionalBand.LexicalResource || 0}
                    grammaticalRangeAccuracy={evaluationResult?.ieltsinfo.sectionalBand.GrammaticalRangeAccuracy || 0}
                  />
                </div>
                <p className="text-lg text-gray-800">{randomQuestion && randomQuestion.text}</p>
                {/* Display image if available */}
                {randomQuestion && randomQuestion.image && (
                  <img
                    src={randomQuestion.image}
                    alt="Question Image"
                    className=" mx-auto flex justify-center mt-4 rounded-lg shadow-lg"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                )}
                <form onSubmit={handleSubmit} className="mb-8">
                  <textarea
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Write your essay here..."
                    className="w-full h-48 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100 text-gray-800 resize-none"
                  />
                  {/* Loading animation and text */}
                  {loading && (
                    <div className="flex items-center justify-center mt-2">
                      <div className="loader"></div>
                      <p className="ml-2">Analyzing...</p>
                    </div>
                  )}
                </form>
                {/* Display responses */}
                <div>
                  {responses.map((res, index) => (
                    <div key={index} className="mb-4 p-4 bg-gray-200 rounded-lg shadow">
                      {/* Render feedback */}
                      <p className="mt-4">
                        <strong>Feedback:</strong> {res.answer.ieltsinfo.feedback}
                      </p>
                      <p className="text-sm text-gray-500">Your essay word count: {res.wordCount}</p>
                      {/* Render mistakes and corrections */}
                      <div className="mt-4">
                        <h4 className="text-lg font-semibold mb-2 text-indigo-800">Mistakes and Corrections:</h4>
                        {res.answer.ieltsinfo.mistakes.map((mistake, idx) => (
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
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTest === 'Writing Task 2' && (
              <div className="writing2-component">
                <div className="flex justify-between">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800">Question:</h2>
                  <ScoreCard
                    overallBand={evaluationResult?.ieltsinfo.overallBand}
                    taskResponse={evaluationResult?.ieltsinfo.sectionalBand.TaskResponse}
                    coherenceCohesion={evaluationResult?.ieltsinfo.sectionalBand.CoherenceCohesion}
                    lexicalResource={evaluationResult?.ieltsinfo.sectionalBand.LexicalResource}
                    grammaticalRangeAccuracy={evaluationResult?.ieltsinfo.sectionalBand.GrammaticalRangeAccuracy}
                  />
                </div>
                <p className="text-lg text-gray-800">{randomQuestion}</p>
                <form onSubmit={handleSubmit2} className="mb-8">
                  <textarea
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Write your essay here..."
                    className="w-full h-48 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100 text-gray-800 resize-none"
                  />
                  {/* Loading animation and text */}
                  {loading && (
                    <div className="flex items-center justify-center mt-2">
                      <div className="loader"></div>
                      <p className="ml-2">Analyzing...</p>
                    </div>
                  )}
                </form>
                {/* Display responses */}
                <div>
                  {responses.map((res, index) => (
                    <div key={index} className="mb-4 p-4 bg-gray-200 rounded-lg shadow">
                      {/* Render feedback */}
                      <p className="mt-4">
                        <strong>Feedback:</strong> {res.answer.ieltsinfo.feedback}
                      </p>
                      <p className="text-sm text-gray-500">Your essay word count: {res.wordCount}</p>
                      {/* Render mistakes and corrections */}
                      <div className="mt-4">
                        <h4 className="text-lg font-semibold mb-2 text-indigo-800">Mistakes and Corrections:</h4>
                        {res.answer.ieltsinfo.mistakes.map((mistake, idx) => (
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
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};
export default IeltsWriting;