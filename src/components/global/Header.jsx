import React from "react";
import Nav from "./Nav";
import "../../App.css";

export default function Header() {
  return (
    <header>
      <div>
        <img src="/assets/Logo.png" width="" height="" alt="this is a logo" />
      </div>
      <Nav />
    </header>
  );
}
