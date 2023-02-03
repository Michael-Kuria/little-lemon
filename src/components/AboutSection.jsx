import React from "react";

export default function AboutSection() {
  return (
    <section>
      <div className="about-section-container">
        <div className="about-section-left-container">
          <div>
            <p className="title">Little Lemon</p>
            <p className="subtitle">Chicago</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non
            </p>
          </div>
        </div>
        <div className="about-section-right-container">
          <img
            src="/assets/Mario and Adrian A.jpg"
            width=""
            height="500px"
            alt="this is a picture of food"
          />
          <img
            src="/assets/Mario and Adrian B.jpg"
            width=""
            height="500px"
            alt="this is a picture of food"
          />
        </div>
      </div>
    </section>
  );
}
