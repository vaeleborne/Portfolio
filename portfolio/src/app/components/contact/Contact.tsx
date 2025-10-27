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

        <p className="faded"> 
          I'm currently seeking new opportunities in software engineering and game development, but I'm 
          equally excited to connect with other builders and creatives.
        </p>

        <p className="faded">
          Fill out the form below to send me an email!
        </p>

      </div>
    </div>
  );
};

export default Contact;
