import React from 'react';

const courseData = {
  title: "Day 1: Introduction to IELTS",
  description: "The 30-day IELTS course begins with an introduction to the IELTS exam, covering its structure, scoring system, and setting study goals. It also emphasizes the importance of understanding the exam's components to effectively plan for success.",
  chapterLink: "Day1",
  lessons: [
    { name: "Overview of the IELTS Exam", url: "lesson1.html" },
    { name: "Understanding IELTS Scoring", url: "lesson2.html" },
    { name: "Setting Goals and Study Plans", url: "lesson3.html" }
  ],
  lessonsCompleted: 3
};

const CoursePage = () => {
  // This would be managed with state in a real application
  const currentLessonIndex = 0; // Assuming the first lesson is selected
  const currentLesson = courseData.lessons[currentLessonIndex];

  return (
    <div className="container mx-auto p-6">
      <div className="flex">
        <div className="w-1/4 bg-gray-200 p-4">
          <h2 className="font-bold text-lg mb-4">COMPLETE GUIDE TO 8+ BAND IN IELTS</h2>
          <div className="text-blue-600">PROGRESS</div>
          <div className="w-full bg-gray-400 rounded-full h-2.5 dark:bg-gray-700 mb-4">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '15%' }}></div>
          </div>
          <ul>
            {courseData.lessons.map((lesson, index) => (
              <li key={index} className={`p-2 ${index === currentLessonIndex ? 'bg-blue-500 text-white' : 'text-black'}`}>
                {lesson.name}
              </li>
            ))}
          </ul>
          <div className="mt-4 text-right">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              NEXT MODULE →
            </button>
          </div>
        </div>
        <div className="w-3/4 bg-white p-4">
          <h1 className="font-bold text-xl mb-2">{courseData.title}</h1>
          <p className="mb-6">{courseData.description}</p>
          <h2 className="font-bold text-lg mb-2">{currentLesson.name}</h2>
          <p>{/* Content based on currentLesson.url would go here */}</p>
          <div className="flex justify-between mt-6">
            <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded inline-flex items-center">
              ← PREVIOUS LESSON
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              NEXT LESSON →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
