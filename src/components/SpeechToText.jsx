import { useState, useEffect } from 'react';
import OpenAI from './OpenAI';
import EvaluationCard from './EvaluationCard';
import questionList from './SpeakingquestionList';

import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

import './Writing.css';

const getQuestions = () => {
  const randomIndex = Math.floor(Math.random() * questionList.length);
  return questionList[randomIndex];
};

const systemprompt = `You are an IELTS Speaking evaluator. Your task is to assess the given speaking responses according to the official IELTS band descriptors and provide a detailed evaluation in JSON format.

The evaluation should include the following:

1. Overall Band Score (from 0 to 9)
2. Sectional Band Scores for:
   - Fluency and Coherence (from 0 to 9)
   - Lexical Resource (from 0 to 9)
   - Grammatical Range and Accuracy (from 0 to 9)
   - Pronunciation (from 0 to 9)
3. A feedback paragraph summarizing the candidate's performance, areas for improvement, and noting any instances of non-responses or incomplete answers.
4. A list of specific mistakes with corrections (if any).

Strictly follow the IELTS band descriptors provided when assessing each criterion. Consider all aspects of the responses, including fluency, coherence, lexical range, grammatical accuracy, and pronunciation features.

If the user has not answered the question or the response is incomplete, identify this situation and adjust the evaluation to reflect the inability to assess certain criteria fully. This should be noted in the feedback section, emphasizing the importance of providing complete answers for a proper evaluation.

For Part 1 and Part 3, the response recording for each question is 15-20 seconds. An average person speaks about 110-150 words per minute, so the word count of answers for Part 1 and Part 3 questions should atleast be around 25-40 words for a good flow and speech evaluation. For Part 2, the speaking time is 2 minutes, so the answer should be atleast around 160-300 words on average.

The output should be a valid JSON object with the keys "overallBand", "sectionalBand", "feedback", and "mistakes" (if applicable).

Example Input:
[Speaker's responses for all IELTS Speaking questions]

Example Output:
{
  "ieltsInfo": {
    "overallBand": 7.5,
    "sectionalBand": {
      "FluencyCoherence": 8,
      "LexicalResource": 7,
      "GrammaticalRangeAccuracy": 7.5,
      "Pronunciation": 7
    },
    "feedback": "Your speaking performance demonstrates a high level of English proficiency, with excellent fluency and coherence. Your vocabulary range is extensive, and you use idiomatic expressions effectively. However, there are occasional grammatical errors and minor pronunciation issues that could be improved. Overall, you have a strong command of the language suitable for academic and professional contexts. [Note on non-responses or incomplete answers if applicable]",
    "mistakes": [
      {
        "mistake": "I would of gone to the party.",
        "correction": "I would have gone to the party."
      }
    ]
  }
}`;

const SpeechToText = () => {
  const [parts, setParts] = useState(getQuestions());
  const [currentPart, setCurrentPart] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [testStarted, setTestStarted] = useState(false);
  const [recognitionActive, setRecognitionActive] = useState(false);
  const [userName, setUserName] = useState('');
  const [recordingName, setRecordingName] = useState(false);
  const [preparationTime, setPreparationTime] = useState(60);
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState(null);
  const [nameRecordingTimeout, setNameRecordingTimeout] = useState(null);
  const [showResultButton, setShowResultButton] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [noSpeechDetected, setNoSpeechDetected] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showDoneButton, setShowDoneButton] = useState(false);
  const [part2RecordingTimeout, setPart2RecordingTimeout] = useState(null);
  const [initialParts, setInitialParts] = useState(getQuestions());
  

  // Helper functions
  const speakIntroduction = (introduction, callback) => {
    const introMsg = new SpeechSynthesisUtterance(introduction);
    introMsg.onend = callback;
    window.speechSynthesis.speak(introMsg);
  };

  const speakQuestion = (questionText) => {
    const msg = new SpeechSynthesisUtterance(questionText);
    msg.onend = () => testStarted && startAnswerRecording();
    window.speechSynthesis.speak(msg);
  };

  const speakNamePrompt = () => {
    const msg = new SpeechSynthesisUtterance(" May I know your full name please?");
    msg.onend = startNameRecording;
    window.speechSynthesis.speak(msg);
  };

  const speakThankYouMessage = () => {
    const msg = new SpeechSynthesisUtterance(
      `Thank you, for taking the IELTS Speaking Test. This concludes the test.`
    );
    window.speechSynthesis.speak(msg);
  };

  // Recording functions
  const startAnswerRecording = () => {
    if (!recognitionActive) {
      setIsRecording(true);
      setRecognitionActive(true);
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = 'en-US';
      recognition.continuous = true;
      recognition.interimResults = true;

      let finalTranscript = '';

      recognition.addEventListener('result', (event) => {
        let interimTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }

        const newParts = [...parts];
        newParts[currentPart].questions[currentQuestion].answer =
          finalTranscript + interimTranscript;
        setParts(newParts);
      });

      recognition.start();

      setShowDoneButton(true);

      if (parts[currentPart].part === 2) {
        startPart2Recording(recognition);
      }
    }
  };

  const deepCopy = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
  
    const copy = Array.isArray(obj) ? [] : {};
  
    for (let key in obj) {
      copy[key] = deepCopy(obj[key]);
    }
  
    return copy;
  };

  const startNameRecording = () => {
    setRecordingName(true);
    const newRecognition = new window.webkitSpeechRecognition();
    setRecognition(newRecognition);
    newRecognition.lang = 'en-US';
    newRecognition.continuous = false;
    newRecognition.interimResults = false;
    newRecognition.start();
    const timeout = setTimeout(() => {
      newRecognition.stop();
      setRecordingName(false);
      setNoSpeechDetected(true);
      handleCloseTest(); // This line calls handleCloseTest when no speech is detected
    }, 5000);
    setNameRecordingTimeout(timeout);
  
    newRecognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (transcript.trim() !== '') {
        setUserName(transcript);
        console.log(`User Name: ${transcript}`);
        newRecognition.stop();
        clearTimeout(timeout);
        setRecordingName(false);
        startTest();
      }
    };
  };

  const startPart2Recording = (recognition) => {
    const preparationTimer = setInterval(() => {
      if (preparationTime === 0) {
        handleDoneRecordingForPart2(preparationTimer);
      } else {
        setPreparationTime((prev) => prev - 1);
      }
    }, 1000);

    const part2RecordingTimeout = setTimeout(() => {
      handleDoneRecordingForPart2(preparationTimer);
    }, 120000); // 120000 milliseconds = 2 minutes

    setPart2RecordingTimeout(part2RecordingTimeout);
  };

  const handleDoneRecordingForPart2 = (preparationTimer) => {
    clearInterval(preparationTimer);
    clearTimeout(part2RecordingTimeout);
  
    recognition.stop();
    setIsRecording(false);
    setRecognitionActive(false);
    setShowDoneButton(false);
  
    console.log("Question:", parts[currentPart].questions[currentQuestion].text);
    console.log("Answer:", parts[currentPart].questions[currentQuestion].answer);
  
    if (currentPart === 2) {
      // Part 3, move to the next question
      if (currentQuestion < parts[currentPart].questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        setTestStarted(false);
        setTestCompleted(true);
      }
    } else {
      // Part 1 or 2, handle as before
      if (currentPart < parts.length - 1) {
        setCurrentPart((prev) => prev + 1);
        setCurrentQuestion(0);
      } else {
        setTestStarted(false);
        setTestCompleted(true);
      }
    }
  };

  const handleDoneRecording = () => {
    recognition.stop();
    setIsRecording(false);
    setRecognitionActive(false);
    setShowDoneButton(false);
  
    console.log("Question:", parts[currentPart].questions[currentQuestion].text);
    console.log("Answer:", parts[currentPart].questions[currentQuestion].answer);
  
    if (currentPart === 2) {
      // Part 3, move to the next question
      const newParts = [...parts];
      if (currentQuestion < parts[currentPart].questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        setTestStarted(false);
        setTestCompleted(true);
      }
      setParts(newParts); // Update the parts state
    } else {
      // Part 1 or 2, handle as before
      const newParts = [...parts];
      if (currentQuestion < parts[currentPart].questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else if (currentPart < parts.length - 1) {
        setCurrentPart((prev) => prev + 1);
        setCurrentQuestion(0);
      } else {
        setTestStarted(false);
        setTestCompleted(true);
      }
      setParts(newParts); // Update the parts state
    }
  };

  const startPreparationTimer = () => {
    const timer = setInterval(() => setPreparationTime(prev => prev - 1), 1000);
    setTimeout(() => {
      clearInterval(timer);
      startAnswerRecording();
    }, 60000);
  };
  // ** Chnaged ** 
  // Test flow functions
  const startTest = () => {
    setTestStarted(true); // Make sure to set testStarted to true
    setCurrentPart(0);
    setCurrentQuestion(0);
    const initialQuestions = deepCopy(getQuestions());
    setParts(initialQuestions);
    setInitialParts(initialQuestions);
  };

  const handleStartTest = () => {
    if (!isTestStarted && !recordingName) {
      speakNamePrompt();
      setIsTestStarted(true);
    }
  };

  const handleCloseTest = () => {
    window.speechSynthesis.cancel();
    if (recognition) {
      recognition.stop();
      recognition.onresult = null;
      setRecognition(null);
    }
    if (recognitionActive) {
      setIsRecording(false);
      setRecognitionActive(false);
    }
    setTestStarted(false);
    setIsTestStarted(false);
    setTestCompleted(false);
    setCurrentPart(0);
    setCurrentQuestion(0);
    const newQuestions = deepCopy(getQuestions());
    setParts(newQuestions);
    setInitialParts(newQuestions);
    setRecordingName(false);
    clearTimeout(nameRecordingTimeout);
    setEvaluationResult(null);
    setShowResultButton(false);
    setShowResult(false);
    setNoSpeechDetected(false);
  };

  // Evaluation function
  const evaluateResponses = async () => {
    try {
      setIsLoading(true);

      const allQuestionsAndAnswers = parts.map((part) => {
        const questionanswer = part.part === 2
          ? [{ question: `${part.questions[0].text} ${part.questions[0].subQuestions?.join(' ')}`, answer: part.questions[0].answer }]
          : part.questions.map((q, index) => ({
              [`question ${index + 1}`]: q.text,
              answer: q.answer,
            }));

        return { part: part.part, questionanswer };
      });

      const prompt = `${systemprompt}\n\nResponses:\n${JSON.stringify(allQuestionsAndAnswers, null, 2)}`;

      const response = await OpenAI.post('/chat/completions', {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.1,
      });

      const result = response.data.choices[0].message.content;
      console.log("All Questions and answers:", allQuestionsAndAnswers);
      console.log('API Response:', result);
      const data = {
        allQuestionsAndAnswers: allQuestionsAndAnswers,
        result: JSON.parse(result)
      }
      const token = localStorage.getItem("token");
      const saveResponse = await axios.post(`${import.meta.env.VITE_BASE_URL}/speaking/saveresult`, { data }, {headers: {Authorization: `Bearer ${token}` }});
      console.log(saveResponse);

      try {
        const parsedResult = JSON.parse(result);
        setEvaluationResult(parsedResult);
      } catch (error) {
        console.error('Error parsing API response:', error);
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error('Error fetching data:', error);
    }
  };

  const handleShowResults = () => {
    setIsLoading(true);
    setShowResult(true);
  };

  // useEffect hooks
  useEffect(() => {
    if (testStarted) {
      if (currentQuestion === 0) {
        if (currentPart === 2) {
          speakIntroduction(parts[currentPart].introduction, () => {
            speakQuestion(parts[currentPart].questions[currentQuestion].text);
          });
        } else {
          speakIntroduction(parts[currentPart].introduction, () => {
            if (parts[currentPart].part === 2) startPreparationTimer();
            else speakQuestion(parts[currentPart].questions[currentQuestion].text);
          });
        }
      } else {
        speakQuestion(parts[currentPart].questions[currentQuestion].text);
      }
    }
  }, [testStarted, currentQuestion, currentPart]);

  useEffect(() => {
    if (testCompleted && userName) {
      speakThankYouMessage();
    }
  }, [testCompleted, userName]);

  useEffect(() => {
    if (testCompleted) {
      setShowResultButton(true);
    }
  }, [testCompleted]);

  useEffect(() => {
    if (showResult) {
      evaluateResponses();
    }
  }, [showResult]);

  // Render
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center relative">
      {(isTestStarted || recordingName) && (
        <button
          onClick={handleCloseTest}
          className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded sm:px-6 sm:py-3"
        >
          <CloseIcon />
        </button>
      )}
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">IELTS Speaking Test</h1>
        {!isTestStarted && !recordingName && !testStarted && (
          <button
            onClick={handleStartTest}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4 mb-8 w-full sm:w-auto sm:px-6 sm:py-3"
            disabled={isTestStarted}
          >
            Start Test
          </button>
        )}
        {recordingName && <p className="text-center">Listening for your name...</p>}
        {testStarted && (
          <div
            key={parts[currentPart].questions[currentQuestion].id}
            className="p-4 mx-auto bg-white rounded-xl shadow-md overflow-hidden sm:p-6 md:p-8"
          >
            <div className="md:flex">
              <div className="md:w-3/4">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Part {currentPart + 1}
                </div>
                <div className="mt-2">
                  <p className="text-lg md:text-xl">{parts[currentPart].questions[currentQuestion].text}</p>
                  {parts[currentPart].questions[currentQuestion].subQuestions && (
                    <ul className="list-disc list-inside pl-0 mt-2 text-base md:text-lg">
                      {parts[currentPart].questions[currentQuestion].subQuestions.map((subQuestion, index) => (
                        <li key={index}>{subQuestion}</li>
                      ))}
                    </ul>
                  )}
                </div>
 
                {parts[currentPart].part === 2 && (
                  <p className="mt-2 text-gray-500">Preparation Time: {preparationTime} seconds</p>
                )}
                <p className="mt-2 text-gray-500 text-base md:text-lg">
                  {parts[currentPart].questions[currentQuestion].answer}
                </p>
                {isRecording && (
                  <>
                    <p className="text-center">Recording...</p>
                    {showDoneButton && (
                      <button
                        onClick={currentPart === 2 ? handleDoneRecordingForPart2 : handleDoneRecording}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                      >
                        Done Recording Answer
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
        {testCompleted && !showResult && (
          <div className="text-center">
            <p className="mb-4">Thank you for taking the test.</p>
            {showResultButton && (
              <button
                onClick={handleShowResults}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:px-6 sm:py-3"
              >
                See my test result
              </button>
            )}
          </div>
        )}
        {showResult && (
          <>
            {isLoading && (
              <div className="flex items-center justify-center mt-4">
                <div className="loader"></div>
                <p className="ml-2">Evaluating...</p>
              </div>
            )}
            {evaluationResult && evaluationResult.ieltsInfo.sectionalBand && (
              <div className="mt-8">
                <EvaluationCard
                  overallBand={evaluationResult.ieltsInfo.overallBand}
                  fluencyCoherence={evaluationResult.ieltsInfo.sectionalBand.FluencyCoherence || 0}
                  lexicalResource={evaluationResult.ieltsInfo.sectionalBand.LexicalResource || 0}
                  grammaticalRangeAccuracy={evaluationResult.ieltsInfo.sectionalBand.GrammaticalRangeAccuracy || 0}
                  pronunciation={evaluationResult.ieltsInfo.sectionalBand.Pronunciation || 0}
                  feedback={evaluationResult.ieltsInfo.feedback}
                  mistakes={evaluationResult.ieltsInfo.mistakes}
                />
                <button
                  onClick={handleCloseTest}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4"
                >
                  Close Test
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
 };
 
 export default SpeechToText;