// app/page.tsx
"use client";

import React from "react";

const AboutHeader: React.FC = () => {
  return (
    <>
      {/* <div className="col-lg-2 px-0">
        <p className="text-color-bright">Sic Parvis Magna:</p>
      </div> */}
      <div className="col px-0">
        <h4 className="text-color-bright">Sic Parvis Magna – "Greatness From Small Beginnings"  </h4>
        <hr />
        <h5 className="text-color-bright">My Start</h5>
        <p>
          Hello! My name is <strong className="text-color-bright">Dylan</strong>{" "}
          and I have always loved tackling creative and technical challenges, especially 
          when problem solving is involved.
        </p>
        <p>
          My interest in programming began in the 8th grade. That summer, I set out to learn what is involved
          in making a game. In doing so I discovered C++ tutorials. This led me to spending countless nights 
          coding, often until 2am. I loved every second of it, even if I was exhausted in the morning before school.
        </p>
        <hr />
      </div>
    </>
  );
};

export default AboutHeader;
