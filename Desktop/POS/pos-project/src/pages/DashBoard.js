import React from "react";
import Navbar from "../components/components-structure/Reusable components/NavBar";
import Statistics from "../components/components-structure/Statistics";

const DashBoard = ({ productsData, categoriesData, userData ,onClick}) => {
  return (
    <div>
      <Navbar />
      <Statistics
        productsData={productsData}
        categoriesData={categoriesData}
        userData={userData}
      />
      <button onClick={ onClick}>Click Me</button>
    </div>
  );
};

export default DashBoard;
