import React from 'react';
import Image from './Image';
import AirQualtiyWidget from './AirQualityWidget';
import './styles/app.css';
import Title from './Title';

export default function App() {
  return (
    <div class="main-container">
      <Title />
      <div class="content">
        <Image/>
        <AirQualtiyWidget />
        <AirQualtiyWidget />
      </div>
    </div>
  );
}
