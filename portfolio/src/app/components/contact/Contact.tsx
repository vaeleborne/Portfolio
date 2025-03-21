// app/page.tsx
"use client";

import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="row mx-3 mx-md-0">
      <div className="col-md-9 offset-md-1">
        <h6 className="text-color-bright">Have a cool project idea?</h6>
        <h1>
          <b>Get In Touch</b>
        </h1>
        <p className="faded">
          My inbox is open if you want to talk about a project or have any
          questions. I am currently looking for more opportunities to work and
          would love to hear from you!
        </p>
        <div className="d-grid gap-2">
          <a
            className="btn btn-outline-info"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:dmorgan98101+contactme@gmail.com?subject=Let’s%20work%20together!"
          >
            Reach Out!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
