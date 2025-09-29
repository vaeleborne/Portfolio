// app/page.tsx
"use client";

import React from "react";

const GrowingPassion: React.FC = () => {
  return (
    <>
      <div className="row">
        <div className="col px-0">
          <h5 className="text-color-bright">Adding Fuel To My Passion</h5>
          <p>
            That was the start of one of my greatest passions in life: programming. At first, I built 
            small console-based applications to help with my homework. However, I quickly wanted to learn more.
            I explored various graphics libraries and dabbled in Allegro before settling on
            <span className="text-color-bright"> SFML</span> for its clean design and simple yet expansive functionality.
          </p>

          <p>
            I recreated classics like <em>Pong, Brick Breaker, and Snake.</em> I even attempted to simple 
            multi-level platformer. These projects taught me the fundamentals of game loops, rendering, 
            game state management and the ever so useful strong foundation in <b>C++.</b>
          </p>
          <hr />
        </div>
      </div>
    </>
  );
};

export default GrowingPassion;
