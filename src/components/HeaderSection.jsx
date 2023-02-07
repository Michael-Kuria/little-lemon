import React, { useEffect, useState } from "react";
import "../App.css";
import { useWidth } from "../Width";

export default function HeaderSection() {
  // const [hideImage, setHideImage] = useState(true);

  // useEffect(() => {
  //   function handleResize() {
  //     if (window.innerWidth < 750) {
  //       setHideImage(false);
  //     } else {
  //       setHideImage(true);
  //     }
  //   }

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // });

  const [hideImage] = useWidth();

  return (
    <section className="header-section-container">
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
      {hideImage && (
        <div className="header-section-right-container">
          <img
            src="/assets/restauranfood.jpg"
            width=""
            height="500px"
            alt="this is a picture of chef carriying food"
          />
        </div>
      )}
    </section>
  );
}
