import React, { useState, useEffect } from 'react';

const IntroductionComponent = ({ onComplete }) => {
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    speakIntroduction();
  }, []);

  const speakIntroduction = () => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = "Welcome to the Speaking section of the IELTS examination. My name is Brandon Coli and I will be your examiner for this part of the test. For your information, this test will be recorded. May I know your full name please?";
    msg.onend = () => {
      setIsRecording(true); // Enable recording
      startRecordingName();
    };
    window.speechSynthesis.speak(msg);
  };

  const startRecordingName = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = 'en-US';
      recognition.continuous = false; // Capture a single result
      recognition.interimResults = false; // We only need the final result for the name

      recognition.onresult = (event) => {
        const name = event.results[0][0].transcript;
        setIsRecording(false); // Disable recording
        onComplete(name); // Pass the captured name to the onComplete callback
      };

      recognition.onend = () => {
        setIsRecording(false); // Ensure recording is marked as stopped
      };

      recognition.start();
    } else {
      alert("Your browser does not support the Web Speech API. Please use a supported browser.");
    }
  };

  return (
    <div>
      {isRecording ? <p>Please say your name...</p> : <p>Click "Let's start the test" to begin.</p>}
    </div>
  );
};

export default IntroductionComponent;
