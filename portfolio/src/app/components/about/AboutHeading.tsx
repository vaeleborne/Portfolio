// app/page.tsx
"use client";

import React from "react";

const AboutHeader: React.FC = () => {
  return (
    <>
      <div className="col-lg-2">
        <p className="text-color-bright">Sic Parvis Magna:</p>
      </div>
      <div className="col">
        <h6 className="text-color-bright">My Start</h6>
        <p>
          Hello! My name is <strong className="text-color-bright">Dylan</strong>{" "}
          and I enjoy working on all sorts of creative projects... especially
          when problem solving is needed! My desire to learn programming dates
          back to the 8th grade...
        </p>
        <p>
          It was that summer... I decided to research how to make my own game. I
          found <span className="text-color-bright">C++</span> tutorials and
          dove in. Countless hours of programming, staying up past 3am... and I
          loved every second of it.
        </p>
        <hr />
      </div>
    </>
  );
};

export default AboutHeader;
