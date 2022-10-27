import React from "react";
import "../../components-style/Add_Form.css";
import { Button } from "../Reusable components/Button";

const AddProductForm = ({ setOppen, productsData, setProductsData }) => {

    /* Fetch The Category Form LS to be shown in Select input*/
  const categories = JSON.parse(localStorage.getItem("categories"));

  /* Functions*/
  const closeForm = () => {
    setOppen(false);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer modalProductContainer">
        <div className="titleCloseBtn ">
          <Button text="X" onClick={() => closeForm()} />
        </div>
        <div className="title">
          <h2>
            Add new Product <i class="fa-solid fa-box-open"></i>{" "}
          </h2>
        </div>
        <div className="body">
          <form>
            <div className="providerProductName">
              <div className="product-name-container">
                <label>Product Name</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="exp : Potato "
                  className="login-input"
                />
              </div>
            </div>
            <div className="providerProductCategory">
              <label>Category</label>
              <select>
                {categories.map((item) => (
                  <option> {item.category}</option>
                ))}
              </select>
            </div>
            <div className="providerProductPrice">
              <label>Price</label>
              <input
                type="number"
                id="price"
                name="price"
                placeholder="100$"
                className="login-input"
              />
            </div>
            <div className="providerProductImage">
              <label>Image URL</label>
              <input
                type="text"
                id="img-url"
                name="img-url"
                placeholder="URL "
                className="login-input"
              />
            </div>
            <div className="button-container">
              <Button
                type="submit"
                text="Add"
                buttonStyle="btn--outline add"
                buttonSize="btn--medium "
              />
              <Button
                text="Cancel"
                buttonStyle="btn--outline cancel"
                buttonSize="btn--medium"
                onClick={() => closeForm()}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;
