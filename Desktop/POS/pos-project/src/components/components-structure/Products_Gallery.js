import React, { useContext, useState } from "react";
import { DataContext } from "../../DataBase/DataContext";
import "../components-style/Products_Gallery.css";
import { Button } from "./Reusable components/Button";
import Pagination from "./Reusable components/Pagination";

const ProductsGallery = () => {
  const { productsData } = useContext(DataContext);
  const { categoriesData } = useContext(DataContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(10);
  const [categoryPerPage] = useState(5);
  const [openProductsWindow, setOpenProductWindow] = useState(true);
  const [openCategoryWindow, setOpenCategoryWindow] = useState(false);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = productsData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const indexOfLastCategory = currentPage * productPerPage;
  const indexOfFirstCategory = indexOfLastProduct - productPerPage;
  const currentCategory = categoriesData.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
 

  console.log(currentCategory);

  const handleCategoryWindow = () => {
    setOpenCategoryWindow(true);
    setOpenProductWindow(false);
  };
  const handleProductWindow = () => {
    setOpenCategoryWindow(false);
    setOpenProductWindow(true);
  };

  return (
    <div className="productGalleryContainer">
      <div className="catalogs">
        <div className="productGallery-nav">
          <div className="buttons-container">
            <Button
              text="Products"
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
            {currentProduct.map((product) => (
              <div className="productContainer">
                <img src={product.thumbnail} className="gallery-img" />
              </div>
            ))}
          </div>
        )}
        {openCategoryWindow && (
          <div className="categories-container">
            {currentCategory.map((category) => (
              <div className="productContainer">
                <img src={category.image} className="gallery-img" />
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
