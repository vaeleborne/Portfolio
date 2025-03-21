// app/page.tsx
"use client";

import React from "react";

const AboutImageBreak: React.FC = () => {
  return (
    <>
      <div className="row">
        <div className="col offset-lg-2 pr-0">
          <img className="img-fluid" src="/imgs/snake.png" alt="First slide" />
          <hr />
        </div>
      </div>
    </>
  );
};

export default AboutImageBreak;
