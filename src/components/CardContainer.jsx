import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Stories from './Stories';
import Progressbar from './Progressbar';
import Topspace from './Topspace';
import Footer from './Footer';
import PerformanceCharts from './PerformanceCharts';

const CardContainer = () => {
  const [testData, setTestData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/profile/fetch-results`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });        
        setTestData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='ml-0'>
      <Topspace title="Dashboard" />
      <div className="border-t-2 border-b-2 border-gray-300 shadow-md p-0 mb-0">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-1/2 ml-1 md:pr-0 mb-4 md:mb-0 flex justify-center">
            <Stories />
          </div>
          <div className="w-full ml-1 md:w-1/2 md:pl-2 flex justify-center">
            <Progressbar />
          </div>
        </div>
      </div>
      {error && <div>Error: {error}</div>}
      {testData && <PerformanceCharts testData={testData} />}
      <div className="w-full mt-2">
        <Footer/>
      </div>
    </div>
  );
};

export default CardContainer;