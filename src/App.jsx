import React from 'react';
import AirQualityContainer from './AirQualityContainer';
import Image from './Image';
import AirQualtiyWidget from './AirQualityWidget';
import './styles/app.css';
import Title from './Title';
import AirQualityWidget from './AirQualityWidget';

export default function App() {
  return (
    <div className="main-container">
      <Title title="Take a breath" />
      <div className="content">
        <Image/>
        <AirQualtiyWidget city="Cracow" aqi={17} airQuality="good"/>
        <AirQualtiyWidget city="Warsaw" aqi={18} airQuality="good"/>
      </div>
    </div>
  );
}
