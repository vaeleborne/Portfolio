// app/page.tsx
"use client";

import React from "react";
import SkillHighlights from "./SkillHighlights";

const Introduction: React.FC = () => {
  return (
    <div className="container p-0">
      <div className="row  mx-3 mx-md-0">
        <div className="col-md-8 offset-md-2">
          <h6 className="text-color-bright">Hello, my name is</h6>
          <h1>
            <strong>Dylan Morgan</strong>
          </h1>
          <h2 className="faded">
            I build various software applications, apps, games, and websites!
          </h2>

          <p className="faded mt-3">
            In fact, this site was built by me! There was no real need to
            connect a database so sadly no{" "}
            <span className="text-color-bright">MongoDB</span> or
            <span className="text-color-bright"> Mongoose</span> here. But not
            every website needs this. If yours does however, rest assured I love
            using databases. Maybe you want a better internal site for
            <span className="text-color-bright">
              {" "}
              inventory lookup and management
            </span>
            ? Perhaps you just want to update an old website that is not
            currently using
            <span className="text-color-bright"> Routes</span>. Need someone to
            just look into and
            <span className="text-color-bright"> Clean the UI</span>? Or maybe
            you're a new or existing business ready to branch out and
            <span className="text-color-bright">
              {" "}
              Design Your Website From Start To Finish
            </span>
            . These are just some of the things I can do in the world of
            <span className="text-color-bright"> Web Development</span>.
          </p>

          <p className="faded">
            Web Development not what you’re looking for? That’s okay! I also do
            a
            <span className="text-color-bright">
              {" "}
              Wide Variety Of Programming
            </span>
            . Are you looking for{" "}
            <span className="text-color-bright">
              Console Based Applications
            </span>{" "}
            for your business? Working on a{" "}
            <span className="text-color-bright">Video Game?</span> I’d love to
            hear about it and see how I could contribute! Have general questions
            for me? Check out the Contact tab. Want to know my history? Peruse
            the <span className="text-color-bright">About</span> section. Want
            to see some of the projects I’ve done? Yup—I have that over on the{" "}
            <span className="text-color-bright">Projects</span> tab. Wondering
            what my general skills are? See the list below :)
            <br />
            <br />
            <SkillHighlights />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
