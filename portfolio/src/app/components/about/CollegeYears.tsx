// app/page.tsx
import React from "react";

export default function CollegeYears() {
  return (
    <>
      <div className="row">
        <div className="col px-0">
          <h5 className="text-color-bright">The College Years</h5>
          <p>
            I first entered college in 2016 as a dual major in 
            <b className="text-color-bright"> Software Engineering</b> and 
            <b className="text-color-bright"> Embedded Systems Engineering</b>. While I loved both fields, I had to step away from 
            school in 2018 for personal/family reasons.
          </p>

          <p>
            During that time, I continued to code, experiment with new technologies, and work on personal
            projects to keep my skills expanding.
          </p>

          <p>
            <em className="text-color-bright">Now, I'm back in school</em> and have been pursuing my 
            <b className="text-color-bright"> Bachelor of Science in Software Engineering </b> with an expected graduation 
            of 2027! I chose to focus on Software Engineering alone to balance costs and maximize my
            more immediate career goals. Returning to school has been an exciting opportunity to deepen my
            knowledge, work with new technologies, and push towards completing what I started.
          </p>
          <hr />
        </div>
      </div>
    </>
  );
}

