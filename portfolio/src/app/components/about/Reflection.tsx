// app/page.tsx
"use client";

import React from "react";

const Reflection: React.FC = () => {
  return (
    <>
      <div className="row">
        <div className="col px-0">
          <h5 className="text-color-bright">Reflection</h5>
          <p>
            From the beginning of my journey to this very day, one thing has remained consistant:
            my love of learning new technologies and deepening my expertise in the ones I use daily.
          </p>

          <p>
            This portfolio itself is practice. Originally built as an express app, it is now converted 
            to be using 
            <span className="text-color-bright"> HTML5, CSS, TypeScript, React, Next.js, and Bootstrap. </span>
            It is a reflection of my commitment to constant growth as a developer.
          </p>

        </div>
      </div>
    </>
  );
};

export default Reflection;
