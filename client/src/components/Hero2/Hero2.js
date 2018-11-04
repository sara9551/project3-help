import React from "react";
import "./Hero2.css";

const Hero = ({ children }) => (
  <section className="hero">
  <div className="hero-body">
    <div className="container">
    {children}
    </div>
  </div>
</section>
);

export default Hero;
