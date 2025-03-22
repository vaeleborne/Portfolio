// components/ProjectCard.tsx
"use client";

import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  image,
  github,
}) => {
  return (
    <div className="col mx-0 mr-3">
      <div className="card border border-3 h-100 border-info custom-color px-3 py-3">
        <Image
          src={image}
          alt={title}
          width={800}
          height={600}
          className="card-img-top"
          style={{ width: "100%", height: "auto" }}
        />

        <div className="card-body">
          <h5 className="card-title text-color-bright">{title}</h5>
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
        <ul>
          {technologies.map((tech, i) => (
            <li key={i} className="list-inline-item">
              <small className="card-text faded">{tech}</small>
            </li>
          ))}
        </ul>
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
      </div>
    </div>
  );
};

export default ProjectCard;
