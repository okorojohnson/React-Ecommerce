import React from "react";
import Hero from "../components/Hero";
import Productdisplay from "../components/Productdisplay";
import CTA from "../components/CTA";
import Navbar from "../components/Navbar";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Productdisplay />
      <CTA />
    </div>
  );
};

export default Homepage;
