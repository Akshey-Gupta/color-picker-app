import React, { useState } from 'react';

const ColorPicker = () => {
  const [color, setColor] = useState('#FFFFFF');

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const getContrastColor = (hexColor) => {
    // Convert hex to RGB
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);

    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Use white text for dark backgrounds, and black text for light backgrounds
    return luminance > 0.5 ? 'black' : 'white';
  };

  const textColor = getContrastColor(color);

  return (
    <div className='color-picker-container'>
      <h1>Color Picker</h1>
      <div className="color-picker" style={{ backgroundColor: color, color: textColor }}>
        <p>Selected Color:  {color}</p>
      </div>
      <label>Select a Color:</label>
      <input type="color" onChange={handleColorChange} />
    </div>
  );
};

export default ColorPicker;
