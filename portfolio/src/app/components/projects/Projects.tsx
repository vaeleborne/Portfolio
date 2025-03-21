// app/page.tsx
"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "@/app/data/projects.json";

const Projects: React.FC = () => {
  return (
    <div className="row mx-3 mx-md-0">
      <div className="col">
        {/*Page Heading*/}
        <h4 className="text-color-bright mb-4">Some Of My Hobby Projects!</h4>

        {/*Setting up page grid, 2 'cards' per row if size is md or greater, 1 otherwise*/}
        <div className="row row-cols-1 row-cols-lg-2 g-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
