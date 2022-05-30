import React from 'react';
import './styles/image.css';

const Image = ({ imageUrl }) => (
  <img
    className="image-container image-enrichment"
    src={imageUrl}
  />
);

export default Image;
