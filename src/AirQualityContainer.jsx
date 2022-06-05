import React from 'react';
import "./styles/air-quality-widget.css"

export default function AirQualityContainer ({ children }) {
  return (
    <div className="air-quality-container">
      {children}
    </div>
  )
}
