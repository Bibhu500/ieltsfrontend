import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Writing1 from '../components/Writing1';
import Writing2 from '../components/Writing2';

const WritingPage = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const cards = [
    {
      title: 'GENERAL PART 1',
      subtitle: '2 FREE RESULTS',
      features: [
        'General IELTS part 1 letter writing',
        'Instant result',
        '7 Plus Sample Result',
        'Comprehensive feedback',
        '33% of your total IELTS writing score',
        'The Latest writing topics and questions',
        'Graded on all four IELTS parameters: Grammar, Coherence & Cohesion, Lexical Resource, and Task Response',
      ],
      buttonText: 'Start Test',
      component: 'writing1',
    },
    {
      title: 'ACADEMIC PART 1',
      subtitle: '2 FREE RESULTS',
      features: [
        'Academic IELTS part 1 writing',
        'Instant result',
        '7 Plus Sample Result',
        'Comprehensive feedback',
        '33% of your total IELTS writing score.',
        'The Latest writing topics and questions',
        'Graded on all four IELTS parameters: Grammar, Coherence & Cohesion, Lexical Resource, and Task Response',
      ],
      buttonText: 'Start Test',
      component: 'writing2',
    },
    {
      title: 'ESSAY WRITING',
      subtitle: 'PREMIUM FEATURE',
      features: [
        'IELTS part 2 essay writing',
        'Instant result',
        '7 Plus Sample Result',
        'Comprehensive feedback',
        '66% of your total IELTS writing score.',
        'The Latest writing topics and questions',
        'Graded on all four IELTS parameters: Grammar, Coherence & Cohesion, Lexical Resource, and Task Response',
      ],
      buttonText: 'Start Test',
      component: 'writing3',
    },
  ];

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'writing1':
        return (
          <>
            <Writing1 type="General" />
            <button
              onClick={() => setSelectedComponent(null)}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Back to Menu
            </button>
          </>
        );
      case 'writing2':
        return (
          <>
            <Writing1 type="Academic"/>
            <button
              onClick={() => setSelectedComponent(null)}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Back to Menu
            </button>
          </>
        );
      case 'writing3':
        return (
          <>
            <Writing2 />
            <button
              onClick={() => setSelectedComponent(null)}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Back to Menu
            </button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {selectedComponent ? (
          renderSelectedComponent()
        ) : (
          <>
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                IELTS Writing
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Choose the writing section to practice and improve your IELTS writing skills.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="px-6 py-8">
                    <div className="font-bold text-xl mb-2">{card.title}</div>
                    <p className="text-gray-700 text-base mb-4">{card.subtitle}</p>
                    <ul className="list-disc pl-5 mb-6 text-gray-600">
                      {card.features.map((feature, index) => (
                        <li key={index} className="mb-2">
                          <FontAwesomeIcon icon={faCheck} className="mr-2 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => setSelectedComponent(card.component)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      {card.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WritingPage;