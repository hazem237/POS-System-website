import React from "react";
import Categories_table from "../components/components-structure/Categories_table";
import Navbar from "../components/components-structure/Reusable components/NavBar";

const Categories = ({ categoriesData }) => {
  return (
    <div className="Categories-page">
      <Navbar />
      <Categories_table categoriesData={categoriesData} />
    </div>
  );
};

export default Categories;
