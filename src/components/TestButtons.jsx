import React, { useEffect } from 'react';

const TestButtons = () => {
  const tests = [
    { name: "Try IELTS Speaking", icon: "fa-comments", class: "btn-info", link: "speaking.html" },
    { name: "Try IELTS Writing", icon: "fa-pencil-alt", class: "btn-success", link: "writing.html" },
    { name: "Try IELTS Listening", icon: "fa-headphones", class: "btn-warning", link: "listening.html" },
    { name: "Try IELTS Reading", icon: "fa-book-reader", class: "btn-danger", link: "reading.html" },
    { name: "Give Complete Test", icon: "fa-clipboard-list", class: "btn-primary", link: "completeTest.html" }
  ];

  useEffect(() => {
    const buttonContainer = document.getElementById('testButtons');

    tests.forEach(test => {
      buttonContainer.innerHTML += `
        <div class="col-lg-3 col-md-6 mb-3">
          <a href="${test.link}">
            <button type="button" class="btn ${test.class} btn-lg btn-block btn-custom">
              <i class="fas ${test.icon} fa-3x"></i><br/>${test.name}
            </button>
          </a>
        </div>
      `;
    });
  }, []);

  return (
    <div className="container my-4 text-center" id="testContainer">
      <h2 className="test-title">You are going great, enhance your skills and learning by practicing the actual tests now!</h2>
      <div className="row justify-content-center" id="testButtons"></div>
    </div>
  );
};

export default TestButtons;
