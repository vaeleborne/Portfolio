// app/page.tsx
"use client";

import React from "react";
import Image from "next/image";

const AboutImageBreak: React.FC = () => {
  return (
    <>
      <div className="row">
        <div className="col offset-lg-2 pr-0">
          <Image
            src="/imgs/snake.png"
            alt="First slide"
            width={640}
            height={360}
            className="img-fluid"
            style={{ width: "100%", height: "auto" }}
          />
          <hr />
        </div>
      </div>
    </>
  );
};

export default AboutImageBreak;
