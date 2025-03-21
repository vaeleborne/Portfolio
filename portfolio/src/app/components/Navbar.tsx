import Link from "next/link";

import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="mb-5">
      <nav className="navbar navbar-dark navbar-expand-md py-3 fixed-top">
        <div className="container-fluid">
          {/* Brand */}
          <Link href="/" className="navbar-brand" id="nav-brand">
            <span className="material-symbols-outlined">House</span>
          </Link>

          {/* Collapse Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#primaryNavbar"
            aria-controls="primaryNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsed Menu */}
          <div className="collapse navbar-collapse" id="primaryNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-2">
              <li id="nav-about" className="nav-item">
                <Link href="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li id="nav-work-projects" className="nav-item">
                <Link href="/projects" className="nav-link">
                  Projects
                </Link>
              </li>
              <li id="nav-work-pricing" className="nav-item">
                <Link href="/pricing" className="nav-link">
                  Pricing
                </Link>
              </li>
              <li id="nav-contact" className="nav-item">
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
