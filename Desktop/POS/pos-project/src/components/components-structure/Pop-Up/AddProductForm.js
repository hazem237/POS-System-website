import React, { useContext, useState } from "react";
import "../../components-style/Add_Form.css";
import { Button } from "../Reusable components/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { DataContext } from "../../../DataBase/DataContext";

const AddProductForm = ({ setOppen, productsData, setProductsData }) => {
  const { categoriesData } = useContext(DataContext);

  /* Functions*/
  const closeForm = () => {
    setOppen(false);
  };

  const productForm = useFormik({
    initialValues: {
      id: Math.floor(Math.random() * 1000 + 1),
      title: "",
      price: "",
      category: "",
      thumbnail: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      price: Yup.number().required("Required"),
      // categories: Yup.string().required("Required"),
      thumbnail: Yup.string().url().required("Required"),
    }),
    onSubmit: (value) => {
       setProductsData([...productsData, value]);
      closeForm();
    },
  });

  return (
    <div className="modalBackground">
      <div className="modalContainer modalProductContainer">
        <div className="titleCloseBtn ">
          <Button text="X" onClick={() => closeForm()} />
        </div>
        <div className="title">
          <h2>
            Add new Product <i className="fa-solid fa-box-open"></i>{" "}
          </h2>
        </div>
        <div className="body">
          <form onSubmit={productForm.handleSubmit}>
            <div className="providerProductName">
              <div >
                <label>Product Name</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="exp : Potato "
                  className="login-input"
                  onChange={productForm.handleChange}
                  onBlur={productForm.handleBlur}
                  value={productForm.values.title}
                />
              </div>
              {productForm.touched.title && productForm.errors.title ? (
                <p style={{ color: "red" }}>{productForm.errors.title}</p>
              ) : null}
            </div>
            <div className="providerProductCategory">
              <label>Category</label>
              <select
                id="category"
                name="category"
                onChange={productForm.handleChange}
                onBlur={productForm.handleBlur}
                value={productForm.values.category}
              >
                {categoriesData.map((item, index) => (
                  <option key={index}> {item.category}</option>
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
                onChange={productForm.handleChange}
                onBlur={productForm.handleBlur}
                value={productForm.values.price}
              />
            </div>
            {productForm.touched.price && productForm.errors.price ? (
              <p style={{ color: "red" }}>{productForm.errors.price}</p>
            ) : null}
            <div className="providerProductImage">
              <label>Image URL</label>
              <input
                type="text"
                id="thumbnail"
                name="thumbnail"
                placeholder="URL "
                className="login-input"
                onChange={productForm.handleChange}
                onBlur={productForm.handleBlur}
                value={productForm.values.thumbnail}
              />
            </div>
            {productForm.touched.thumbnail && productForm.errors.thumbnail ? (
              <p style={{ color: "red" }}>{productForm.errors.thumbnail}</p>
            ) : null}
            <div className="button-container">
              <Button
                typeButton="submit"
                text="Add"
                buttonStyle="btn--outline add"
                buttonSize="btn--medium "
                // onClick={() => handleSubmit()}
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
