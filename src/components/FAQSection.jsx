import React, { useState } from 'react';

function FAQSection() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const accordionItems = [
    {
      question: "Can I use IeltsAppeal for self-study?",
      answer: "With this platform, you do not need anything else for your IELTS preparation, and we guarantee this based on catering to thousands of students who have trusted us. Yes, you can use IeltsAppeal for self-study. It offers a comprehensive platform for individuals preparing for the IELTS exam on their own. However, certain features such as progress tracking, team support, weak area detection, and customized study paths are only available in paid subscription tiers.",
    },
    {
      question: "Can I use IeltsAppeal without a subscription for free and self-study?",
      answer: "Yes, you can use IeltsAppeal for free self-study. However, certain premium features such as progress tracking, team support, weak area detection, and customized study paths will not be available in the free tier.",
    },
    {
      question: "Is there a mobile app available for IeltsAppeal?",
      answer: "No, IeltsAppeal does not have a mobile app. It has been designed as a browser-based platform, accessible on all devices, prioritizing convenience and accessibility for all users.",
    },
    {
      question: "How does IeltsAppeal ensure accuracy in its practice tests?",
      answer: "IeltsAppeal ensures accuracy in its practice tests through high-level machine learning and AI models. These models analyze test results against the official IELTS syllabus and marking system, providing users with reliable assessment and feedback.",
    },
    {
      question: "What support resources are available for users of IeltsAppeal?",
      answer: "IeltsAppeal offers a range of support resources to its users. Our best and proven study materials are available for free to all users, ensuring a focused learning experience for students aiming to enhance their English skills.",
      links: [
        { text: "Explore FAQs", url: "#" },
        { text: "Contact Customer Support", url: "#" }
      ]
    }
  ];
  


  return (
    <section id='faqs' className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl my-5 px-4 pb-6 mx-auto lg:pb-6 lg:px-6">
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 lg:mb-8 lg:text-3xl dark:text-white text-center">Frequently asked questions</h2>
        <div className="max-w-screen-md mx-auto">
          <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
            {accordionItems.map((item, index) => (
              <div key={index}>
                <h3 id={`accordion-flush-heading-${index}`} className="border-b border-gray-200 dark:border-gray-700">
                  <button
                    type="button"
                    className={`flex items-center justify-between w-full py-5 font-medium text-left focus:outline-none border-none ${
                      activeAccordion === index ? 'text-gray-900 bg-white dark:bg-gray-900 dark:text-white' : 'text-gray-500'
                    }`}
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={activeAccordion === index}
                    aria-controls={`accordion-flush-body-${index}`}
                  >
                    <span>{item.question}</span>
                    <svg
                      data-accordion-icon=""
                      className={`w-6 h-6 shrink-0 ${
                        activeAccordion === index && 'rotate-180'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h3>
                <div
                  id={`accordion-flush-body-${index}`}
                  className={`${
                    activeAccordion === index ? '' : 'hidden'
                  }`}
                  aria-labelledby={`accordion-flush-heading-${index}`}
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 pl-5 pr-20 text-gray-500 dark:text-gray-400 text-left">{item.answer}</p>
                    {item.links && (
                      <ul className=" text-gray-500 list-none pl-5 text-left dark:text-gray-400">
                        {item.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a href={link.url} className="text-purple-600 dark:text-purple-500 ">{link.text}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
