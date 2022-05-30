import React from 'react';
import './styles/image.css';

const Image = ({ iamgeUrl }) => (
  <img
    className="image-container image-enrichment"
    src={iamgeUrl}
  />
);

export default Image;
