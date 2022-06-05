import React from 'react';
import AirQualityContainer from './AirQualityContainer';
import Image from './Image';
import AirQualtiyWidget from './AirQualityWidget';
import './styles/app.css';
import Title from './Title';

export default function App() {
  return (
    <div className="main-container">
      <h1 className="title">
        Take a breath
      </h1>
      <div className="content">
      </div>
    </div>
  );
}
