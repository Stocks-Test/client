import { api } from './helpers/api';
import ThreeDays from '../models/ThreeDays';
import React, { useEffect, useState } from 'react';
import '../styles/ThreeDaysDisplay.scss';
import StockChart from '../components/StockChartThreeDays'

const ThreeDaysDisplay = () => {
  const [dates, setDates] = useState([]);
  const [daysDifference, setDaysDifference] = useState();
  const [numberOfStocks, setNumberOfStocks] = useState();
  const [companyData, setCompanyData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api(false, false).get('/test');
        const threeDays = new ThreeDays(response.data);
  
        // Clone the dates array to avoid direct mutation
        const datesClone = [...threeDays.mappedChangesNormalized[0]];
        datesClone.splice(0, 1); // Remove the first element
  
        setDates(datesClone);
  
        const comp1 = threeDays.mappedChangesNormalized[1];
        const comp2 = threeDays.mappedChangesNormalized[2];
        const comp3 = threeDays.mappedChangesNormalized[3];
        const comp4 = threeDays.mappedChangesNormalized[4];
        const comp5 = threeDays.mappedChangesNormalized[5];
  
        setCompanyData([comp1, comp2, comp3, comp4, comp5]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

const dates1 = ["2023-03-03", "2023-03-04", "2023-03-05"];
const companyData1 = [
  ["A", 1, 2, 3],
  ["B", 2, 4, 6],
  ["C", 3, 7, 4]
];

  return (
    <div>
      <StockChart dates={dates1} companyData={companyData1}/>
    </div>
  )
};

export default ThreeDaysDisplay;
