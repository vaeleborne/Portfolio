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
          </p>
            <br />
            Whether you need: 
            <br />
            <ul  className="faded mt-3">
              <li>A refreshed website with modern routing and clean UI</li>
              <li>An internal tool for inventory management</li>
              <li>Or a full design and build of a new site</li>
            </ul>
            <p  className="faded mt-3">...I can deliver professional, reliable solutions that meet your needs.</p>
            
          

          {/*BEYOND WEB DEV*/}
          <h4 className="text-color-bright">
            Beyond Web Development
          </h4>

          <p className="faded">
            Web development is only a part of what I do and am interested in. I also develop 
            console-based applications, GUI applications, prototypes, games, and mobile apps.
            If you're building a new video game or want to collaborate on software ideas, I'd 
            love to hear from you!
            <br />
            <br />
            Explore the site to learn more:
            </p>
            <ul  className="faded mt-3">
              <li><b className="text-color-bright">About: </b>My background and experience</li>
              <li><b className="text-color-bright">Projects: </b>Examples of work I have built or am working on</li>
              <li><b className="text-color-bright">Pricing: </b>Some baseline packages that I offer</li>
              <li><b className="text-color-bright">Contact: </b>Ways to get in touch with me</li>
            </ul>
          

          {/*SKILLS*/}
          <h4 className="text-color-bright">
            Skills
          </h4>
          <SkillHighlights />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
