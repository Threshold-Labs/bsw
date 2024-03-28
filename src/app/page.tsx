"use client";

import Image from "next/image";
import Triangle from "./triangle";
import ZigzagCanvas from "./zigzagcanvas";

export default function Home() {
  return (
    <main className="w-full bg-black">
      {/* <Triangle width={100} height={100} color="blue" /> */}

      {/* my Boulder Startup Week Badge */}
      <div className="m-auto flex flex-col items-center">
        {/* get image from public folder */}
        {/* <Image
          src="/mountains.png"
          alt="Boulder Startup Week Badge"
          width={300}
          height={300}
        /> */}
        <h1 className="text-center text-4xl">
          My Boulder Startup Week Badge 2024
        </h1>

        <div className="">
          <ZigzagCanvas
            triangleBase={50} // Set the base of your triangles
            triangleHeight={50} // For equilateral triangles, height is (sqrt(3)/2) times the base
            rows={20} // Set the number of rows you want
            cols={30} // Set the number of columns you want
            colors={["#307C82", "#97bb90", "#FF9C2B"]} // Your color array
          />
        </div>
      </div>
    </main>
  );
}
