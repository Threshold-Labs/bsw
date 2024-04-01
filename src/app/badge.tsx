"use client";

import React, { useEffect, useState } from "react";
import Triangle from "./triangle";
import ZigzagCanvas from "./zigzagcanvas";
import Image from "next/image";
// import mountains image
import mountains from "../../public/Mountains.png";

const Badge = ({ person }) => {
  return (
    <div className="badge z-10 flex w-96 rounded-md border border-orange-500 p-2">
      <div className="w-2/3">
        <Image
          src={mountains}
          alt="background image of mountains"
          style={{
            position: "absolute",
            zIndex: -1,
            opacity: 0.25,
            width: "300px",
          }}
        />
        <div className="flex flex-row justify-around p-2">
          <div className="flex w-48 flex-col">
            <h1>{person.name}</h1>
            <h2>{person.linkedIn}</h2>

            {/* mountains image */}

            <div className="grid">
              {person.skills.map((skill, index) => (
                <p key={index}>{skill}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/3">
        <ZigzagCanvas
          triangleBase={50} // Set the base of your triangles
          triangleHeight={50} // For equilateral triangles, height is (sqrt(3)/2) times the base
          rows={3} // Set the number of rows you want
          cols={3} // Set the number of columns you want
          colors={["#307C82", "#97bb90", "#FF9C2B"]} // Your color array
        />
      </div>
    </div>
  );
};

export default Badge;
