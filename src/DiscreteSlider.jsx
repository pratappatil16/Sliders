// src/DiscreteSlider.js
import React, { useState, useEffect } from 'react';
import './DiscreteSlider.css';

const DiscreteSlider = ({ steps = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100] }) => {
  const [valueIndex, setValueIndex] = useState(0);

  const handleChange = (event) => {
    setValueIndex(parseInt(event.target.value, 10));
  };

  const getGradientBackground = () => {
    const percentage = (valueIndex / (steps.length - 1)) * 100;
    return `linear-gradient(to right, #4CAF50 ${percentage}%, #ddd ${percentage}%)`;
  };

  useEffect(() => {
    const slider = document.querySelector('.discrete-slider');
    slider.style.background = getGradientBackground();
  }, [valueIndex]);

  return (
    <div className="discrete-slider-container">
      <input
        type="range"
        min="0"
        max={steps.length - 1}
        value={valueIndex}
        onChange={handleChange}
        className="discrete-slider"
        step="1"
      />
      <div className="slider-values">
        {steps.map((step, index) => (
          <span
            key={index}
            className={`slider-value ${index === valueIndex ? 'active' : ''}`}
          >
            {step}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DiscreteSlider;
