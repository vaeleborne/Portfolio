// app/page.tsx
"use client";

import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="row mx-3 mx-md-0">
      <div className="col-md-9 offset-md-1">
        <h4 className="text-color-bright">Have a cool project idea? Let's Talk</h4>
        <p className="faded">
          My inbox is always open. Whether you want to collaborate on a new project, need a developer for 
          your team, or just have a question about my work.
        </p>

        <p>
          I'm currently seeking new opportunities in software engineering and game development, but I'm 
          equally excited to connect with other builders and creatives.
        </p>

        <p>
          Click the button below to send me an email (it'll even prefill the subject line to save you the step).
          I look forward to hearing from you!
        </p>


        <div className="d-grid gap-2">
          <a
            className="btn btn-outline-info"
            aria-label="contact button"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:dylan_hawke+contactme@icloud.com?subject=Let’s%20work%20together!"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
