// app/page.tsx
"use client";
import React from "react";

const Privacy: React.FC = () => {
  return (
    <main style={{ padding: "2rem max(5vw, 1rem)", lineHeight: 1.6 }}>
      <h1>Privacy Policy for Shelf Of Games</h1>
      <p><strong>Effective Date:</strong> June 5, 2025</p>

      <section>
        <h2>1. Information We Do Not Collect</h2>
        <p>
          We do <strong>not</strong> collect, store, or share any personal data
          or identifiable information from users of Shelf Of Games. Your game
          collection is stored locally on your device and never sent to any
          server.
        </p>
      </section>

      <section>
        <h2>2. In-App Purchases</h2>
        <p>
          Shelf Of Games may offer optional <em>tips</em> through Apple’s
          StoreKit framework. All payments are processed securely by Apple. We
          never access your payment or Apple ID information.
        </p>
      </section>

      <section>
        <h2>3. Analytics and Tracking</h2>
        <p>
          This app does not use third-party analytics, advertising networks, or
          trackers of any kind.
        </p>
      </section>

      <section>
        <h2>4. Third-Party Services</h2>
        <p>
          The app may link to external websites such as PriceCharting.com. We
          are not responsible for their content or privacy practices. Please
          review their policies separately.
        </p>
      </section>

      <section>
        <h2>5. Children’s Privacy</h2>
        <p>
          Shelf Of Games does not knowingly collect any information from
          children under the age of 13. Since no user data is collected, the app
          is safe for all ages.
        </p>
      </section>

      <section>
        <h2>6. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. All updates will
          be posted at:
        </p>
        <p>
          <a href="https://dylanhawke-dev.com/privacy">
            https://dylanhawke-dev.com/privacy
          </a>
        </p>
      </section>

      <section>
        <h2>7. Contact</h2>
        <p>
          If you have any questions or concerns, please reach out to us at:
        </p>
        <ul>
          <li>Email: <a href="mailto:dylan_hawke+privacy@icloud.com">dylan_hawke+privacy@icloud.com</a></li>
          <li>Website: <a href="https://dylanhawke-dev.com">dylanhawke-dev.com</a></li>
        </ul>
      </section>
    </main>
  );
};

export default Privacy;
