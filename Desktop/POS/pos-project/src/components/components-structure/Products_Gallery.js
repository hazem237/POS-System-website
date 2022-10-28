import React, { useContext, useState } from "react";
import { DataContext } from "../../DataBase/DataContext";
import "../components-style/Products_Gallery.css";
import { Button } from "./Reusable components/Button";
import Pagination from "./Reusable components/Pagination";

const ProductsGallery = () => {
  /* The Required Data */
  const { productsData } = useContext(DataContext);
  const { categoriesData } = useContext(DataContext);

  /* States For Gallery Bar Pagination */
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(10);
  const [categoryPerPage] = useState(5);

  /* States to control all the windows inside Product Gallery Bar */
  const [openProductsWindow, setOpenProductWindow] = useState(true);
  const [openCategoryWindow, setOpenCategoryWindow] = useState(false);
  const [openCustomProductWindow, setOpenCustomProductWindow] = useState(false);
  const [requiredCategory, setRequiredCategory] = useState(null);

  /* Search variables */
  const [searchQuery, setSearchQuery] = useState("");
  const productKey = ["title", "category"];
  const categoryKey = ["category"];

  /* Pagination For Product Bar  */
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = productsData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  /* Pagination For Category Bar  */
  const indexOfLastCategory = currentPage * productPerPage;
  const indexOfFirstCategory = indexOfLastProduct - productPerPage;
  const currentCategory = categoriesData.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  /* Handler Functions */
  const handleCategoryWindow = () => {
    setOpenCategoryWindow(true);
    setOpenProductWindow(false);
    setCurrentPage(1);
  };
  const handleProductWindow = () => {
    setOpenCategoryWindow(false);
    setOpenProductWindow(true);
    setCurrentPage(1);
  };
  const handleCategoryClicked = (clickedCategory) => {
    setRequiredCategory(clickedCategory);
    setOpenCustomProductWindow(true);
    setOpenProductWindow(false);
    setOpenCategoryWindow(false);
  };
  const handleBackToCategory = () => {
    setOpenCategoryWindow(true);
    setOpenCustomProductWindow(false);
  };
  const searchForProduct = (data) => {
    return data.filter((item) =>
      productKey.some((key) => item[key].toLowerCase().includes(searchQuery))
    );
  };
  const searchForCategory = (data) => {
    return data.filter((item) =>
      categoryKey.some((key) => item[key].toLowerCase().includes(searchQuery))
    );
  };

  return (
    <div className="productGalleryContainer">
      <div className="catalogs">
        <div className="productGallery-nav">
          <input
            type="text"
            placeholder="Search .. "
            className="search"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
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
        {openProductsWindow && (
          <div className="products-container">
            {searchForProduct(currentProduct).map((product, index) => (
              <div className="productContainer" key={index}>
                <img src={product.thumbnail} className="gallery-img" />
                <div
                  className="overlay"
                  onClick={() => console.log(product.title)}
                >
                  <div className="content">
                    <h3>{product.title}</h3>
                    <p> Price :{product.price} $</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {openCategoryWindow && (
          <div className="categories-container">
            {searchForCategory(currentCategory).map((category, index) => (
              <div className="productContainer" key={index}>
                <img src={category.image} className="gallery-img" />
                <div
                  className="overlay"
                  onClick={() => handleCategoryClicked(category.category)}
                >
                  <div className="content">
                    <h3>{category.category}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {openCustomProductWindow && (
          <div className="custom-container">
            <div className="custom-Window-nav">
              <Button
                text="Back"
                buttonStyle="btn--outline"
                onClick={() => handleBackToCategory()}
              />
              <p> Category : {requiredCategory}</p>
            </div>
            {searchForProduct(productsData)
              .filter((p) => p.category == requiredCategory)
              .map((product, index) => (
                <div className="productContainer" key={index}>
                  <img src={product.thumbnail} className="gallery-img" />
                  <div
                    className="overlay"
                    onClick={() => console.log(product.title)}
                  >
                    <div className="content">
                      <h3>{product.title}</h3>
                      <p> Price :{product.price} $</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
        {openProductsWindow && (
          <Pagination
            postsPerPage={productPerPage}
            totalPosts={productsData.length}
            paginate={paginate}
          />
        )}
        {openCategoryWindow && (
          <Pagination
            postsPerPage={categoryPerPage}
            totalPosts={categoriesData.length}
            paginate={paginate}
          />
        )}
      </div>
      <div className="POS-operator"></div>
    </div>
  );
};

export default ProductsGallery;
