// components/ProjectCard.tsx
"use client";

import React from "react";
import ReactMarkdown from "react-markdown";

export interface PackageProps {
  title: string;
  blurb: string;
  features: string[];
  price: string;
  emailSubject: string;
}

const PackageCard: React.FC<PackageProps> = ({
  title,
  blurb,
  features,
  price,
  emailSubject,
}) => {
  const mailto = `mailto:dmorgan98101+app-dev@gmail.com?subject=${encodeURIComponent(
    emailSubject
  )}`;
  const markdown = `- ${features.join("\n- ")}\n- **Price:** ${price}`;
  return (
    <div className="col pl-0 pr-4">
      <div className="card border border-3 h-100 border-info custom-color px-2 py-2">
        <div className="card-body">
          <h5 className="card-title text-color-bright">{title}</h5>
          <p className="card-text">{blurb}</p>
          <ul className="p-0 m-0">
            <ReactMarkdown
              components={{
                p: ({ children }) => <span>{children}</span>,
                li: ({ children }) => <li>{children}</li>,
                strong: ({ children }) => <strong>{children}</strong>,
              }}
            >
              {markdown}
            </ReactMarkdown>
          </ul>
        </div>
        {/*Contact Area*/}
        <div className="d-grid gap-2 mb-3  mx-3">
          <a
            className="btn btn-outline-info highlight-btn"
            rel="noopener noreferrer"
            href={mailto}
            target="_blank"
          >
            Inquire!
          </a>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
