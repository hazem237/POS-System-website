import React from "react";
import Navbar from "../components/components-structure/Reusable components/NavBar";
import Products_table from "../components/components-structure/Pages Components/Products Page Components/ProductsTable";

const Products = ({ productsData }) => {
  return (
    <div className="Products-page">
      <Navbar />

      <Products_table productsData={productsData} />
    </div>
  );
};

export default Products;
