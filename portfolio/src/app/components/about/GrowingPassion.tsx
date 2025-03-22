// app/page.tsx
"use client";

import React from "react";

const GrowingPassion: React.FC = () => {
  return (
    <>
      <div className="row">
        <div className="col offset-lg-2 px-0">
          <h6 className="text-color-bright">Adding Fuel To My Passion</h6>
          <p>
            That was the start of one of—if not my largest—passion in life:{" "}
            <strong className="text-color-bright">Programming!</strong>
            At that point I was making custom console-based applications to help
            with my homework. But I wanted to learn more, so I began exploring
            various graphics libraries.
          </p>
          <p>
            I dabbled in <span className="text-color-bright">Allegro</span>{" "}
            before settling into <span className="text-color-bright">SFML</span>
            . I preferred SFML for its compatibility and clean implementation. I
            made clones of classics like <em>Pong</em>, <em>Brick Breaker</em>,{" "}
            <em>Asteroids</em>, and even attempted a simple multi-level
            platformer.
          </p>
          <hr />
        </div>
      </div>
    </>
  );
};

export default GrowingPassion;
