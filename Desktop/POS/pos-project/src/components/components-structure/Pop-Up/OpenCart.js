import React, { useContext, useState } from "react";
import "../../components-style/Add_Form.css";
import { Button } from "../Reusable components/Button";

const AddProductForm = ({
  cartWindow,
  clickedProduct,
  setClickProduct,
  setProductCose,
  productCost,
}) => {
  console.log(clickedProduct);
  const handlerDeleteProduct = (id, price) => {
    setClickProduct(clickedProduct.filter((user) => user.id !== id));
    setProductCose(productCost - price);
  };
  const handleResetCart = () => {
    setClickProduct([]);
    setProductCose(0);
  };
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
        <div className="reset-button-container">
          {Boolean(clickedProduct.length) && (
            <Button
              text="Reset"
              buttonStyle="btn--outline"
              buttonSize="btn--small"
              onClick={() => handleResetCart()}
            />
          )}
        </div>
        <div className="body bodyCart">
          {clickedProduct.length != 0 ? (
            clickedProduct.map((product, index) => (
              <div className="cart-product-container" key={index}>
                <div className="trash-container">
                  <i
                    className="fa-sharp fa-solid fa-trash"
                    onClick={() =>
                      handlerDeleteProduct(product.id, product.price)
                    }
                  ></i>
                </div>
                <div className="product-price-container">
                  {" "}
                  {product.price} $
                </div>
                <div className="product-name-container">{product.title}</div>
              </div>
            ))
          ) : (
            <p className="empty-message"> Cart is Empty</p>
          )}
        </div>
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

export default AddProductForm;
