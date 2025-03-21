// app/page.tsx
"use client";

import React from "react";
import AboutHeader from "./AboutHeading";
import GrowingPassion from "./GrowingPassion";
import AboutImageBreak from "./AboutImageBreak";
import CollegeYears from "./CollegeYears";
import Reflection from "./Reflection";

const About: React.FC = () => {
  return (
    <div className="row">
      <div className="col-md-9 offset-md-1">
        <h4 className="highlight">
          About Me
          <hr />
        </h4>
        <div className="row mx-3 mx-md-0">
          <AboutHeader />
          <GrowingPassion />
          <AboutImageBreak />
          <CollegeYears />
          <Reflection />
        </div>
      </div>
    </div>
  );
};

export default About;
