import React from "react";
import Navbar from "../components/components-structure/Reusable components/NavBar";
import Statistics from "../components/components-structure/Pages Components/Dashboard Page Components/Statistics";

const DashBoard = () => {
  return (
    <div>
      <Navbar />
      <Statistics></Statistics>
    </div>
  );
};

export default DashBoard;
