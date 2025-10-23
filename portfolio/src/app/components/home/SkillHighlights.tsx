// app/page.tsx
"use client";

import React from "react";

const SkillHighlights: React.FC = () => {
  return (
     <ul className="faded">
            <li>
              <b className="text-color-bright">Languages: </b>
              C, C++, C#, Java, JavaScript, Rust
            </li>
            <li>
              <b className="text-color-bright">Web & Frameworks: </b>
              Node.js, Express.js, Next.js, React, Mongoose, MongoDB
            </li>
            <li>
              <b className="text-color-bright">Game Development: </b>
              Unity, Unreal, C++ w/ SFML, RPG Maker, GoDot
            </li>
            <li>
              <b className="text-color-bright">Practices: </b>
              Agile, DevOps, Design Patterns, UML
            </li>
          </ul>
  );
};

export default SkillHighlights;
