
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faNewspaper } from '@fortawesome/free-solid-svg-icons';

import Topspace from './Topspace';
import Footer from './Footer';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom

const Guaranteed = () => {
    const [courses, setCourses] = useState([
        // Your course objects here...
        {
            title: "Sure 8+ bands In IELTS",
            description: "If you're targeting 8 or higher bands on the IELTS, this learning plan is tailor-made for you! Within this practical guide, we'll delve into each of the IELTS's four sections, providing detailed tips and expert strategies.",
            idealFor: [
                "Individuals aiming for an 8 or above in the exam.",
                "Learners at the Beginner or Intermediate level of English.",
                "Those looking to enhance their overall English proficiency."
             ],
            outcomes: [
                "Tactics for mastering each IELTS component for top scores.",
                "Methods to consistently achieve a band 8 across all sections.",
                "Insights into the criteria IELTS examiners use to assess Speaking and Writing."            ],
            link: "bandeighttopics",
            progress: 50,
            time: "4 weeks",
            modules: "10 Modules",
            lessons: "20 Lessons"
        },
        // Course 2: Achieve Band 7 in Two Weeks
        {
            title: "Achieve Band 7 in Two Weeks",
            description: "It's tailored to help learners efficiently navigate through all sections of the IELTS, providing strategic insights and intensive practice. The course leverages AI-enhanced tools to offer personalized learning experiences.",
            idealFor: [
                "Quick learners targeting Band 7 swiftly.",
                "Those with intermediate English looking for a challenge.",
                "Individuals who want intensive, targeted IELTS preparation."
            ],
            outcomes: [
                "Rapid strategies for improving in all IELTS sections.",
                "Time management techniques for a faster score boost.",
                "Understanding of key areas to focus on for Band 7 achievement."
            ],
            link: "#", // Replace with actual link
            progress: 50,
            time: "2 weeks",
            modules: "10 Modules",
            lessons: "20 Lessons"
        },
        {
            title: "Mastering IELTS to Perfection",
            description: "Dive deep into the nuances of the IELTS with this comprehensive course. From advanced strategies to detailed feedback, you'll refine every aspect of your English and test skills, setting you up for the highest scores.",
            idealFor: [
                "Advanced learners aiming for top IELTS bands.",
                "Those who want an in-depth understanding of the test.",
                "Students looking for extensive practice and detailed feedback."
            ],
            outcomes: [
                "Advanced techniques for top band scores in each section.",
                "Personalized strategies based on detailed feedback.",
                "In-depth understanding and practice of complex IELTS material."
            ],
            link: "#", // Replace with actual link
            progress: 50,
            time: "1 week",
            modules: "10 Modules",
            lessons: "20 Lessons"
        },
        // Course 4: IELTS Quick Prep
        {
            title: "IELTS Quick Prep",
            description: "Short on time? This quick prep course is designed to give you an effective overview of the IELTS format, providing strategies and tips to tackle each section efficiently. Ideal for last-minute preparations!",
            idealFor: [
                "Individuals with limited time before their test date.",
                "Those who need a refresher on IELTS strategies.",
                "Learners looking for quick and effective test insights."
            ],
            outcomes: [
                "Quick tips and strategies for all IELTS sections.",
                "Effective practice techniques for a short time frame.",
                "Confidence to tackle IELTS with limited preparation."
            ],
            link: "#", // Replace with actual link
            progress: 50,
            time: "1 week",
            modules: "10 Modules",
            lessons: "20 Lessons"
        }
    ]);

    return (
        <>
          <div className="container-fluid ml-0 container-bottom px-2">
            <Topspace title="Guaranteed Courses" />
            <div className="row">
              {courses.map((course, index) => (
                <div className="col-xl-6 mb-4" key={index}>
                  <div className="card h-100">
                    <div className="card-header text-center">
                      <FontAwesomeIcon icon={faClipboard} />
                      <span className="module-text-right ml-2">{course.modules}</span>
                      <span className="mx-2">|</span>
                      <FontAwesomeIcon icon={faNewspaper} />
                      <span className="ml-2">{course.lessons}</span>
                    </div>
                    <div className="card-body">
                      <h2 className="card-title font-bold">{course.title}</h2>
                      <p className="card-text">{course.description}</p>
                      <div className="my-4">
                        <h4 className="font-semibold">IDEAL FOR:</h4>
                        <ul className="pl-4">
                          {course.idealFor.map((point, idx) => (
                            <li key={idx}>
                              <input type="checkbox" checked readOnly style={{ color: 'green' }} /> {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="my-4">
                        <h4 className="font-semibold">EDUCATIONAL OUTCOMES & SKILLS I WOULD ACQUIRE</h4>
                        <ul className="pl-4">
                          {course.outcomes.map((point, idx) => (
                            <li key={idx}>
                              <input type="checkbox" checked readOnly style={{ color: 'green' }} /> {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="row align-items-center">
                        <div className="col-6">
                          <Link to={course.link} className="btn btn-primary">
                            Start Learning
                          </Link>
                        </div>
                        <div className="col-6 text-right">
                          <div className="progress" style={{ height: '20px' }}>
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: `${course.progress}%` }}
                              aria-valuenow={course.progress}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              {course.progress}%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer text-center">Time: {course.time}</div>
                  </div>
                </div>
              ))}
            </div>
            <Footer />
          </div>
        </>
      );
    };
    
    export default Guaranteed;
