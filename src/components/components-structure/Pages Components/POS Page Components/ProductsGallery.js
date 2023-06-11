import React, { useState } from "react";
import "../../../components-style/Products_Gallery.css";
import { Button } from "../../Reusable components/Button";
import ProductsBar from "./ProductsBar";
import POSGallery from "./POSGallery";
import CategoriesBar from "./CategoriesBar";
import CustomProductBar from "./CustomProductBar";

const ProductsGallery = () => {
  /* The Required Data */


  /* States For Gallery Bar Pagination */
  const [currentPage, setCurrentPage] = useState(1);


  /* States to control all the windows inside Product Gallery Bar */
  const [openProductsWindow, setOpenProductWindow] = useState(true);
  const [openCategoryWindow, setOpenCategoryWindow] = useState(false);
  const [openCustomProductWindow, setOpenCustomProductWindow] = useState(false);
  const [requiredCategory, setRequiredCategory] = useState(null);

  /* Variables responsible for Passing data to POS Bar */
  const [dataRiver, setDataRiver] = useState([]);

  /* Search variables */
  const [searchQuery, setSearchQuery] = useState("");


  /* Handler Functions */
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleCategoryWindow = () => {
    setOpenCategoryWindow(true);
    setOpenProductWindow(false);
    setOpenCustomProductWindow(false);
    setCurrentPage(1);
  };
  const handleProductWindow = () => {
    setOpenCategoryWindow(false);
    setOpenProductWindow(true);
    setOpenCustomProductWindow(false);
    setCurrentPage(1);
  };

  const handleCategoryClicked = (clickedCategory) => {
    setRequiredCategory(clickedCategory);
    setOpenCustomProductWindow(true);
    setOpenProductWindow(false);
    setOpenCategoryWindow(false);
    console.log(clickedCategory);
  };

  const handleBackToCategory = () => {
    setOpenCategoryWindow(true);
    setOpenCustomProductWindow(false);
  };

  return (
    <div className="productGalleryContainer">
      <div className="catalogs">
        <div className="productGallery-nav">
          {/* Search For Each Gallery Window Case (Product , Category , Custom Product) */}
          <input
            type="text"
            placeholder="Search .. "
            className="search"
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Nav Button Container  */}
          <div className="buttons-container">
            <Button
              text="All Products"
              buttonStyle="btn--outline"
              onClick={() => handleProductWindow()}
            />
            <Button
              text="Categories"
              buttonStyle="btn--outline"
              onClick={() => handleCategoryWindow()}
            />
          </div>
        </div>

        {/* Gallery Items Based on Each Window Case (Product , Category , Custom Product)  */}
        {openProductsWindow && (
          <ProductsBar
            clickedProduct={dataRiver}
            setClickProduct={setDataRiver}
            query={searchQuery}
          />
        )}
        {openCategoryWindow && (
          <CategoriesBar
            searchQuery={searchQuery}
            handleCategoryClicked={handleCategoryClicked}
          />
        )}
        {openCustomProductWindow && (
          <CustomProductBar
            handleBackToCategory={handleBackToCategory}
            requiredCategory={requiredCategory}
            query={searchQuery}
            clickedProduct={dataRiver}
            setClickProduct={setDataRiver}
          />
        )}
      </div>
      {/* Ends of Gallery Bar , Stating with POS Bar  */}
      <div className="POS-operator">
        <POSGallery clickedProduct={dataRiver} setClickProduct={setDataRiver} />
      </div>
    </div>
  );
};

export default ProductsGallery;
