// app/page.tsx
"use client";

import React from "react";
import { useState } from "react";

import PackageCard, { PackageProps } from "./PackageCard";

interface SectionProps {
  title: string;
  packages: PackageProps[];
  id: string; // Unique ID for each collapse group
}

const PricingSection: React.FC<SectionProps> = ({ title, packages, id }) => {
  const [isOpen, setIsOpen] = useState(false); //Closed by default

  const toggleCollapse = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="mb-5 mx-3 mx-md-0">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="mb-0">{title}</h5>
        <button
          className="btn btn-outline-info highlight-btn w-25"
          type="button"
          onClick={toggleCollapse}
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`}
          aria-expanded={isOpen}
          aria-controls={id}
        >
          {isOpen ? "Hide" : "Show"}
        </button>
      </div>
      <hr />

      <div className={`collapse ${isOpen ? "show" : ""}`} id={id}>
        {/* All except last: 2-column layout */}
        <div className="row row-cols-1 row-cols-lg-2 g-4">
          {packages.map((pkg, idx) => (
            <PackageCard key={idx} {...pkg} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default PricingSection;
