"use client";
import "../../../styles/app.css";
import pricingData from "../data/pricing.json";
import PricingSection from "../components/pricing/Pricing";

export default function PricingPage() {
  return (
    <div className="container mt-5 pt-5 ">
      <h4 className="text-color-bright mb-4 mx-3 mx-md-0">
        Explore My Essential Service Packages!
      </h4>
      <p className="mx-3  mx-md-0 mb-5">
        Welcome to my pricing page! While I've put together these package
        options as general guidelines, I want you to know that I'm always here
        to work closely with you on a case-by-case basis. These packages
        represent the essence of what I do and offer a ballpark idea of costs.
        If you don't find a specific feature listed or if you're concerned about
        fitting within your budget, please don't hesitate to reach out. Let's
        have a conversation about your unique requirements and what's achievable
        within your budget. My priority is to deliver not just a product, but a
        remarkable experience. My goal is to create something of quality that
        brings pride and happiness to everyone involved. Thank you for
        considering me as your partner in this journey!
      </p>

      <PricingSection
        title="Web Development Packages"
        packages={pricingData.web}
        id="web-dev"
      />
      <PricingSection
        title="Mobile App Development Packages"
        packages={pricingData.app}
        id="mobile-dev"
      />
      <PricingSection
        title="Other Services & Hourly Work"
        packages={pricingData.other}
        id="other-services"
      />
    </div>
  );
}
