// app/page.tsx
import React from "react";
import AboutHeader from "./AboutHeading";
import GrowingPassion from "./GrowingPassion";
import AboutImageBreak from "./AboutImageBreak";
import CollegeYears from "./CollegeYears";
import Reflection from "./Reflection";

export default function About() {
  return (
    <div className="row  mx-3 mx-md-0">
      <div className="col-md-9 offset-md-1">
        <h3 className="highlight">
          About Me
          <hr />
        </h3>
        <div className="row px-0 mx-0">
          <AboutHeader />
          <GrowingPassion />
          <AboutImageBreak />
          <CollegeYears />
          <Reflection />
        </div>
      </div>
    </div>
  );
}
