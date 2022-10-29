import React, { useContext, useState } from "react";
import { DataContext } from "../../DataBase/DataContext";
import "../components-style/Products_Gallery.css";
import { Button } from "./Reusable components/Button";
import Pagination from "./Reusable components/Pagination";
import POS_Gallery from "./POS_Gallery";

const ProductsGallery = () => {
  /* The Required Data */
  const { productsData } = useContext(DataContext);
  const { categoriesData } = useContext(DataContext);

  /* States For Gallery Bar Pagination */
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(10);
  const [categoryPerPage] = useState(6);

  /* States to control all the windows inside Product Gallery Bar */
  const [openProductsWindow, setOpenProductWindow] = useState(true);
  const [openCategoryWindow, setOpenCategoryWindow] = useState(false);
  const [openCustomProductWindow, setOpenCustomProductWindow] = useState(false);
  const [requiredCategory, setRequiredCategory] = useState(null);

  /* Variables responsible for Passing data to POS Bar */
  const [dataRiver, setDataRiver] = useState([]);
  const [sumProductsPrice, setSumProductPrice] = useState(0);

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
  };
  const handleBackToCategory = () => {
    setOpenCategoryWindow(true);
    setOpenCustomProductWindow(false);
  };
  const handlerProductClick = (productObject) => {
    setDataRiver([...dataRiver, productObject]);
    let sum = 0;
    for (let i = 0; i < dataRiver.length; i++) {
      sum = sum + dataRiver[i].price;
    }
    setSumProductPrice(sum);
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
          {/* Search For Each Gallery Window Case (Product , Category , Custom Product) */}

          {openProductsWindow && (
            <input
              type="text"
              placeholder="Search for Product .. "
              className="search"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          )}
          {openCategoryWindow && (
            <input
              type="text"
              placeholder="Search for Category .. "
              className="search"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          )}
          {openCustomProductWindow && (
            <input
              type="text"
              placeholder="Search for Product .. "
              className="search"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          )}

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
          <div className="products-container">
            {searchForProduct(currentProduct).map((product, index) => (
              <div className="productContainer" key={index}>
                <img src={product.thumbnail} className="gallery-img" />
                <div
                  className="overlay"
                  onClick={() => handlerProductClick(product)}
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
                {/* <h6 className="Category-name-guide">{category.category}</h6> */}
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
                    onClick={() => handlerProductClick(product)}
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
        {/* Pagenation Handler For Gallery  */}

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
        {openCustomProductWindow && (
          <Pagination
            postsPerPage={productPerPage}
            totalPosts={
              productsData.filter((p) => p.category === requiredCategory).length
            }
            paginate={paginate}
          />
        )}
      </div>

      {/* Ends of Gallery Bar , Stating with POS Bar  */}

      <div className="POS-operator">
        <POS_Gallery
          clickedProduct={dataRiver}
          setClickProduct={setDataRiver}
          productsCost={sumProductsPrice}
        />
      </div>
    </div>
  );
};

export default ProductsGallery;
