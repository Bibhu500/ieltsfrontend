
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const courseData = {
  title: "Day 1: Introduction to IELTS",
  description: "The 30-day IELTS course begins with an introduction to the IELTS exam, covering its structure, scoring system, and setting study goals. It also emphasizes the importance of understanding the exam's components to effectively plan for success.",
  chapterLink: "Day1",
  lessons: [
    { name: "Overview of the IELTS Exam", url: "lesson1.html" },
    { name: "Understanding IELTS Scoring", url: "lesson2.html" },
    { name: "Setting Goals and Study Plans", url: "lesson3.html" }
  ],
  lessonContent: [
    {
      content: "Welcome to the first step on your journey to mastering the IELTS exam. With a decade of experience in guiding students through the nuances of the IELTS, I am thrilled to embark on this path with you. My approach has enabled 80% of my students to achieve impressive band scores ranging from 7.7 to 8.5, and I'm confident that with dedication and strategic preparation, you too can join the ranks of high achievers.\n\nUnderstanding IELTS:\n\nThe International English Language Testing System, or IELTS, is a standardized test designed to assess the English language proficiency of non-native English speakers. It is recognized globally by universities, employers, and immigration authorities, making it a critical step for those seeking international education, professional advancement, or visa applications.\n\nThe Two Versions of IELTS:\n\nAcademic IELTS:\nIdeal for those planning to study at a tertiary level or seeking professional registration abroad. The academic test assesses readiness to engage with an English-speaking academic environment.\n\nGeneral Training IELTS:\nTailored for individuals aiming to migrate to English-speaking countries for work or for those enrolling in training programs or secondary education. This test focuses on basic survival skills in broad social and workplace contexts.\n\nThe Four Modules of IELTS:\n\nListening:\n\nDuration: 30 minutes\nFormat: Four recorded monologues and conversations\nAssessing: Your ability to understand main ideas, detailed factual information, and the opinions and attitudes of speakers.\nReading:\n\nDuration: 60 minutes for both Academic and General Training\nFormat: Three long texts for Academic, and extracts from books, magazines, newspapers, notices, advertisements, company handbooks, and guidelines for General Training.\nAssessing: A wide range of reading skills, including the ability to follow an argument and to recognize a writer’s opinion, attitude, or purpose.\nWriting:\n\nDuration: 60 minutes\nFormat: Two tasks for both Academic and General Training (report based on a graph or diagram, and an essay)\nAssessing: Your ability to write in an academic or real-life context, organize ideas logically, and use a range of vocabulary and grammar accurately.\nSpeaking:\n\nDuration: 11-14 minutes\nFormat: Face-to-face interview, including a short speech and a structured discussion\nAssessing: Your use of spoken English, ability to express ideas and information, and the ability to communicate opinions and information on everyday topics and common experiences.\nScoring and Band Scale:\n\nYour skills are evaluated and scored on a nine-band scale. You will receive individual band scores for each module and an overall band score. The score reflects your proficiency in English, with 1 being the lowest (non-user) and 9 being the highest (expert user).\n\nWhy a High Band Score Matters:\n\nAchieving a high band score in IELTS opens doors to world-class education, exciting career opportunities, and global mobility. Your score is a testament to your English language proficiency and a critical component in fulfilling your study, work, or migration aspirations.\n\nAs we progress through the course, we will delve into specific strategies for each module, practice with real test materials, and develop the skills necessary to excel. Remember, the key to success in IELTS is a combination of solid understanding, strategic practice, and familiarity with the test format. Let's begin this journey together, and aim for your personal best."
    },
    {
      content: "Understanding IELTS Scoring\n\nNavigating the scoring system of the IELTS exam is crucial for setting realistic goals and understanding where to focus your efforts during preparation. With a clear grasp of how the scoring works, you can better strategize your study plan and increase your chances of achieving a band score that reflects your true proficiency in English.\n\nThe IELTS Band Score Scale:\n\nIELTS results are reported on a 9-band scale designed to be simple and easy to understand. This scale has stood the test of time and is widely accepted as a reliable measure of English language proficiency.\n\nNon-user (Band score 1): Essentially has no ability to use the language beyond possibly a few isolated words.\nIntermittent user (Band score 2): Has great difficulty understanding spoken and written English.\nExtremely limited user (Band score 3): Conveys and understands only general meaning in very familiar situations. Frequent breakdowns in communication occur.\nLimited user (Band score 4): Basic competence is limited to familiar situations. Has a problem in understanding and expression, and is unable to use complex language.\nModest user (Band score 5): Has a partial command of the language and copes with overall meaning in most situations, although is likely to make many mistakes. Should be able to handle basic communication in their own field.\nCompetent user (Band score 6): Generally has an effective command of the language despite some inaccuracies and misunderstandings. Can use and understand fairly complex language, particularly in familiar situations.\nGood user (Band score 7): Has operational command of the language, though with occasional inaccuracies, inappropriate usage, and misunderstandings in some situations. Generally handles complex language well and understands detailed reasoning.\nVery good user (Band score 8): Has fully operational command of the language with only occasional unsystematic inaccuracies and inappropriacies. Misunderstandings may occur in unfamiliar situations. Handles complex detailed argumentation well.\nExpert user (Band score 9): Has fully operational command of the language. Their use of English is appropriate, accurate, and fluent, and shows complete understanding.\n\nIndividual Module Scoring:\n\nEach of the four modules (Listening, Reading, Writing, and Speaking) is scored individually. The examiners follow strict criteria to assess the levels of performance in each.\n\nListening and Reading:\n\nBoth sections contain 40 questions each, and each correct answer is awarded one mark.\nScores out of 40 are converted to the IELTS 9-band scale.\nScores are reported in whole and half bands.\nWriting and Speaking:\n\nThese are subjective tests assessed by qualified and trained examiners, using assessment criteria that cover a range of factors including fluency, coherence, vocabulary, grammar, and accuracy.\nExaminers use detailed performance descriptors for awarding a band score for each criterion, which then contribute to the overall band score for each module.\nScores are reported in whole and half bands.\nCalculating the Overall Band Score:\n\nThe overall band score is the average of the band scores of the four test components (Listening, Reading, Writing, and Speaking). The score is rounded to the nearest whole or half band. For example, if you achieve band scores of 6.5 in Listening, 7 in Reading, 7.5 in Writing, and 7 in Speaking, your overall band score would be 7.\n\nUnderstanding Your Score:\n\nYour score report provides detailed feedback on your performance. This feedback can serve as a guide for further study or action. A band score of 7 and above is considered a good score and is usually the threshold for universities and employers in English-speaking countries.\n\nStrategies for Scoring High:\n\nAchieving a high band score is a result of:\n\nFamiliarity with the test format.\nConsistent practice across all four skills.\nApplying strategies specific to each section.\nBuilding a strong foundation in grammar and vocabulary.\nPracticing under timed conditions to improve speed and accuracy.\nIn our sessions, we will break down each scoring criterion, practice with targeted exercises, and refine the techniques that can help you maximize your IELTS score. With dedication and strategic preparation, you too can be among the 80% of my students who score between 7.7 to 8.5. Let's set the bar high and leap over it together."
    },
    {
      content: "Setting Goals and Study Plans\n\nEmbarking on your IELTS preparation journey with clear goals and a structured study plan is a pivotal step towards success. Throughout our course, we will focus on targeted strategies tailored for each section of the IELTS exam to help you achieve a band score that reflects your highest potential.\n\nSetting Your Goals:\n\nThe first step in our journey will be to set specific, measurable, achievable, relevant, and time-bound (SMART) goals. Whether your target is to pursue higher education, professional registration, or migration, your goal might be to secure a band score of 7.5 or above. To accomplish this, you will need to:\n\nUnderstand the requirements of your chosen university, professional body, or immigration policy.\nAssess your current level of English proficiency.\nIdentify the gaps between your current level and the desired score.\nCommit to a regular study schedule.\nCrafting Your Study Plan:\n\nA personalized study plan is vital. It will address your individual strengths and weaknesses and will be designed to fit into your daily routine. This plan will be comprehensive, covering all four modules of the IELTS exam:\n\nListening:\n\nWe will focus on a variety of listening exercises, including lectures, conversations, and discussions.\nPractice will involve understanding different accents and picking up on specific details and inferences.\nReading:\n\nYou will engage with a wide range of texts, from academic materials to newspapers and magazines.\nEmphasis will be placed on skimming and scanning techniques, understanding main ideas, and the author's attitude.\nWriting:\n\nYou will learn how to structure essays and reports clearly and coherently, with a focus on task response, cohesion, and coherence.\nVocabulary and grammar accuracy will be honed through personalized feedback.\nSpeaking:\n\nThe course will include practice interviews with peers and the instructor to build confidence.\nWe will focus on fluency, lexical resource, grammatical range, and pronunciation.\nRegular Mock Tests:\n\nPeriodic mock tests will be integrated into your study plan to familiarize you with the exam's format and timing. These will also serve to track your progress and adjust your study plan as needed.\nReview and Feedback:\n\nRegular review sessions will be implemented to discuss your mock test outcomes, homework, and practice exercises. This feedback is crucial for continuous improvement and for refining your test-taking strategies.\nTime Management:\n\nTime management will be a core component of our strategy. The ability to manage the exam's strict timing constraints is often as important as your English proficiency.\nPersonalized Attention:\n\nAs your instructor, I will provide personalized attention to address specific needs, be it expanding your vocabulary, mastering complex grammar, or reducing your accent for clearer pronunciation.\nEmbracing the Challenge:\n\nThis course will not only prepare you for the IELTS exam but also help you embrace English as a tool for global communication. With rigorous practice and a clear focus on your goals, you will be equipped to not only meet but exceed your IELTS objectives.\n\nBy the end of our course, you'll have developed the skills and confidence needed to perform at your best. Remember, achieving a high band score is not just about English proficiency; it's about demonstrating a sophisticated understanding of the language in a variety of contexts. Let's set those goals and surpass them together."
    }
  ],
  lessonsCompleted: 3
};


const CoursePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const goToPreviousLesson = () => {
    setCurrentLessonIndex(prev => prev > 0 ? prev - 1 : prev);
    setCurrentContentIndex(prev => prev > 0 ? prev - 1 : prev);

  };

  const goToNextLesson = () => {
    setCurrentLessonIndex(prev => prev < courseData.lessons.length - 1 ? prev + 1 : prev);
    setCurrentContentIndex(prev => prev < courseData.lessonContent.length - 1 ? prev + 1 : prev);
  };

  const currentLesson = courseData.lessons[currentLessonIndex];
  const currentLessonContent = courseData.lessonContent[currentContentIndex];


  return (
    <div className="flex flex-col md:flex-row">
      {/* Fixed Top Navigation Bar */}
      <div className="fixed w-full z-30 md:hidden">
  <div className="bg-white p-4 flex justify-between items-center shadow">
    <button onClick={toggleSidebar} className="text-gray-500 hover:focus:outline-none">
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
    <Link to="/homepage/bandeighttopics" className="flex items-center">
      <button className="bg-transparent border-none outline-none cursor-pointer mr-4">
        <span className="text-gray-600">Go to the course</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M13.414 10l3.293-3.293a1 1 0 1 0-1.414-1.414L12 8.586 8.707 5.293a1 1 0 0 0-1.414 1.414L10.586 10l-3.293 3.293a1 1 0 0 0 1.414 1.414L12 11.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 10z" clipRule="evenodd" />
        </svg>
      </button>
    </Link>
    <h1 className="text-lg font-semibold">IELTS Course</h1>
  </div>
</div>


      {/* Sidebar for larger screens */}
      <div className={`flex flex-col md:w-72 bg-gray-100 pt-20 fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition duration-200 ease-in-out`}>
        <div className="mb-4 md:mb-0 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4 px-4 pt-4 md:pt-0">IELTS Overview</h2>
          <ul>
            {courseData.lessons.map((lesson, index) => (
              <li key={index} className={`mb-2 hover:bg-blue-500 px-4 py-2 ${index === currentLessonIndex ? 'bg-gray-500 text-white' : 'bg-white'}`} onClick={() => { setCurrentLessonIndex(index); setCurrentContentIndex(index) }} style={{ cursor: 'pointer' }} >
                <div className="flex items-center justify-between">
                  <h3 className="text-md  font-semibold">{lesson.name}</h3>
                  <span className="text-xs text-gray-500">{index + 1}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-10 mt-16 md:mt-0 md:pl-80">
        <Link to="/bandeighttopics">
          <button className="absolute top-4 right-4 flex items-center bg-transparent border-none outline-none cursor-pointer">
            <span className="text-gray-600">Go to the course</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M13.414 10l3.293-3.293a1 1 0 1 0-1.414-1.414L12 8.586 8.707 5.293a1 1 0 0 0-1.414 1.414L10.586 10l-3.293 3.293a1 1 0 0 0 1.414 1.414L12 11.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 10z" clipRule="evenodd" />
            </svg>
          </button>
        </Link>
        <div className="mb-4">
          <h1 className="text-3xl font-bold mb-2">{currentLesson.name}</h1>
          <p className="text-gray-700">{courseData.description}</p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {/* Cards for each lesson */}

          <div className="border-2 p-6 border-gray-300">
            <h3 className="text-xl font-semibold mb-3">{currentLessonContent.content}</h3>
            {/* Content based on lesson.url */}
          </div>

        </div>
        <div className="flex justify-between mt-10">
          {/* Navigation buttons */}
          <button onClick={goToPreviousLesson} className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ${currentLessonIndex === 0 ? ' cursor-not-allowed opacity-50' : ''}`}>
            ← PREVIOUS LESSON
          </button>
          <button onClick={goToNextLesson} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center ${currentLessonIndex === courseData.lessons.length - 1 ? ' cursor-not-allowed opacity-50' : ''}`}>
            NEXT LESSON →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;