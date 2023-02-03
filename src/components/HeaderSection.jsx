import React from "react";

export default function HeaderSection() {
  return (
    <section>
      <div className="header-section-left-container">
        <div>
          <p className="title">Little Lemon</p>
          <p className="subtitle">Chicago</p>
        </div>
        <div>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </div>
        <div>
          <button>Reserve a table</button>
        </div>
      </div>
      <div className="header-section-right-container">
        <img
          src="/assets/restauranfood.jpg"
          width=""
          height="500px"
          alt="this is a picture of chef carriying food"
        />
      </div>
    </section>
  );
}
