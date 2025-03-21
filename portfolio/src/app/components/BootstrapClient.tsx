"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    // Dynamically import the JS only in the browser

    // @ts-ignore - Bootstrap has no types for this import
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null; // no UI; just loads the script
}
