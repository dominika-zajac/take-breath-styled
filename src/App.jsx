import React from 'react';
import Image from './Image';
import AirQualtiyWidget from './AirQualityWidget';
import './styles/app.css';
import Title from './Title';

export default function App() {
  return (
    <div class="main-container">
      <Title title="Take a breath" />
      <div class="content">
        <Image iamgeUrl="https://github.com/dominika-zajac/take-breath-styled/blob/master/src/assets/cat.png?raw=true"/>
        <AirQualtiyWidget city="Cracow" aqi={17} airQuality="good"/>
        <AirQualtiyWidget city="Warsaw" aqi={18} airQuality="good"/>
      </div>
    </div>
  );
}
