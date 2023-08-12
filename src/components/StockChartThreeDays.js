import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';
import { Line } from 'react-chartjs-2';

const StockChartThreeDays = ({ dates, companyData }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); // To store the Chart.js instance

  useEffect(() => {
    // Function to get a random color for each line
    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    // Prepare data for the Chart.js format
    const chartData = {
      labels: dates,
      datasets: companyData.map((company, index) => ({
        label: company[0], // Company name as the label
        data: company.slice(1), // Slice the array to remove the company name
        borderColor: getRandomColor(), // Get a random color for each line
        borderWidth: 2,
      })),
    };

    // Destroy previous Chart.js instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create the chart after the component is mounted
    const ctx = chartRef.current.getContext('2d');
    chartInstanceRef.current = new Chart(ctx, {
      type: 'line',
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup chart on component unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [dates, companyData]);

  return <canvas ref={chartRef} width="400" height="200"></canvas>;
};

export default StockChartThreeDays;
