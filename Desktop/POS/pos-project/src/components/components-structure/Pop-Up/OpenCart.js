import React, { useContext, useState } from "react";
import "../../components-style/Form.css";
import { Button } from "../Reusable components/Button";
import Pagination from "../Reusable components/Pagination";

const OpenCart = ({
  cartWindow,
  clickedProduct,
  setClickProduct,
  setProductCose,
  productCost,
}) => {
  const quantityArray = Array(clickedProduct.length).fill(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = clickedProduct.slice(indexOfFirstPost, indexOfLastPost);
  console.log(quantityArray);
  const handlerDeleteProduct = (id, price) => {
    setClickProduct(clickedProduct.filter((user) => user.id !== id));
    setProductCose(productCost - price);
  };
  const handleResetCart = () => {
    setClickProduct([]);
  };
  const handlerPlusClick = (index) => {
    let newArr = [...clickedProduct];
    newArr[index].quantity++;
    setClickProduct(newArr);
  };
  const handlerSubtractClick = (product, index) => {
    if (clickedProduct[index].quantity === 1) {
      handlerDeleteProduct(product.id, product.price);
    }
    let newArr = [...clickedProduct];
    newArr[index].quantity--;
    setClickProduct(newArr);
  };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log(clickedProduct);
  return (
    <div className="modalBackgroundCart">
      <div className="modalContainer modalCartContainer">
        <div className="titleCloseBtn ">
          <Button text="X" onClick={() => cartWindow(false)} />
        </div>
        <div className="title">
          <h2>
            Cart{" "}
            <i
              className="fa-solid fa-cart-shopping"
              style={{ color: "brown" }}
            ></i>
          </h2>
        </div>
        {Boolean(clickedProduct.length) && (
          <nav className="cart-nav">
            <div>
              <p>Cart Size : {clickedProduct.length}</p>
              <p>
                Cart Bill :{" "}
                {clickedProduct.reduce(
                  (acc, curr) => acc + curr.price * curr.quantity,
                  0
                )}{" "}
                $
              </p>
            </div>
            <Button
              text="Reset"
              buttonStyle="btn--outline"
              buttonSize="btn--small"
              onClick={() => handleResetCart()}
            />
          </nav>
        )}

        <div className="body bodyCart">
          {clickedProduct.length != 0 ? (
            currentPosts.map((product, index) => (
              <div className="cart-product-container" key={index}>
                <div className="trash-container">
                  <i
                    className="fa-sharp fa-solid fa-trash"
                    onClick={() =>
                      handlerDeleteProduct(product.id, product.price)
                    }
                  ></i>
                </div>
                <div className="quantity-container">
                  <Button
                    text="-"
                    onClick={() => handlerSubtractClick(product, index)}
                  />
                  <p>{product.quantity}</p>
                  <Button text="+" onClick={() => handlerPlusClick(index)} />
                </div>
                <div className="product-price-container">
                  {" "}
                  {product.price * product.quantity} $
                </div>
                <div className="product-name-container">{product.title}</div>
              </div>
            ))
          ) : (
            <p className="empty-message"> Cart is Empty</p>
          )}
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={clickedProduct.length}
          paginate={paginate}
        />
        <div className="cart-button-container">
          <Button
            text="Cancel"
            buttonStyle="btn--outline cancel"
            buttonSize="btn--medium"
            onClick={() => cartWindow(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default OpenCart;
