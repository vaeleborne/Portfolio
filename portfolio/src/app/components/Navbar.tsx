"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Collapse from "bootstrap/js/dist/collapse";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [hasMounted, setHasMounted] = useState(false);

  // Ensure we're on the client before running DOM code
  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted || typeof window === "undefined") return;

    const collapseEl = document.getElementById("primaryNavbar");
    if (!collapseEl) return;

    if (collapseEl.classList.contains("show")) {
      const bootstrap = (window as any).bootstrap;
      if (bootstrap?.Collapse) {
        const instance =
          bootstrap.Collapse.getInstance(collapseEl) ||
          new bootstrap.Collapse(collapseEl, { toggle: false });
        instance.hide();
      }
    }
  }, [pathname, hasMounted]);

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
