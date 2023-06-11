import React from "react";
import { useContext, useState } from "react";
import { DataContext } from "../../../../DataBase/DataContext";
import Pagination from "../../Reusable components/Pagination";
import "../../../components-style/Products_Gallery.css";
const ProductsBar = ({clickedProduct, setClickProduct, query}) => {



  const { productsData } = useContext(DataContext);
  // const [searchQuery, setSearchQuery] = useState("");
  const productKey = ["title", "category"];
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(10);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = productsData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

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
      <div className="products-container">
        {(query.length > 2
          ? searchForProduct(productsData)
          : currentProduct
        ).map((product, index) => (
          <div className="productContainer" key={index}>
            <img src={product.thumbnail} className="gallery-img" />
            <div
              className="overlay"
              onClick={() => handlerProductClick(product, index)}
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
        totalPosts={productsData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default ProductsBar;
