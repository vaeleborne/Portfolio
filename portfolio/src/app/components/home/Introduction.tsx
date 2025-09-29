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
            <strong>Dylan Hawke</strong>
          </h1>
          <h2 className="faded">
            I build software, games, apps, and websites.
          </h2>
          <br />

          {/*INTRODUCTION*/}
          <h4 className="text-color-bright">
            Introduction
          </h4>

          <p className="faded mt-3">
            I'm a software engineer who enjoys creating everything from web applications to video games.
            This site itself is one of my projects! It's simple by design, but I love tailoring solutions to fit
            what's needed. Not every website needs a database, but if yours does, I have experience working with
            <span className="text-color-bright"> MongoDB, SQL, and Mongoose </span> 
            <br /><br />
            Whether you need: 
            <br />
            <ul>
              <li>A refreshed website with modern routing and clean UI</li>
              <li>An internal tool for inventory management</li>
              <li>Or a full design and build of a new site</li>
            </ul>
            ...I can deliver professional, reliable solutions that meet your needs.

            {/* In fact, this site was built by me! There was no real need to
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
            <span className="text-color-bright"> Web Development</span>. */}
          </p>

          {/*BEYOND WEB DEV*/}
          <h4 className="text-color-bright">
            Beyond Web Development
          </h4>

          <p className="faded">
            Web development is only a part of what I do and am interested in. I also develop 
            console-based applications, GUI applications, prototypes, games, and mobile apps.
            If you're building a new video game or want to collaborate on software ideas, I'd 
            love to hear from you!
            <br /><br />
            Explore the site to learn more:
            <br />
            <ul>
              <li><b className="text-color-bright">About: </b>My background and experience</li>
              <li><b className="text-color-bright">Projects: </b>Examples of work I have built or am working on</li>
              <li><b className="text-color-bright">Pricing: </b>Some baseline packages that I offer</li>
              <li><b className="text-color-bright">Contact: </b>Ways to get in touch with me</li>
            </ul>
          </p>

          {/*SKILLS*/}
          <h4 className="text-color-bright">
            Skills
          </h4>
          <p className="faded">
            <ul>
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
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
