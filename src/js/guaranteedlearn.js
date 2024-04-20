
    document.addEventListener("DOMContentLoaded", function() {
        const courses = [
            // Course 1: Sure 8+ bands In IELTS
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
                    "Insights into the criteria IELTS examiners use to assess Speaking and Writing."
                ],
                link: "8bandlearn.html",
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
            // Course 3: Mastering IELTS to Perfection
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
            // Add more course objects here if needed...
        ];
    
        // ... Rest of your script remains unchanged ..
    
    
    function createCardHTML(course) {
        let idealForHTML = course.idealFor.map(point => `<input type="checkbox" checked style="accent-color: green;"> ${point}<br/>`).join('');
        let outcomesHTML = course.outcomes.map(point => `<input type="checkbox" checked style="accent-color: green;"> ${point}<br/>`).join('');

        return `
            <div class="col-xl-6">
                <div class="card ">
                    <div class="card-header text-center ">
                        <span class="fa-solid fa-clipboard"></span>
                        <span class="module-text-right">${course.modules}</span>
                        <span>|</span>
                        <span class="module-text-left fa-solid fa-newspaper"></span>
                        <span>${course.lessons}</span>
                    </div>
                    <div class="card-body">
                        <h2 class="card-title">${course.title}</h2>
                        <p class="card-text">${course.description}</p>
                        <div class="my-4">
                            <h4 class="text-sm ">IDEAL FOR:</h4>
                            <p class="text-xs pl-4">${idealForHTML}</p>
                        </div>
                        <div class="my-4">
                            <h4 class="text-sm ">EDUCATIONAL OUTCOMES & SKILLS I WOULD ACQUIRE</h4>
                            <p class="text-xs pl-4">${outcomesHTML}</p>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-6 d-flex justify-content-start">
                                <a href="${course.link}" class="btn btn-primary" style="margin: 2px;">Start Learning</a>
                            </div>
                            <div class="col-6 d-flex justify-content-end">
                                <div class="progress" style="height: 20px; width: 150px; margin: 2px;">
                                    <div class="progress-bar" role="progressbar" style="width: ${course.progress}%;"
                                         aria-valuenow="${course.progress}" aria-valuemin="0" aria-valuemax="100">${course.progress}%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer animatedd-text  text-center">Time:${course.time}</div>
                </div>
            </div>
        `;
    }

    function renderCourses() {
        const container = document.querySelector('.row'); // Assuming '.row' is where you want to append your cards
        container.innerHTML = ''; // Clear existing content
        courses.forEach(course => {
            container.innerHTML += createCardHTML(course);
        });
    }

    renderCourses(); // Call to render courses
});
