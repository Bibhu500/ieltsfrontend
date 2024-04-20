document.addEventListener("DOMContentLoaded", function() {
    const courses = [
        {
            title: "Day 1: Introduction to IELTS",
            description: "The 30-day IELTS course begins with an introduction to the IELTS exam, covering its structure, scoring system, and setting study goals. It also emphasizes the importance of understanding the exam's components to effectively plan for success.",
            chapterLink: "course-page.html",
            lessons: [
                { name: "Overview of the IELTS Exam", url: "lesson1.html" },
                { name: "Understanding IELTS Scoring", url: "lesson2.html" },
                { name: "Setting Goals and Study Plans", url: "lesson3.html" }
            ],
            lessonsCompleted: 3
        },
        {
            title: "Day 2: Listening - Strategies and Foundations",
            description: "Introduction to IELTS Listening, focusing on understanding question types and developing active listening skills.",
            lessons: [
                { name: "Introduction to IELTS Listening", url: "lesson4.html" },
                { name: "Understanding Question Types", url: "lesson5.html" },
                { name: "Active Listening Skills", url: "lesson6.html" }
            ],
            lessonsCompleted: 2
        },
        {
            title: "Day 3: Listening - Intensive Practice",
            description: "Engage in intensive listening practice with note-taking strategies and techniques for dealing with distractors.",
            lessons: [
                { name: "Note-Taking Strategies", url: "lesson7.html" },
                { name: "Dealing with Distractors", url: "lesson8.html" },
                { name: "Practice with Common Topics", url: "lesson9.html" }
            ],
            lessonsCompleted: 1
        },
        {
            title: "Day 4: Reading - Strategies and Foundations",
            description: "Introduction to IELTS Reading, focusing on skimming, scanning, and understanding question types.",
            lessons: [
                { name: "Introduction to IELTS Reading", url: "lesson10.html" },
                { name: "Skimming and Scanning Techniques", url: "lesson11.html" },
                { name: "Understanding Question Types", url: "lesson12.html" }
            ],
            lessonsCompleted: 0
        },
        {
            title: "Day 5: Reading - Focus on Skills",
            description: "Develop skills for the Reading section with a focus on identifying main ideas, details, and handling specific question types.",
            lessons: [
                { name: "Identifying Main Ideas and Details", url: "lesson13.html" },
                { name: "True, False, Not Given Questions", url: "lesson14.html" },
                { name: "Paragraph Matching", url: "lesson15.html" }
            ],
            lessonsCompleted: 0
        },
        {
            title: "Elevating Your IELTS Vocabulary - A Targeted Approach",
            description: "A strategic roadmap to enhance your expressive clarity and precision for a higher band score.",
            lessons: [
                { name: "IELTS Common European Framework (CEFR) Vocabulary Standards", url: "vocabulary1.html" },
                { name: "Easy Words vs. Their Higher Vocabulary Synonyms", url: "vocabulary2.html" },
                { name: "Vocabulary for Academic Writing Task 1", url: "vocabulary3.html" },
                { name: "Advanced Vocabulary for Band 8 and Above", url: "vocabulary4.html" },
                { name: "Contextual Vocabulary: Adapting to Different Topics", url: "vocabulary5.html" }
            ],
            lessonsCompleted: 0
        },
        {
            title: "Day 6: Writing - Task 1 Academic",
            description: "Overview of Task 1 Academic, focusing on data interpretation, describing trends, comparisons, and practice with charts and graphs.",
            lessons: [
                { name: "Overview of Task 1: Data Interpretation", url: "lesson16.html" },
                { name: "Describing Trends and Comparisons", url: "lesson17.html" },
                { name: "Practice with Charts and Graphs", url: "lesson18.html" }
            ],
            lessonsCompleted: 0
        },
        {
            title: "Day 7: Writing - Task 1 General Training",
            description: "Overview of Task 1 General Training, focusing on letter writing, tone, formality, and practice with various prompts.",
            lessons: [
                { name: "Overview of Task 1: Letter Writing", url: "lesson19.html" },
                { name: "Tone and Formality", url: "lesson20.html" },
                { name: "Practice with Letter Prompts", url: "lesson21.html" }
            ],
            lessonsCompleted: 0
        },
        {
            title: "Day 8: Writing - Task 2 Preparation",
            description: "Understanding Task 2 requirements, focusing on essay structure, planning, thesis statements, and introductions.",
            lessons: [
                { name: "Understanding Task 2 Requirements", url: "lesson22.html" },
                { name: "Essay Structure and Planning", url: "lesson23.html" },
                { name: "Thesis Statements and Introductions", url: "lesson24.html" }
            ],
            lessonsCompleted: 0
        },
        {
            title: "Day 9: Writing - Task 2 Skills Development",
            description: "Developing arguments and ideas for Task 2, focusing on body paragraphs, cohesion, counter-arguments, and conclusions.",
            lessons: [
                { name: "Developing Arguments and Ideas", url: "lesson25.html" },
                { name: "Body Paragraphs and Cohesion", url: "lesson26.html" },
                { name: "Counter-Arguments and Conclusions", url: "lesson27.html" }
            ],
            lessonsCompleted: 0
        },
        {
            title: "Day 10: Writing - Refinement and Practice",
            description: "Vocabulary enhancement for Task 2, focusing on grammar, complex sentence structures, and argumentative essay practice.",
            lessons: [
                { name: "Vocabulary Enhancement for Writing", url: "lesson28.html" },
                { name: "Grammar Focus for Task 2", url: "lesson29.html" },
                { name: "Task 2 Practice and Review", url: "lesson30.html" }
            ],
            lessonsCompleted: 0
        },
        {
            title: "Comprehensive Grammar Mastery for IELTS (Parallel Module for all)",
            description: "This extensive module combines crucial grammar lessons for IELTS preparation. It covers common mistakes and advanced grammar concepts to ensure a thorough understanding and application in your IELTS journey.",
            lessons: [
                {
                    name: "Subject-Verb Agreement Essentials",
                    url: "lesson1.html"
                },
                {
                    name: "Navigating Through Articles",
                    url: "lesson2.html"
                },
                {
                    name: "Apostrophes and Ownership",
                    url: "lesson3.html"
                },
                {
                    name: "The Pitfalls of Contractions",
                    url: "lesson4.html"
                },
                {
                    name: "Comma Usage and Clauses",
                    url: "lesson5.html"
                },
                {
                    name: "Countable vs. Uncountable Nouns",
                    url: "lesson6.html"
                },
                {
                    name: "Mastering Verb Tenses",
                    url: "lesson7.html"
                },
                {
                    name: "Avoiding Spelling Mistakes",
                    url: "lesson8.html"
                },
                {
                    name: "Prepositions in Practice",
                    url: "lesson9.html"
                },
                {
                    name: "Pronouns and Clarity",
                    url: "lesson10.html"
                },
                {
                    name: "Misuse of Articles",
                    url: "lesson11.html"
                },
                {
                    name: "Using Apostrophes Correctly",
                    url: "lesson12.html"
                },
                {
                    name: "Verb Tense Consistency",
                    url: "lesson13.html"
                },
                {
                    name: "Spelling Mistakes & Common Errors",
                    url: "lesson14.html"
                },
                {
                    name: "Advanced Vocabulary for Band 8 and Above",
                    url: "lesson15.html"
                }
            ],
            lessonsCompleted: 0
        },        
                // Continuing from the previous array...
        {
            title: "Day 11: Speaking - Part 1 Strategies",
            description: "Introduction to Speaking Part 1, focusing on answering common questions, fluency, and pronunciation tips.",
            lessons: [
                { name: "Introduction to Speaking Part 1", url: "lesson31.html" },
                { name: "Answering Common Questions", url: "lesson32.html" },
                { name: "Fluency and Pronunciation Tips", url: "lesson33.html" }
            ],
            lessonsCompleted: 0
        },
        {
            title: "Day 12: Speaking - Part 2 Strategies",
            description: "Mastering the Long Turn, organizing thoughts quickly, and practice with cue cards.",
            lessons: [
                { name: "Mastering the Long Turn", url: "lesson34.html" },
                { name: "Organizing Thoughts Quickly", url: "lesson35.html" },
                { name: "Practice with Cue Cards", url: "lesson36.html" }
            ],
            lessonsCompleted: 0
        },
        {
            title: "Day 13: Speaking - Part 3 Strategies",
            description: "Developing extended answers, engaging in discussion, and advanced language for speaking.",
            lessons: [
                { name: "Developing Extended Answers", url: "lesson37.html" },
                { name: "Engaging in Discussion", url: "lesson38.html" },
                { name: "Advanced Language for Speaking", url: "lesson39.html" }
            ],
            lessonsCompleted: 0
        },
        {
            title: "Day 14: Mid-Course Review and Practice Tests",
            description: "Comprehensive listening and reading practice tests, review, and feedback session.",
            lessons: [
                { name: "Comprehensive Listening Practice Test", url: "lesson40.html" },
                { name: "Comprehensive Reading Practice Test", url: "lesson41.html" },
                { name: "Review and Feedback Session", url: "lesson42.html" }
            ],
            lessonsCompleted: 0
        },
        {
            title: "Day 15: Advanced Listening Techniques",
            description: "Inferring meaning from context, recognizing the speaker's attitude, and advanced listening practice.",
            lessons: [
                { name: "Inferring Meaning from Context", url: "lesson43.html" },
                { name: "Recognizing Speaker's Attitude", url: "lesson44.html" },
                { name: "Advanced Listening Practice", url: "lesson45.html" }
            ],
            lessonsCompleted: 0
        },
        {
            title: "Day 16: Advanced Reading Techniques",
            description: "Understanding inferences and assumptions, reading for synthesis, and advanced reading practice.",
            lessons: [
                { name: "Understanding Inferences and Assumptions", url: "lesson46.html" },
                { name: "Reading for Synthesis", url: "lesson47.html" },
                { name: "Advanced Reading Practice", url: "lesson48.html" }
            ],
            lessonsCompleted: 0
        },
        {
            title: "Day 17: Writing - Advanced Task 2 Techniques",
            description: "Enhancing coherence and cohesion, complex sentence structures, and argumentative essay practice.",
            lessons: [
                { name: "Enhancing Coherence and Cohesion", url: "lesson49.html" },
                { name: "Complex Sentence Structures", url: "lesson50.html" },
                { name: "Argumentative Essay Practice", url: "lesson51.html" }
            ],
            lessonsCompleted: 0
        },
        {
            title: "Day 18: Speaking - Advanced Techniques",
            description: "Idiomatic language usage, handling difficult questions, and speaking practice with feedback.",
            lessons: [
                { name: "Idiomatic Language Usage", url: "lesson52.html" },
                { name: "Handling Difficult Questions", url: "lesson53.html" },
                { name: "Speaking Practice with Feedback", url: "lesson54.html" }
            ],
            lessonsCompleted: 0
        },
        {
            title: "Day 19: Full Mock Test Day 1",
            description: "Full listening test, full reading test, and review with error analysis.",
            lessons: [
                { name: "Full Listening Test", url: "lesson55.html" },
                { name: "Full Reading Test", url: "lesson56.html" },
                { name: "Review and Error Analysis", url: "lesson57.html" }
            ],
            lessonsCompleted: 0
        },
        {
            title: "Day 20: Full Mock Test Day 2",
            description: "Full writing test (Task 1 and 2), full speaking test, review, and personal feedback.",
            lessons: [
                { name: "Full Writing Test (Task 1 and 2)", url: "lesson58.html" },
                { name: "Full Speaking Test", url: "lesson59.html" },
                { name: "Review and Personal Feedback", url: "lesson60.html" }
            ],
            lessonsCompleted: 0
        },
        // Continuing from the previous array...
        {
            title: "Day 21: Listening - Final Strategies",
            description: "Predicting answers and pre-listening techniques, final tips for each section, and a listening strategy review.",
            lessons: [
                { name: "Predicting Answers and Pre-Listening", url: "lesson61.html" },
                { name: "Final Tips for Each Section", url: "lesson62.html" },
                { name: "Listening Strategy Review", url: "lesson63.html" }
            ],
            lessonsCompleted: 0
        },
        {
            title: "Day 22: Reading - Final Strategies",
            description: "Time management in reading, final tips for difficult questions, and a reading strategy review.",
            lessons: [
                { name: "Time Management in Reading", url: "lesson64.html" },
                { name: "Final Tips for Difficult Questions", url: "lesson65.html" },
                { name: "Reading Strategy Review", url: "lesson66.html" }
            ],
            lessonsCompleted: 0
        },
        {
            title: "Day 23: Writing - Polishing Your Skills",
            description: "Reviewing successful essays, last-minute tips for Task 1 and 2, and a personal writing review.",
            lessons: [
                { name: "Reviewing Successful Essays", url: "lesson67.html" },
                { name: "Last-minute Tips for Task 1 and 2", url: "lesson68.html" },
                { name: "Personal Writing Review", url: "lesson69.html" }
            ],
            lessonsCompleted: 0
        },
        {
            title: "Day 24: Speaking - Polishing Your Skills",
            description: "Part 1, 2, 3 strategy recap, final speaking practice, and overcoming speaking anxiety.",
            lessons: [
                { name: "Part 1, 2, 3 Strategy Recap", url: "lesson70.html" },
                { name: "Final Speaking Practice", url: "lesson71.html" },
                { name: "Overcoming Speaking Anxiety", url: "lesson72.html" }
            ],
            lessonsCompleted: 0
        },
        {
            title: "Day 25: Test Day Preparation",
            description: "Mental and physical preparation, last-minute study tips, and a test day checklist.",
            lessons: [
                { name: "Mental and Physical Preparation", url: "lesson73.html" },
                { name: "Last-minute Study Tips", url: "lesson74.html" },
                { name: "Test Day Checklist", url: "lesson75.html" }
            ],
            lessonsCompleted: 0
        },
        {
            title: "Day 26-28: Final Mock Tests and Review",
            description: "Final full mock tests for listening, reading, writing, speaking, comprehensive error analysis, and personalized feedback.",
            lessons: [
                { name: "Final Full Mock Test - Listening and Reading", url: "lesson76.html" },
                { name: "Final Full Mock Test - Writing", url: "lesson77.html" },
                { name: "Final Full Mock Test - Speaking", url: "lesson78.html" },
                { name: "Comprehensive Error Analysis", url: "lesson79.html" },
                { name: "Personalized Feedback and Recommendations", url: "lesson80.html" }
            ],
            lessonsCompleted: 0
        },
        {
            title: "Day 29: Rest and Mental Preparation",
            description: "Relaxation techniques, reviewing your strategy notes, and visualization and confidence building.",
            lessons: [
                { name: "Relaxation Techniques", url: "lesson81.html" },
                { name: "Reviewing Your Strategy Notes", url: "lesson82.html" },
                { name: "Visualization and Confidence Building", url: "lesson83.html" }
            ],
            lessonsCompleted: 0
        },
        {
            title: "Day 30: Final Review and Encouragement",
            description: "Last-minute tips and encouragement, course recap, and looking forward. Plus bonus chapters for additional study.",
            lessons: [
                { name: "Last-minute Tips and Encouragement", url: "lesson84.html" },
                { name: "Course Recap and Final Thoughts", url: "lesson85.html" },
                { name: "Celebrating Your Journey and Looking Forward", url: "lesson86.html" },
                { name: "Understanding British and American Accents", url: "lesson87.html" },
                { name: "Vocabulary Building - Topic Specific Words", url: "lesson88.html" },
                { name: "Common Mistakes and How to Avoid Them", url: "lesson89.html" },
                { name: "Staying Motivated and Dealing with Stress", url: "lesson90.html" }
            ],
            lessonsCompleted: 0
        }

    ];
    
    function createModuleHTML(module, index) {
        const accordionID = `accordion${index}`;
        const collapseID = `collapseOne${index}`;
        let lessonsHTML = module.lessons.map(lesson => `
            <li><a href="${lesson.url}" class="lesson-link"><i class="fas fa-book-reader text-right-space"></i> ${lesson.name}</a></li>
        `).join('');
    
        return `
        <div class="card custom-card">
            <div class="card-body">
                <h3 class="card-title font-weight-bold">${module.title}</h3>
                <p class="card-text">${module.description}</p>
                <a href="${module.chapterLink}" class="btn btn-primary custom-btn">Start Now</a> <!-- Update this line -->
                <div class="${accordionID} accordion-container mt-3">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center" id="headingOne${index}">
                            <button class="btn btn-link btn-block text-center" data-toggle="collapse" data-target="#${collapseID}" aria-expanded="true" aria-controls="${collapseID}" style="color: black !important; text-decoration: none !important; font-family: inherit;">
                                Show All <i class="fas fa-chevron-down"></i>
                                <span class="lessons-completed float-right">${module.lessonsCompleted} finished</span>
                            </button>
                        </div>
                        <div id="${collapseID}" class="collapse" aria-labelledby="headingOne${index}" data-parent=".${accordionID}">
                            <div class="card-body custom-card-body">
                                <h5>Lessons to Cover</h5>
                                <ul class="lesson-list">${lessonsHTML}</ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    }
    


    function renderCourses(courses) {
        const container = document.querySelector('.course-container'); // Main container to append courses
        container.innerHTML = ''; // Clear existing content
        courses.forEach((course, index) => {
            container.innerHTML += createModuleHTML(course, index);
        });
    }

    renderCourses(courses); // Call to render courses
});
