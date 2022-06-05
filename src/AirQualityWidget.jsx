import React, { useState, useEffect } from 'react';
import "./styles/air-quality-widget.css"
import { fetchAirData } from './api/airQuality.api';

export default function AirQualityWidget ({ city }) {
    const [airData, setAirData] = useState({ aqi: 0, airQuality: "Default"});
    useEffect(() => {
      fetchAirData(city).then((fetchedAirData) => {
        setAirData(fetchedAirData);
      });
    }, []);

  
    return (
    <div className="air-quality-widget-container">
        <div className="air-quality-city">{city}</div>
        <div className="air-quality-info-container">
           <div className="air-quality-aqi">{airData.aqi}</div>
           <div className="air-quality-label">{airData.airQuality}</div>
        </div>
        <button className="air-quality-refresh-button" onClick={() => alert("Air data refreshed")}>refresh</button>
    </div>
    );
}
