import React from "react";
import AboutSection from "./AboutSection";
import HeaderSection from "./HeaderSection";
import MenuSection from "./MenuSection";
import Testmonials from "./Testmonials";

export default function Main() {
  return (
    <main>
      <div>
        <HeaderSection />
        <MenuSection />
        <Testmonials />
        <AboutSection />
      </div>
    </main>
  );
}
