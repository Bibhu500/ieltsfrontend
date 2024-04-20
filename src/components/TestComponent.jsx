import  { useState, useEffect } from 'react';

const questionsList = [
    { id: 1, text: "Let’s talk about your hometown. Where is your hometown?" },
    { id: 2, text: "What do you like about it?" },
    { id: 3, text: "What do you not like about it?" },
    { id: 4, text: "How important is your hometown to you?" },
    { id: 5, text: "Do you think you will continue to live in your hometown?" },
    { id: 6, text: "Let’s move on to talk about accommodation. Tell me about the kind of accommodation you live in?" },
    { id: 7, text: "Does the place you live in have many amenities?" },
    { id: 8, text: "Is there anything you would like to change about the place you live in?" },
    { id: 9, text: "Do you plan to live there for a long time?" },
    // Additional questions...
  ].map(q => ({ ...q, answer: "", played: false }));
  
   
const TestComponent = ({ questionsList, onTestComplete }) => {
  const [questions, setQuestions] = useState(questionsList);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    // Start with the first question
    if (questions.length > 0) {
      speakQuestion(questions[currentQuestionIndex].text);
    }
  }, [questions, currentQuestionIndex]);

  const speakQuestion = (questionText) => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = questionText;
    msg.onend = () => {
      // Only start recording the answer after the question has been fully asked
      startAnswerRecording();
    };
    window.speechSynthesis.speak(msg);
  };

  const startAnswerRecording = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = 'en-US';
      recognition.continuous = false; // Capture a single result
      recognition.interimResults = false; // We are only interested in the final result

      recognition.onresult = (event) => {
        const answer = event.results[0][0].transcript;
        // Update the answer for the current question
        const updatedQuestions = questions.map((question, idx) =>
          idx === currentQuestionIndex ? { ...question, answer: answer } : question
        );
        setQuestions(updatedQuestions);

        // Move to the next question or end the test if it was the last question
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          onTestComplete(updatedQuestions); // Callback to parent component to signal test completion
        }
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      setIsRecording(true);
      recognition.start();
    } else {
      alert("Your browser does not support the Web Speech API. Please use a supported browser.");
    }
  };

  const handleCloseTest = () => {
    // Stop any ongoing speech synthesis or recognition
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
    setIsRecording(false);
    onTestComplete(questions); // Callback to parent component to signal test closure
  };

  return (
    <div>
      {questions.length > 0 && (
        <div>
          <div>
            <h2>Question {currentQuestionIndex + 1} of {questions.length}</h2>
            <p>{questions[currentQuestionIndex].text}</p>
          </div>
          <div>
            <p>Answer: {questions[currentQuestionIndex].answer}</p>
          </div>
          {isRecording && <p>Recording...</p>}
        </div>
      )}
      <button onClick={handleCloseTest} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
        End Test
      </button>
    </div>
  );
};

export default TestComponent;
