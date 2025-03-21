"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    // Dynamically import Bootstrap only in the browser
    // @ts-ignore - Bootstrap has no types for this import
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then((bootstrap) => {
        // Expose Bootstrap to global window object
        if (typeof window !== "undefined") {
          (window as any).bootstrap = bootstrap;
        }
      })
      .catch((err) => {
        console.error("Failed to load Bootstrap JS", err);
      });
  }, []);

  return null;
}
