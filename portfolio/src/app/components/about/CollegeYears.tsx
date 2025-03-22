// app/page.tsx
"use client";

import React from "react";

const CollegeYears: React.FC = () => {
  return (
    <>
      <div className="row">
        <div className="col offset-lg-2 px-0">
          <h6 className="text-color-bright">The College Years</h6>
          <p>
            Now if we fast forward to College I began a dual major in{" "}
            <span className="text-color-bright">
              Software and Embedded Systems Engineering
            </span>
            , in what little free time I had between working and school I still
            spent a lot of time practicing other languages and that is when my
            interest in{" "}
            <span className="text-color-bright">Web Development</span> began. I
            started by learning the basic front end stuff such as:{" "}
            <span className="text-color-bright">HTML, CSS, and JS</span> This
            was great for making some basic sites for fun and to help organize
            myself. But I heard the call to backend and making the routes work
            rather than just loading a different html file. To do this I chose
            to learn fullstack development. I first learned the{" "}
            <span className="text-color-bright">MEAN stack</span> and later the{" "}
            <span className="text-color-bright">MERN stack</span>. Currently I
            am practicing with{" "}
            <span className="text-color-bright">Next.js</span>, in fact that is{" "}
            what this website is now using. It used to be built mostly on{" "}
            <span className="text-color-bright">Express.js, and EJS,</span> the{" "}
            change reflects that I like to constantly learn and adapt to the{" "}
            ever changing world of web development. Along the way I have also{" "}
            dabbled in{" "}
            <span className="text-color-bright">
              Java, Ruby, Python, C, C#, R, Rust, JSON, SQL, and MongoDB
            </span>{" "}
            As well as what will likely always be my favorite programming
            language as it was my first,{" "}
            <span className="text-color-bright">C++</span>
          </p>
          <hr />
        </div>
      </div>
    </>
  );
};

export default CollegeYears;
