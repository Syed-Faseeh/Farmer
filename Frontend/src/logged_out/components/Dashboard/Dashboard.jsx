import React, { useState, useEffect, useRef } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/firestore';
import Chart from 'chart.js/auto';
import AppLayout from '../../../layout/AppLayout';
import styles from './Dashboard.css';

export default function Dashboard() {
  const [animalIds, setAnimalIds] = useState([]);
  const [selectedAnimalId, setSelectedAnimalId] = useState('');
  const [temperatureData, setTemperatureData] = useState([]); 
  const [humidityData, setHumidityData] = useState([]);
  const [co2Data, setCO2Data] = useState([]);
  const [feedsConsumedData, setFeedsConsumedData] = useState([]);
  const [waterConsumedData, setWaterConsumedData] = useState([]);
  const [weightData, setWeightData] = useState([]);
  const [timestamps, setTimestamps] = useState([]); 
  const [timed, setTimes] = useState(""); 
  const chartRefs = useRef([]);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyChrRYhNgnGh0C8a5rnkSYcr1hFCKX9eS8",
      authDomain: "objectdetect-9b57f.firebaseapp.com",
      projectId: "objectdetect-9b57f",
      databaseURL: "https://objectdetect-9b57f-default-rtdb.asia-southeast1.firebasedatabase.app",
      storageBucket: "objectdetect-9b57f.appspot.com",
      messagingSenderId: "929994843586",
      appId: "1:929994843586:web:5983853990f4ca0451e25b",
      measurementId: "G-6XL0N5YM85"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    const firestore = firebase.firestore();
    
    // Fetch animal IDs from Firestore the collection names
    firestore.collection('metadata').get().then(querySnapshot => {
      const ids = [];
      querySnapshot.forEach(doc => {
        ids.push(doc.id);
        console.log(doc.data()); // prints the data of each document
      });
      setAnimalIds(ids);
    });
    
    // Fetch data from Firebase Realtime Database
    const database = firebase.database();
    const temperatureRef = database.ref('Temperature');
    const humidityRef = database.ref('Humidity');
    const co2Ref = database.ref('CO2');

    temperatureRef.on('value', (snapshot) => {
      const temperatureValue = snapshot.val();
      setTemperatureData(prevData => [...prevData, parseFloat(temperatureValue)]);
      setTimestamps(prevTimestamps => [...prevTimestamps, new Date().toLocaleTimeString()]);
    });

    humidityRef.on('value', (snapshot) => {
      const humidityValue = snapshot.val();
      setHumidityData(prevData => [...prevData, parseFloat(humidityValue)]);
      setTimestamps(prevTimestamps => [...prevTimestamps, new Date().toLocaleTimeString()]);
    });

    co2Ref.on('value', (snapshot) => {
      const co2Value = snapshot.val();
      setCO2Data(prevData => [...prevData, parseFloat(co2Value)]);
      setTimestamps(prevTimestamps => [...prevTimestamps, new Date().toLocaleTimeString()]);
    });

    return () => {
      temperatureRef.off();
      humidityRef.off();
      co2Ref.off();
    };
  }, []); // Add empty dependency array to run only once

  const handleAnimalIdChange = async (event) => {
    const selectedId = event.target.value;
    setSelectedAnimalId(selectedId);

    try {
      const querySnapshot = await firebase.firestore().collection(selectedId).get();
      const feedsConsumed = [];
      const WaterConsumed = [];
      const WeightKgs = [];
      querySnapshot.forEach(doc => {
        feedsConsumed.push(parseFloat(doc.data().FeedsConsumedKgs));  // Adjust the field name accordingly
        WaterConsumed.push(parseFloat(doc.data().WaterConsumed));  // Adjust the field name accordingly
        WeightKgs.push(parseFloat(doc.data().WeightKgs));  // Adjust the field name accordingly
      });
      setFeedsConsumedData(feedsConsumed);
      setWeightData(WeightKgs);
      setWaterConsumedData(WaterConsumed);
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  };

  const createChart = (canvasId, data, label, backgroundColor, borderColor) => {
    const ctx = document.getElementById(canvasId).getContext('2d');
    const chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: timestamps,
        datasets: [
          {
            label: label,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: 2,
            pointRadius: 3,
            pointHoverRadius: 5,
            data: data,
          }
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            ticks: {
              color: '#999',
              font: {
                size: 12,
              },
            },
            grid: {
              display: false,
            },
          },
          y: {
            ticks: {
              color: '#999',
              font: {
                size: 12,
              },
            },
            grid: {
              display: '#999',
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: '#aaa',
              font: {
                size: 14,
              },
            },
          },
        },
      },
    });
    chartRefs.current.push(chartInstance);
  };

  useEffect(() => {
    // Clear previous charts
    chartRefs.current.forEach(chart => chart.destroy());
    chartRefs.current = [];

    createChart('feedsConsumedChart', feedsConsumedData, 'Feeds Consumed (Kgs)', 'rgba(75, 192, 192, 0.2)', 'rgba(75, 192, 192, 1)');
    createChart('waterConsumedChart', waterConsumedData, 'Water Consumed (L)', 'rgba(153, 102, 255, 0.2)', 'rgba(153, 102, 255, 1)');
    createChart('weightChart', weightData, 'Weight (Kgs)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 159, 64, 1)');

    // Cleanup function to destroy charts
    return () => {
      chartRefs.current.forEach(chart => chart.destroy());
    };
  }, [feedsConsumedData, waterConsumedData, weightData, timestamps]);

  return (
    <AppLayout isSidebar={true}>
      <main className="cd__main">
        <div className="container-fluid">
          <div className="row mt-1">
            <div className="col-2"></div>
            <div className="col-9 mt-2">
              <button type="button" className="btn btn-primary ms-3">
                SHAAB 01 / F.A
              </button>
              <h1 className="text-center mb-5">Reports</h1>
              <div className="row">
                <div className="col-12 text-center mb-5">
                  <h3>Select Animal ID</h3>
                  <select className="form-select" value={selectedAnimalId} onChange={handleAnimalIdChange}>
                    <option value="">Select Animal ID</option>
                    {animalIds.map(id => (
                      <option key={id} value={id}>{id}</option>
                    ))}
                  </select>
                </div>
                <div className="col-4 text-center">
                  <div className="bg-white mt-2 border">
                    <canvas id="feedsConsumedChart"></canvas>
                  </div>
                </div>
                <div className="col-4 text-center">
                  <div className="bg-white mt-2 border">
                    <canvas id="waterConsumedChart"></canvas>
                  </div>
                </div>
                <div className="col-4 text-center">
                  <div className="bg-white mt-2 border">
                    <canvas id="weightChart"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
