import React from 'react';
import './styles/app.css';

export default function Title({ title }) { 
  return(
    <h1 className="title">
      {title}
    </h1>
  )
}
