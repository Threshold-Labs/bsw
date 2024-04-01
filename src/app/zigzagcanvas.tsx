"use client";

import React, { useEffect, useState } from "react";
import Triangle from "./triangle";

interface ZigzagCanvasProps {
  triangleBase: number;
  triangleHeight: number;
  rows: number;
  cols: number;
  colors: string[];
}

interface CanvasProps {
  width: number;
  height: number;
}

// make an interface for the graphic, which will contain the canvas and simple array of the colors, triangle by triangle
//

interface Graphic {
  canvas: CanvasProps;
  user_id: string;
  date: string;
  matrix: string[];
}

const ZigzagCanvas = ({
  triangleBase,
  triangleHeight,
  rows,
  cols,
  colors,
}: ZigzagCanvasProps) => {
  // const triangles = [];
  const [triangles, setTriangles] = useState([]); // Use React state to manage the color
  const correctedHeight = (Math.sqrt(3) / 2) * triangleBase;

  const verticalSpacing = correctedHeight + 10;
  // const randomize = () => {
  //   console.log("randomize triangles");
  //   for (let i = 0; i < triangles.length; i++) {
  //     const color = colors[Math.floor(Math.random() * colors.length)];
  //     triangles[i] = (
  //       <Triangle
  //         key={triangles[i].key}
  //         base={triangleBase}
  //         height={triangles[i].props.height}
  //         initialColor={color}
  //         possibleColors={colors}
  //         style={triangles[i].props.style}
  //       />
  //     );
  //   }
  // };

  useEffect(() => {
    const temp_triangles = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const horizontalOffset = (row % 2) * (triangleBase / 2);
        let xPos = col * triangleBase - 0.4 * triangleBase * col - 10;
        const yPos = row * verticalSpacing;

        const isUpward = (row + col) % 2 === 0;

        // If there is a misalignment, adjust the horizontal position slightly
        // This adjustment will nudge the triangle left or right
        const horizontalAdjustment = isUpward ? -1 : 1; // Tweak this value as necessary
        xPos += horizontalAdjustment;

        const color = colors[Math.floor(Math.random() * colors.length)];

        temp_triangles.push(
          <Triangle
            key={`${row}-${col}`}
            base={triangleBase}
            height={isUpward ? correctedHeight : -correctedHeight}
            initialColor={color}
            possibleColors={colors}
            style={{
              position: "absolute",
              left: `${xPos}px`,
              top: `${yPos}px`,
            }}
          />,
        );
        setTriangles(temp_triangles);
      }
    }
  }, [triangles]);

  const canvasWidth = (cols / 2) * triangleBase + (cols / 2) * 2 + 2; // Adjust the canvasWidth to account for the spacing between triangles
  const horizontalSpacing = triangleBase / 2 - 10; // Assuming 10 is the spacing between triangles
  const adjustedCanvasWidth = canvasWidth + cols * horizontalSpacing;
  const canvasHeight = rows * verticalSpacing;

  return (
    <div className="flex flex-col">
      {/* Randomize Button
      <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        // onClick={randomize()}
      >
        Randomize
      </button> */}
      <div
        style={{
          position: "relative",
          width: canvasWidth,
          height: canvasHeight,
          margin: "0 auto",
        }}
      >
        {triangles}
        {/* Add functionality to select a subset of triangles */}
      </div>
    </div>
  );
};

export default ZigzagCanvas;
