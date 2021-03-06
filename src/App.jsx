import React from 'react';
import AirQualityContainer from './AirQualityContainer';
import Image from './Image';
import AirQualtiyWidget from './AirQualityWidget';
import './styles/app.css';
import Title from './Title';

export default function App() {
  return (
    <div class="main-container">
      <Title title="Take a breath" />
      <div class="content">
        <Image />
        <AirQualityContainer>
          <AirQualtiyWidget city="Cracow" />
          <AirQualtiyWidget city="London" />
          <AirQualtiyWidget city="Beijing" />
        </AirQualityContainer>
      </div>
    </div>
  );
}
