import React, { useContext, useState } from "react";
import "../../components-style/Add_Form.css";
import { Button } from "../Reusable components/Button";

const AddProductForm = ({ cartWindow, clickedProduct, setClickProduct }) => {
  console.log(clickedProduct);
  const handlerDeleteProduct = (id) => {
    setClickProduct(clickedProduct.filter((user) => user.id !== id));
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
        <div className="body bodyCart">
          {clickedProduct.map((product ,index) => (
            <div className="cart-product-container" key={index}>
              <div className="trash-container">
                <i
                  className="fa-sharp fa-solid fa-trash"
                  onClick={() => handlerDeleteProduct(product.id)}
                ></i>
              </div>
            </div>
          ))}
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
