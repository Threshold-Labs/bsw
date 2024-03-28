"use client";

import React, { useState } from "react";

const Triangle = ({ base, height, initialColor, style, possibleColors }) => {
  const [color, setColor] = useState(initialColor); // Use React state to manage the color

  const points =
    height > 0
      ? `0,${height} ${base / 2},0 ${base},${height}`
      : `0,0 ${base / 2},${-height} ${base},0`;

  // Function to toggle the color
  const toggleColor = () => {
    const currentIndex = possibleColors.indexOf(color);
    const nextIndex = (currentIndex + 1) % possibleColors.length;
    setColor(possibleColors[nextIndex]);
  };

  return (
    <svg
      width={base}
      height={Math.abs(height)}
      style={style}
      viewBox={`0 0 ${base} ${Math.abs(height)}`}
      preserveAspectRatio="none"
      onClick={toggleColor} // Add the onClick event here
    >
      <path d={`M ${points} Z`} fill={color} />
    </svg>
  );
};

export default Triangle;
