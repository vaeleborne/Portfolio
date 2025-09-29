// app/page.tsx


import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "@/app/data/projects.json";

const Projects: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="row mx-3 px-0 ">
          <div className="col px-0">
            {/*Page Heading*/}
            <h4 className="text-color-bright mb-4">
              Some Of My Hobby Projects!
            </h4>
          </div>
        </div>
      </div>
      {/*Setting up page grid, 2 'cards' per row if size is md or greater, 1 otherwise*/}
      <div className="row row-cols-1 row-cols-lg-2 g-4 mx-3 px-0">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default Projects;
