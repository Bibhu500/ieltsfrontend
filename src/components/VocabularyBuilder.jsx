import React, { useState, useEffect } from 'react';
import { FaEdit, FaSave, FaTimes, FaSearch, FaCheckSquare, FaSquare } from 'react-icons/fa';
import axios from 'axios';
import vocabularyWords from './vocabularyWords';

const VocabularyBuilder = () => {
  const [selectedWords, setSelectedWords] = useState([]);
  const [userVocabulary, setUserVocabulary] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterLevel, setFilterLevel] = useState('');
  const [userVocabularyFilterLevel, setUserVocabularyFilterLevel] = useState('');

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
    setSelectedWords(selectedWords.filter((w) => w.word !== word.word));
  };

  const handleAdd = () => {
    const uniqueWords = [...new Set([...userVocabulary, ...selectedWords])];
    setUserVocabulary(uniqueWords);
    setSelectedWords([]);
    setEditMode(false);
  };

  const handleSave = () => {
    const token = localStorage.getItem('token');

    axios
      .post(`${import.meta.env.VITE_BASE_URL}/vocabulary/save`, userVocabulary, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log('Vocabulary saved successfully:', response.data);
        setSaveSuccess(true);
        setTimeout(() => {
          setSaveSuccess(false);
        }, 3000);
      })
      .catch((error) => {
        console.error('Error saving vocabulary:', error);
      });
  };

  const toggleWordMemorized = (word) => {
    setUserVocabulary(
      userVocabulary.map((w) =>
        w.word === word.word ? { ...w, memorized: !w.memorized } : w
      )
    );
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/vocabulary/getVocabulary`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserVocabulary(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching user vocabulary:', error);
      });
  }, []);

  const filteredVocabularyWords = vocabularyWords.filter((word) => {
    const wordMatchesQuery = word.word.toLowerCase().includes(searchQuery.toLowerCase());
    const levelMatchesFilter = filterLevel === '' || word.level === filterLevel;
    return wordMatchesQuery && levelMatchesFilter;
  });

  const levelCounts = userVocabulary.reduce((counts, word) => {
    counts[word.level] = (counts[word.level] || 0) + 1;
    return counts;
  }, {});
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Vocabulary Builder</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
          <div className="bg-white rounded-lg shadow-md p-4 h-[500px] overflow-y-scroll">
            <h2 className="text-emerald-400 text-xl font-bold mb-2">My Vocabulary List</h2>
            <div className="mb-4">
              <button
                className={`px-4 py-2 rounded-lg ${userVocabularyFilterLevel === 'c2' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setUserVocabularyFilterLevel(userVocabularyFilterLevel === 'c2' ? '' : 'c2')}
              >
                C2 ({levelCounts['c2'] || 0})
              </button>
              <button
                className={`px-4 py-2 ml-2 rounded-lg ${userVocabularyFilterLevel === 'c1' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setUserVocabularyFilterLevel(userVocabularyFilterLevel === 'c1' ? '' : 'c1')}
              >
                C1 ({levelCounts['c1'] || 0})
              </button>
              <button
                className={`px-4 py-2 ml-2 rounded-lg ${userVocabularyFilterLevel === 'b2' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setUserVocabularyFilterLevel(userVocabularyFilterLevel === 'b2' ? '' : 'b2')}
              >
                B2 ({levelCounts['b2'] || 0})
              </button>
              <button
                className={`px-4 py-2 ml-2 rounded-lg ${userVocabularyFilterLevel === 'b1' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setUserVocabularyFilterLevel(userVocabularyFilterLevel === 'b1' ? '' : 'b1')}
              >
                B1 ({levelCounts['b1'] || 0})
              </button>
            </div>
            <ul className="space-y-2">
              {userVocabulary
                .filter((word) => userVocabularyFilterLevel === '' || word.level === userVocabularyFilterLevel)
                .map((word) => (
                  <li key={word.word} className="bg-gray-100 rounded-lg shadow-md p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div
                          className={`p-2 rounded-full cursor-pointer ${
                            word.memorized ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'
                          }`}
                          onClick={() => toggleWordMemorized(word)}
                        >
                          {word.memorized ? <FaCheckSquare /> : <FaSquare />}
                        </div>
                        <div className="ml-4">
                          <span className="text-lg font-bold">{word.word}</span>
                          <p className="text-sm">{word.meaning}</p>
                          <ul className="text-sm list-disc pl-6 mt-2">
                            {word.sentences.map((sentence, index) => (
                              <li key={index}>{sentence}</li>
                            ))}
                          </ul>
                          {word.synonyms && (
                            <div>
                              <strong>Synonyms:</strong>{' '}
                              {word.synonyms.map((synonym, index) => (
                                <span key={index}>
                                  {index > 0 && ', '}
                                  {synonym}
                                </span>
                              ))}
                            </div>
                          )}
                          {word.antonyms && (
                            <div>
                              <strong>Antonyms:</strong>{' '}
                              {word.antonyms.map((antonym, index) => (
                                <span key={index}>
                                  {index > 0 && ', '}
                                  {antonym}
                                </span>
                              ))}
                            </div>
                          )}
                          <div>
                            <strong>Word Type:</strong> {word.wordType}
                          </div>
                          {word.verbForm && (
                            <div>
                              <strong>Verb Form:</strong> {word.verbForm}
                            </div>
                          )}
                          <div>
                            <strong>Level:</strong> {word.level}
                          </div>
                        </div>
                      </div>
                      {editMode && (
                        <button
                          className="text-red-500 hover:text-red-600"
                          onClick={() => handleRemoveWord(word)}
                        >
                          <FaTimes />
                        </button>
                      )}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-white rounded-lg shadow-md p-4 h-[500px] overflow-y-scroll">
            <h2 className="text-xl text-teal-400 font-bold mb-4">IELTS Vocabulary</h2>
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div className="relative mb-4 md:mb-0">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <FaSearch className="text-gray-500" />
                </div>
              </div>
              <div className="flex md:ml-4">
                <button
                  className={`px-4 py-2 rounded-lg ${filterLevel === 'c2' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                  onClick={() => setFilterLevel(filterLevel === 'c2' ? '' : 'c2')}
                >
                  C2
                </button>
                <button
                  className={`px-4 py-2 ml-2 rounded-lg ${filterLevel === 'c1' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                  onClick={() => setFilterLevel(filterLevel === 'c1' ? '' : 'c1')}
                >
                  C1
                </button>
                <button
                  className={`px-4 py-2 ml-2 rounded-lg ${filterLevel === 'b2' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                  onClick={() => setFilterLevel(filterLevel === 'b2' ? '' : 'b2')}
                >
                  B2
                </button>
                <button
                  className={`px-4 py-2 ml-2 rounded-lg ${filterLevel === 'b1' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                  onClick={() => setFilterLevel(filterLevel === 'b1' ? '' : 'b1')}
                >
                  B1
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {filteredVocabularyWords
                .filter((word) => !isWordInUserVocabulary(word.word))
                .map((word) => (
                  <div
                    key={word.word}
                    className={`bg-white rounded-lg shadow-md p-2 cursor-pointer text-center ${
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
          onClick={handleSave}
        >
          <FaSave className="mr-2" />
          Save
        </button>
      </div>
    </div>
  );
};

export default VocabularyBuilder;