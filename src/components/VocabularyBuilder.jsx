import React, { useState, useEffect } from 'react';
import { FaEdit, FaSave, FaTimes, FaChevronDown, FaChevronUp, FaCheckSquare } from 'react-icons/fa';
import axios from 'axios'; 

// Sample vocabulary words with meanings and sentences
const vocabularyWords = [
  {
    word: 'Serendipity',
    meaning: 'The occurrence of events by chance in a happy or beneficial way.',
    sentences: [
      'Their meeting was a serendipity that changed the course of their lives.',
      'She stumbled upon the quaint bookstore by serendipity while exploring the city.',
    ],
  },
  {
    word: 'Pulchritudinous',
    meaning: 'Having great physical beauty and appeal.',
    sentences: [
      'She was often praised for her pulchritudinous features.',
      'The pulchritudinous landscape took his breath away.',
    ],
  },
  {
    word: 'Ephemeral',
    meaning: 'Lasting for a very short time; transient.',
    sentences: [
      'The beauty of the ephemeral cherry blossoms reminded her of the fleeting nature of life.',
      'Their happiness was ephemeral, like a shooting star that quickly fades away.',
    ],
  },
  {
    word: 'Luminescent',
    meaning: 'Emitting light not caused by heat; glowing.',
    sentences: [
      'The luminescent moon cast a soft glow over the landscape.',
      'The luminescent algae illuminated the water with an eerie blue light.',
    ],
  },
  {
    word: 'Quixotic',
    meaning: 'Exceedingly idealistic; unrealistic and impractical.',
    sentences: [
      'His quixotic quest for world peace was met with skepticism by many.',
      'She embarked on a quixotic mission to solve world hunger single-handedly.',
    ],
  },
  {
    word: 'Ebullient',
    meaning: 'Cheerful and full of energy; exuberant.',
    sentences: [
      'His ebullient personality lit up the room wherever he went.',
      'She felt ebullient after receiving the good news.',
    ],
  },
  {
    word: 'Effervescent',
    meaning: 'Bubbly, lively, and enthusiastic.',
    sentences: [
      'Her effervescent personality made her the life of the party.',
      'The effervescent stream bubbled joyfully as it flowed over the rocks.',
    ],
  },
  {
    word: 'Cacophony',
    meaning: 'A harsh, discordant mixture of sounds.',
    sentences: [
      'The cacophony of honking horns and shouting pedestrians made it difficult to concentrate.',
      'The orchestra\'s performance started with a cacophony of dissonant notes.',
    ],
  },
  {
    word: 'Mellifluous',
    meaning: 'Sweet or musical; pleasant to hear.',
    sentences: [
      'His mellifluous voice soothed her frayed nerves.',
      'The mellifluous melody of the song enchanted everyone who heard it.',
    ],
  },
  {
    word: 'Nebulous',
    meaning: 'Hazy, vague, or indistinct.',
    sentences: [
      'Her memories of that day were nebulous, blurred by time.',
      'The concept of happiness seemed nebulous and elusive to him.',
    ],
  },
  {
    word: 'Ephemeral',
    meaning: 'Lasting for a very short time; transient.',
    sentences: [
      'The beauty of the ephemeral cherry blossoms reminded her of the fleeting nature of life.',
      'Their happiness was ephemeral, like a shooting star that quickly fades away.',
    ],
  },
  {
    word: 'Ethereal',
    meaning: 'Extremely delicate and light in a way that seems not to be of this world.',
    sentences: [
      'The dancer moved across the stage with an ethereal grace.',
      'The ethereal glow of the fireflies lit up the night sky.',
    ],
  },
  {
    word: 'Obfuscate',
    meaning: 'Render obscure, unclear, or unintelligible.',
    sentences: [
      'The lawyer attempted to obfuscate the facts of the case.',
      'His explanations only served to obfuscate the issue further.',
    ],
  },
  {
    word: 'Quintessential',
    meaning: 'Representing the most perfect or typical example of a quality or class.',
    sentences: [
      'The quaint little cottage was the quintessential country retreat.',
      'Her elegant style was the quintessential example of timeless fashion.',
    ],
  },
  {
    word: 'Resplendent',
    meaning: 'Attractive and impressive through being richly colorful or sumptuous.',
    sentences: [
      'The bride looked resplendent in her white gown.',
      'The resplendent sunset painted the sky with hues of orange and pink.',
    ],
  },
  {
    word: 'Surreptitious',
    meaning: 'Kept secret, especially because it would not be approved of.',
    sentences: [
      'He cast a surreptitious glance at his watch during the boring meeting.',
      'She made a surreptitious exit from the party without saying goodbye.',
    ],
  },
  {
    word: 'Talisman',
    meaning: 'An object, typically an inscribed ring or stone, that is thought to have magic powers and to bring good luck.',
    sentences: [
      'He carried a rabbit\'s foot as a talisman for good luck.',
      'The ancient talisman was said to protect its wearer from harm.',
    ],
  },
  {
    word: 'Voracious',
    meaning: 'Having a very eager approach to an activity.',
    sentences: [
      'She was a voracious reader, devouring books at an astonishing rate.',
      'The voracious appetite of the young athletes seemed insatiable.',
    ],
  },
];

const VocabularyBuilder = () => {
  const [selectedWords, setSelectedWords] = useState([]);
  const [userVocabulary, setUserVocabulary] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [expandedWord, setExpandedWord] = useState(null);
  const [doneWords, setDoneWords] = useState([]);
  const [saveSuccess, setSaveSuccess] = useState(false); // State for save success message

  const isWordInUserVocabulary = (wordString) => userVocabulary.some((w) => w.word === wordString);

  const handleWordSelect = (word) => {
    if (selectedWords.includes(word)) {
      setSelectedWords(selectedWords.filter((w) => w !== word));
    } else {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const handleRemoveWord = (word) => {
    setUserVocabulary(userVocabulary.filter((w) => w !== word));
    setDoneWords(doneWords.filter((w) => w.word !== word.word));
    setSelectedWords(selectedWords.filter((w) => w.word !== word.word));
  };

  const handleAdd = () => {
    const uniqueWords = [...new Set([...userVocabulary, ...selectedWords])];
    setUserVocabulary(uniqueWords);
    setSelectedWords([]);
    setEditMode(false);
  };

  const handleWordClick = (word) => {
    if (expandedWord === word) {
      setExpandedWord(null);
    } else {
      setExpandedWord(word);
    }
    if (doneWords.some((w) => w.word === word.word)) {
      setDoneWords(doneWords.filter((w) => w.word !== word.word));
    } else {
      setDoneWords([...doneWords, word]);
    }
  };

  const handleSave = () => {
    // Send userVocabulary to the backend
    const token = localStorage.getItem('token'); // Assuming you store the token in local storage

    axios.post(`${import.meta.env.VITE_BASE_URL}/vocabulary/save`, userVocabulary, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        // Handle success, maybe show a success message
        console.log('Vocabulary saved successfully:', response.data);
        setSaveSuccess(true); // Set save success message
        setTimeout(() => {
          setSaveSuccess(false); // Hide the success message after a delay
        }, 3000); // Hide after 3 seconds
      })
      .catch(error => {
        // Handle error, maybe show an error message
        console.error('Error saving vocabulary:', error);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem('token'); // Assuming you store the token in local storage

    axios.get(`${import.meta.env.VITE_BASE_URL}/vocabulary/getVocabulary`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        // Update user's vocabulary with the fetched data
        setUserVocabulary(response.data.data);
      })
      .catch(error => {
        // Handle error, maybe show an error message
        console.error('Error fetching user vocabulary:', error);
      });
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Vocabulary Builder</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
          <div className="bg-white rounded-lg shadow-md p-4 h-[500px] overflow-y-scroll">
            <h2 className="text-emerald-400 text-xl font-bold mb-2">My Vocabulary List</h2>
            <ul className="space-y-2">
              {userVocabulary.map((word) => (
                <li key={word.word} className="bg-gray-100 rounded-lg shadow-md p-1">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      {expandedWord !== word && (
                        <div
                          className="mr-2 cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (doneWords.some((w) => w.word === word.word)) {
                              setDoneWords(doneWords.filter((w) => w.word !== word.word));
                            } else {
                              setDoneWords([...doneWords, word]);
                            }
                          }}
                        >
                          {doneWords.some((w) => w.word === word.word) ? (
                            <FaCheckSquare className="text-green-500" />
                          ) : (
                            <div className="w-6 h-6 border border-gray-300 rounded"></div>
                          )}
                        </div>
                      )}
                      <span className="text-lg font-bold cursor-pointer" onClick={() => handleWordClick(word)}>
                        {word.word}
                      </span>
                    </div>
                    <div className="flex items-center">
                      {editMode && (
                        <button
                          className="text-red-500 hover:text-red-600 mr-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveWord(word);
                          }}
                        >
                          <FaTimes />
                        </button>
                      )}
                      {expandedWord === word ? (
                        <FaChevronUp className="text-gray-500 cursor-pointer" onClick={() => handleWordClick(word)} />
                      ) : (
                        <FaChevronDown className="text-gray-500 cursor-pointer" onClick={() => handleWordClick(word)} />
                      )}
                    </div>
                  </div>
                  {expandedWord === word && (
                    <div className="mt-4">
                      <p className="text-sm">{word.meaning}</p>
                      <ul className="text-sm list-disc pl-6 mt-2">
                        {word.sentences.map((sentence, index) => (
                          <li key={index}>{sentence}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-white rounded-lg shadow-md p-2 h-[500px] overflow-y-scroll">
            <h2 className="text-xl text-teal-400 font-bold mb-4">IELTS Vocabulary</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {vocabularyWords
                .filter((word) => !isWordInUserVocabulary(word.word))
                .map((word) => (
                  <div
                    key={word.word}
                    className={`bg-white rounded-lg shadow-md p-1 cursor-pointer text-center ${
                      selectedWords.includes(word) ? 'bg-blue-500 text-white' : ''
                    }`}
                    onClick={() => handleWordSelect(word)}
                  >
                    {word.word}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      {saveSuccess && (
        <div className="bg-green-200 text-green-800 p-2 rounded-md mt-4 text-center">
          Vocabulary saved successfully!
        </div>
      )}
      <div className="mt-8 flex justify-center gap-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center"
          onClick={handleAdd}
        >
          <FaSave className="mr-2" />
          Add
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center"
          onClick={() => setEditMode(!editMode)}
        >
          <FaEdit className="mr-2" />
          {editMode ? 'Done' : 'Edit'}
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center"
          onClick={handleSave} // Attach event handler to the Save button
        >
          <FaSave className="mr-2" />
          Save
        </button>

      </div>
    </div>
  );
};

export default VocabularyBuilder;



// const vocabularyWords = [
//   'Abstruse', 'Acquiesce', 'Amalgamate', 'Antediluvian', 'Approbation',
//   'Assiduous', 'Blandishment', 'Bucolic', 'Cacophony', 'Circumlocution',
//   'Concomitant', 'Draconian', 'Effervescent', 'Elegy', 'Elysian',
//   'Emollient', 'Ephemeral', 'Erudite', 'Esoteric', 'Evanescent',
//   'Extant', 'Fecund', 'Feral', 'Furtive', 'Gargantuan',
//   'Gustatory', 'Halcyon', 'Harangue', 'Hebdomadal', 'Hegemony',
//   'Hermetic', 'Histrionic', 'Hortatory', 'Hubristic', 'Idiosyncratic',
//   'Imbricated', 'Immanent', 'Immutable', 'Importunate', 'Inchoate',
//   'Ineluctable', 'Inimical', 'Insouciant', 'Intransigent', 'Irascible',
//   'Lachrymose', 'Leitmotif', 'Loquacious', 'Luminous',
// ];