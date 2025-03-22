// app/page.tsx
"use client";

import React from "react";

const Reflection: React.FC = () => {
  return (
    <>
      <div className="row">
        <div className="col offset-lg-2 px-0">
          <h6 className="text-color-bright">Reflection</h6>
          <p>
            My favorite part of my journey's beginning was, and still is my
            passion for learning new technologies and expanding my knowledge of
            the ones I use all the time. I love getting the chance to work with
            new technologies and working with ones I know well. In fact{" "}
            <span className="text-color-bright"> this very site </span> is a
            form of practice using the following technologies:
          </p>
          {/*Using an inline list with highlights to accent languages used when making this site*/}
          <div className="col ">
            <ul className="list-inline">
              <li className="list-inline-item">
                <span className="text-color-bright">HTML5</span>
              </li>
              <li className="list-inline-item">
                <span className="text-color-bright">CSS</span>
              </li>
              <li className="list-inline-item">
                <span className="text-color-bright">JS</span>
              </li>
              <li className="list-inline-item">
                <span className="text-color-bright">REACT</span>
              </li>
              <li className="list-inline-item">
                <span className="text-color-bright">Next.js</span>
              </li>
              <li className="list-inline-item">
                <span className="text-color-bright">Bootstrap</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reflection;
