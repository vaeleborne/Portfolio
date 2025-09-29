// components/ProjectCard.tsx
//TODO: REPLACE IMAGE WITH A CAROUSEL COMPONENT

import React from "react";
import ReactMarkdown from "react-markdown";
import ProjectImageCarousel from "./ProjectImageCarousel";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github?: string | null;
  imageDir: string;
  appStore?: string | null;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  github,
  imageDir,
  appStore
}) => {
  return (
    <div className="col mx-0 mr-3">
      <div className="card border border-3 h-100 border-info custom-color px-3 py-3">

        {/*IMAGES*/}
        <div className="card-img-top">
          <ProjectImageCarousel imageDir={imageDir} alt={title} />
        </div>

        {/*PROJECT INFORMATION*/}
        <div className="card-body">
          <h5 className="card-title text-color-bright">{title}</h5>

          {/*PROJECT DESCRIPTION*/}
          <p className="card-text">
            <ReactMarkdown
              components={{
                p: ({ children }) => <span>{children}</span>,
                strong: ({ children }) => (
                  <span className="text-color-bright">{children}</span>
                ),
              }}
            >
              {description}
            </ReactMarkdown>
          </p>
        </div>

        {/*PROJECT TECHNOLOGIES*/}
        <ul>
          {technologies.map((tech, i) => (
            <li key={i} className="list-inline-item">
              <small className="card-text faded">{tech}</small>
            </li>
          ))}
        </ul>

        {/*GITHUB/APPSTORE LINK*/}
        {github != null && (
          <>
            <div className="d-grid gap-2 mb-3 mt-3">
              <a
                className="btn btn-outline-info highlight-btn"
                target="_blank"
                rel="noopener noreferrer"
                href={github}
              >
                View On Github
              </a>
            </div>
          </>
        )}

        {appStore != null && (
          <>
            <div className="d-grid gap-2 mb-3 mt-3">
              <a
                className="btn btn-outline-info highlight-btn"
                target="_blank"
                rel="noopener noreferrer"
                href={appStore}
              >
                View On App Store
              </a>
            </div>
          </>
        )}
        
      </div>
    </div>
  );
};

export default ProjectCard;
