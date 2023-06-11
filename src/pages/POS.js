import React from "react";
import ProductsGallery from "../components/components-structure/Pages Components/POS Page Components/ProductsGallery";
import Navbar from "../components/components-structure/Reusable components/NavBar";

const POS = () => {
  return (
    <div className="Pos-page">
      <Navbar />
      <ProductsGallery />
    </div>
  );
};

export default POS;
