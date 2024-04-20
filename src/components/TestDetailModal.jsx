// TestDetailModal.js
import React from 'react';

const TestDetailModal = ({ isOpen, onClose, testDetail }) => {
  if (!isOpen || !testDetail) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
        <div className="bg-white rounded-lg p-6 z-20">
          <h2 className="text-2xl font-bold mb-4">Test Detail</h2>
          {/* Display the test detail data */}
          <p>Date: {testDetail.date}</p>
          <p>Overall Band: {testDetail.overallBand}</p>
          {/* Add more test detail fields as needed */}
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestDetailModal;