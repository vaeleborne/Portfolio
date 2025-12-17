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
            <span className="text-color-bright"><em> MongoDB, SQLite, PostgreSql, OracleDB </em></span> and more.
            </p>
            <p>
            I have utilized various backend frameworks for building APIs and server-side applications including
            <span className="text-color-bright"> <em> Express.js, Node.js, ASP.NET Core, ADO.NET, and ODP.NET</em></span>. I focus 
            on writing clean, maintainable code with proper documentation, along with self documenting code, and testing to ensure reliability. Following 
            RESTFUL principles and best practices is always a priority. This includes proper error handling, input validation, security measures,
            and performance optimization. 
            </p>
            
            <p>
            As for frontend development, I design and build responsive, user-friendly interfaces. With a strong focus on
            usability and performance, with mobile-first design principles. I am most proficient in the following technologies:
            <span className="text-color-bright"><em> HTML5, CSS, JavaScript, TypeScript, React, and Next.js</em></span>. Although I 
            am always eager to learn new frameworks and libraries as needed. Finally, but perhaps most importantly, I do my best to 
            ensure accessibility standards are met so that all users have a positive experience.
            
          </p>

          <p>When developing a new project I will most often follow <em>AGILE</em> methodologies. 
            This includes iterative development, regular feedback loops, and continuous improvement to ensure the final product meets the client's needs.
            Taking the time to understand the requirements and goals of each project is essential to delivering a successful outcome. As is 
            clear communication throughout the development process and a solid plan for development, testing, and deployment.
          </p>


            <br />
            Whether you need: 
            <br />
            <ul  className="faded mt-3">
              <li>A refreshed website with modern routing and clean UI</li>
              <li>An internal tool for inventory management</li>
              <li>Or a full design and build of a new site</li>
            </ul>
            <p  className="faded mt-3">I can deliver professional, reliable solutions that meet your needs.</p>
            
          

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
              <li><b className="text-color-bright"><a href="/about" aria-label="link to about page">About</a>: </b>My background and experience</li>
              <li><b className="text-color-bright"><a href="/projects" aria-label="link to projects page">Projects</a>: </b>Examples of work I have built or am working on</li>
              <li><b className="text-color-bright"><a href="/pricing" aria-label="link to pricing page">Pricing</a>: </b>Some baseline packages that I offer</li>
              <li><b className="text-color-bright"><a href="/contact" aria-label="link to contact page">Contact</a>: </b>Ways to get in touch with me</li>
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
