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
      <Title />
      <div className="content">
        <Image/>
        <AirQualityWidget/>      
        <AirQualityWidget/>  
      </div>
    </div>
  );
}
