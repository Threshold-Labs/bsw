"use client";

import Image from "next/image";
import Triangle from "./triangle";
import ZigzagCanvas from "./zigzagcanvas";
import Badge from "./badge";

interface Person {
  name: string;
  linkedin: string;
  url: string;
  skills: string[];
}

export default function Home() {
  // make a list of people
  //
  const tracks = [
    "Clean Tech",
    "Founder",
    "Health Tech",
    "Operator",
    "Self Exploration",
    "Technology",
    "Popular",
  ];

  const people: Person[] = [
    {
      name: "John Doe",
      linkedin: "https://www.linkedin.com/in/johndoe/",
      url: "https://www.johndoe.com",
      skills: ["JavaScript", "React", "Node.js"],
    },
    {
      name: "Jane Doe",
      linkedin: "https://www.linkedin.com/in/janedoe/",
      url: "https://www.janedoe.com",
      skills: ["Python", "Django", "Flask"],
    },
    {
      name: "Alice Doe",
      linkedin: "https://www.linkedin.com/in/alicedoe/",
      url: "https://www.alicedoe.com",
      skills: ["Ruby", "Rails"],
    },
  ];

  return (
    <main className="w-full bg-black">
      {/* <Triangle width={100} height={100} color="blue" /> */}

      {/* my Boulder Startup Week Badge */}
      <div className="m-auto flex flex-col items-center gap-20">
        {/* get image from public folder */}
        {/* <Image
          src="/mountains.png"
          alt="Boulder Startup Week Badge"
          width={300}
          height={300}
        /> */}

        <div>
          <h1>Archetypes</h1>
          <div className="grid grid-cols-4 gap-4">
            {tracks.map((track, index) => (
              <div
                key={index}
                className="border-white-2 rounded-md border pt-5 text-center"
              >
                <ZigzagCanvas
                  triangleBase={50} // Set the base of your triangles
                  triangleHeight={50} // For equilateral triangles, height is (sqrt(3)/2) times the base
                  rows={3} // Set the number of rows you want
                  cols={3} // Set the number of columns you want
                  colors={["#307C82", "#97bb90", "#FF9C2B"]} // Your color array
                />
                <h1 className="text-2xl">{track}</h1>
              </div>
            ))}
          </div>
        </div>

        <h1 className="text-center text-4xl">
          My Boulder Startup Week Badge 2024
        </h1>

        <div className="grid gap-6">
          {people.map((person, index) => (
            <Badge key={index} person={person} />
          ))}
        </div>

        {/* <div className=""> */}
        <ZigzagCanvas
          triangleBase={50} // Set the base of your triangles
          triangleHeight={50} // For equilateral triangles, height is (sqrt(3)/2) times the base
          rows={30} // Set the number of rows you want
          cols={35} // Set the number of columns you want
          colors={["#307C82", "#97bb90", "#FF9C2B"]} // Your color array
        />
        <ZigzagCanvas
          triangleBase={50} // Set the base of your triangles
          triangleHeight={50} // For equilateral triangles, height is (sqrt(3)/2) times the base
          rows={4} // Set the number of rows you want
          cols={4} // Set the number of columns you want
          colors={["#307C82", "#97bb90", "#FF9C2B"]} // Your color array
        />
        <div className="block h-11"></div>
        <ZigzagCanvas
          triangleBase={50} // Set the base of your triangles
          triangleHeight={50} // For equilateral triangles, height is (sqrt(3)/2) times the base
          rows={3} // Set the number of rows you want
          cols={3} // Set the number of columns you want
          colors={["#307C82", "#97bb90", "#FF9C2B"]} // Your color array
        />
        <div className="flex gap-20">
          <ZigzagCanvas
            triangleBase={50} // Set the base of your triangles
            triangleHeight={50} // For equilateral triangles, height is (sqrt(3)/2) times the base
            rows={3} // Set the number of rows you want
            cols={3} // Set the number of columns you want
            colors={["#307C82", "#97bb90", "#FF9C2B"]} // Your color array
          />

          <ZigzagCanvas
            triangleBase={50} // Set the base of your triangles
            triangleHeight={50} // For equilateral triangles, height is (sqrt(3)/2) times the base
            rows={3} // Set the number of rows you want
            cols={3} // Set the number of columns you want
            colors={["#307C82", "#97bb90", "#FF9C2B"]} // Your color array
          />
          <ZigzagCanvas
            triangleBase={50} // Set the base of your triangles
            triangleHeight={50} // For equilateral triangles, height is (sqrt(3)/2) times the base
            rows={3} // Set the number of rows you want
            cols={3} // Set the number of columns you want
            colors={["#307C82", "#97bb90", "#FF9C2B"]} // Your color array
          />
          <ZigzagCanvas
            triangleBase={50} // Set the base of your triangles
            triangleHeight={50} // For equilateral triangles, height is (sqrt(3)/2) times the base
            rows={3} // Set the number of rows you want
            cols={3} // Set the number of columns you want
            colors={["#307C82", "#97bb90", "#FF9C2B"]} // Your color array
          />
        </div>
        {/* </div> */}
      </div>
    </main>
  );
}
