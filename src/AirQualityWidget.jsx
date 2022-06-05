import React, { useState, useEffect } from 'react';
import "./styles/air-quality-widget.css"
import { fetchAirData } from './api/airQuality.api';


export default function AirQualityWidget () {
    return (
        <div className="air-quality-widget-container">
        <div className="air-quality-city">Cracow</div>
        <div className="air-quality-info-container">
            <div className="air-quality-aqi">17</div>
            <div className="air-quality-label">Good</div>
        </div>
            <button className="air-quality-refresh-button" onClick={() => alert("Air data refreshed")}>refresh</button>
        </div>
    );
}
