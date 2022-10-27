import React from "react";
import "../../components-style/Add_Form.css";
import { Button } from "../Reusable components/Button";

const AddCategoryForm = ({ setOppen, productsData, setProductsData }) => {
  const closeForm = () => {
    setOppen(false);
  };

  const categories = JSON.parse(localStorage.getItem("categories"));
  return (
    <div className="modalBackground">
      <div className="modalContainer modalCategoryContainer">
        <div className="titleCloseBtn ">
          <Button text="X" onClick={() => closeForm()} />
        </div>
        <div className="title">
          <h2>
            Add new Category <i class="fa-solid fa-code-branch"></i>
          </h2>
        </div>
        <div className="body">
          <form>
            <div className="providerCategoriesName">
              <div className="category-name-container">
                <label>Category Name</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="exp : Books "
                  className="login-input"
                />
              </div>
            </div>
            <div className="providerCategoryImage">
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

export default AddCategoryForm;
