import React from 'react';
import "./styles/air-quality-widget.css"


const AirQualityWidget = ({ city, aqi, airQuality }) => (
    <div className="air-quality-widget-container">
      <div className="air-quality-city">{city}</div>
      <div className="air-quality-info-container">
        <div className="air-quality-aqi">{aqi}</div>
        <div className="air-quality-label">{airQuality}</div>
      </div>
      <button className="air-quality-refresh-button" onClick={() => alert("Air data refreshed")}>refresh</button>
    </div>
  );

export default AirQualityWidget;
