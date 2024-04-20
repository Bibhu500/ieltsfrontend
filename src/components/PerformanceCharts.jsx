import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-luxon';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

Chart.register(...registerables);

const PerformanceCharts = ({ testData }) => {
  const learningChartRef = useRef(null);
  const listeningChartRef = useRef(null);
  const writingChartRef = useRef(null);
  const readingChartRef = useRef(null);
  const mockTestChartRef = useRef(null);
  const overallChartRef = useRef(null);
  const navigate = useNavigate();

  const handleBarClick = async (event, elements, chartId) => {
    if (elements.length > 0) {
      const clickedDataPoint = elements[0];
      const { datasetIndex, index } = clickedDataPoint;
      if (testData[chartId].id && testData[chartId].id[index]) {

        const clickedTestId = testData[chartId].id[index];
        console.log(clickedTestId)
        const data = {"id": clickedTestId}
        try {
          const token = localStorage.getItem('token');
          const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/${chartId}/fetch-saved`, { data }, {headers: {Authorization: `Bearer ${token}` }});

          const testDetails = response.data;
          console.log(response)
          navigate(`/${chartId}results`, { state: testDetails });
        } catch (error) {
          console.error('Error fetching test details:', error);
        }
      } 
      else {
        console.warn('Test ID not available for the clicked data point.');
      }
    }
  };

  const createChart = (ref, data, label, chartId) => {
    const ctx = ref.current.getContext('2d');
    const screenWidth = window.innerWidth;
    // console.log(data);

    let fontSize = 12;
    if (screenWidth > 1024) {
      fontSize = 16;
    } else if (screenWidth > 768) {
      fontSize = 14;
    }

    if (ref.current.chart) {
      ref.current.chart.destroy();
    }

    ref.current.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.time,
        datasets: [{
          label: label,
          data: data.overallBand,
          backgroundColor: 'rgba(75, 192, 192, 0.8)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            min: 0,
            max: 9,
            ticks: {
              stepSize: 1
            }
          },
          x: {
            type: 'time',
            time: {
              unit: 'day'
            }
          }
        },
        plugins: {
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            bodyFont: {
              size: fontSize,
            },
            displayColors: false,
            callbacks: {
              label: function(context) {
                return `Overall Band: ${context.raw}`;
              }
            }
          }
        },
        onClick: (event, elements) => handleBarClick(event, elements, chartId),
      }
    });

    return ref.current.chart;
  };

  useEffect(() => {
    // console.log(testData);
    const learningChart = createChart(learningChartRef, testData.speaking, 'Learning', 'speaking');
    const listeningChart = createChart(listeningChartRef, testData.listening, 'Listening', 'listening');
    const writingChart = createChart(writingChartRef, testData.writing, 'Writing', 'writing');
    const readingChart = createChart(readingChartRef, testData.reading, 'Reading', 'reading');

    return () => {
      learningChart.destroy();
      listeningChart.destroy();
      writingChart.destroy();
      readingChart.destroy();
    };
  }, [testData]);

  return (
    <div className="grid grid-cols-1 w-full sm:grid-cols-2 lg:grid-cols-2 gap-2 p-1">
      <div>
        <canvas ref={learningChartRef}></canvas>
      </div>
      <div>
        <canvas ref={listeningChartRef}></canvas>
      </div>
      <div>
        <canvas ref={writingChartRef}></canvas>
      </div>
      <div>
        <canvas ref={readingChartRef}></canvas>
      </div>
      <div>
        {/* <canvas ref={mockTestChartRef}></canvas> */}
      </div>
      <div>
        {/* <canvas ref={overallChartRef}></canvas> */}
      </div>
    </div>
  );
};

export default PerformanceCharts;