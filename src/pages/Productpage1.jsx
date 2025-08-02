import React from "react";
import Navbar from "../components/Navbar";
import Chaircollections from "../components/Chaircollections";
import Productpage1details from "../components/Productpage1details";
import ChaircollectionsWithSlider from "../components/Chaircollections";
import Relatedproduct from "../components/Relatedproduct";

const Productpage1 = () => {
  return (
    <div>
      <Chaircollections />
      <Productpage1details />
      <Relatedproduct />
    </div>
  );
};

export default Productpage1;
