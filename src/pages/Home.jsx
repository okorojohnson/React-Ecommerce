import React from "react";
import Navbar from "../components/Navbar";
import Homechaircollection from "../components/Homechaircollection";
import Homedetails from "../components/Homedetails";

const Home = () => {
  return (
    <div>
      <Homechaircollection />
      <Homedetails />
    </div>
  );
};

export default Home;
