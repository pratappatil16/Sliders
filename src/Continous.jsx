import React, { useState } from 'react';
import './Continous.css'; 


function Continous(props) {

  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="Continous">
      <div className="slideContainer">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className="custom-slider"
          style={{ background: `linear-gradient(to right, #4CAF50 ${value}%, #ddd ${value}%)` }}
        />
        <div className="slider-label">Value: {value}</div>
      </div>
    </div>
  );
}

export default Continous;
