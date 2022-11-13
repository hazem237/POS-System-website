import React from "react";
import { Button } from "../../Reusable components/Button";
import { useContext, useState } from "react";
import { DataContext } from "../../../../DataBase/DataContext";
import Pagination from "../../Reusable components/Pagination";
import "../../../components-style/Products_Gallery.css";

const CustomProductBar = ({
  clickedProduct,
  setClickProduct,
  handleBackToCategory,
  requiredCategory,
  query,
}) => {
    /* Get The Data */
  const { productsData } = useContext(DataContext);

  const productKey = ["title", "category"];
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(10);
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = productsData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const searchForProduct = (data) => {
    return data.filter((item) =>
      productKey.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  const handlerProductClick = (productObject, index) => {
    if (
      clickedProduct.includes(clickedProduct.find((p) => p === productObject))
    ) {
      let newArr = [...clickedProduct];
      newArr[
        clickedProduct.indexOf(clickedProduct.find((p) => p === productObject))
      ].quantity++;
      setClickProduct(newArr);
    } else {
      setClickProduct([...clickedProduct, productObject]);
    }
    console.log(clickedProduct);
  };

  return (
    <div>
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
          .filter((p) => p.category === requiredCategory)
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
      <Pagination
        postsPerPage={productPerPage}
        totalPosts={
          productsData.filter((p) => p.category === requiredCategory).length
        }
        paginate={paginate}
      />
    </div>
  );
};

export default CustomProductBar;
