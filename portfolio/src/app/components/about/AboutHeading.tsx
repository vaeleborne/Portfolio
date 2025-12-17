// app/page.tsx
import React from "react";

export default function AboutHeader() {
  return (
      <div className="col px-0">
        <h4 className="text-color-bright">Sic Parvis Magna </h4>
        <p className="faded mb-3">"Greatness From Small Beginnings"</p>
        <hr />
        <h5 className="text-color-bright">My Start</h5>
        <p>
          Hello! My name is <strong className="text-color-bright">Dylan</strong>{" "}
          and I have always loved creative and technical challenges. From a young age I was fascinated by how things worked, 
          and I found joy in taking things apart and putting them back together. Some of my favorite childhood memories are those
          of using a snap-circuit kit to build simple electronic devices. Followed closely by building various mechnaical contraptions 
          with an Erector set. As I grew older, and my passion for video games grew, I became increasingly curious about how games were made.
        </p>
        <p>
          This is where my passion for programming began. I had to find out what was involved in making games, I found some C++ tutorials, 
          and ended up spending countless nights coding. Sometimes until 2 AM! Even though I was just a beginner, I was hooked. 
        </p>
        <hr />
      </div>
  );
}
