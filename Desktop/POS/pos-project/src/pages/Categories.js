import React from "react";
import Categories_Table from "../components/components-structure/Pages Components/Categories Page Components/CategoriesTable"
import Navbar from "../components/components-structure/Reusable components/NavBar";

const Categories = ({ categoriesData }) => {
  return (
    <div className="Categories-page">
      <Navbar />
      <Categories_Table categoriesData={categoriesData} />
    </div>
  );
};

export default Categories;
