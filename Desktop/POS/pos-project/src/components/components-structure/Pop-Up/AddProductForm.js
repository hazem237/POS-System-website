import React, { useState } from "react";
import "../../components-style/Add_Form.css";
import { Button } from "../Reusable components/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddProductForm = ({ setOppen, productsData, setProductsData }) => {
  /* Fetch The Category Form LS to be shown in Select input*/
  const categories = JSON.parse(localStorage.getItem("categories"));

  /* Functions*/
  const closeForm = () => {
    setOppen(false);
  };

  const [stroeData, setStoreData] = useState(productsData);

  const AddProductForm = useFormik({
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
      categories: Yup.string().required("Required"),
      thumbnail: Yup.string().url().required("Required"),
    }),
    onSubmit: (value) => {
         setStoreData([...stroeData, value]);
       console.log(stroeData);
        localStorage.setItem("products", JSON.stringify(stroeData));
        setProductsData(JSON.parse(localStorage.getItem("products")));
        //   update();
      console.log(value);
    },
  });

//  console.log(AddProductForm.values);
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
          <form onSubmit={AddProductForm.handleSubmit}>
            <div className="providerProductName">
              <div className="product-name-container">
                <label>Product Name</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="exp : Potato "
                  className="login-input"
                  onChange={AddProductForm.handleChange}
                  onBlur={AddProductForm.handleBlur}
                  value={AddProductForm.values.title}
                />
              </div>
              {AddProductForm.touched.title && AddProductForm.errors.title ? (
                <p style={{ color: "red" }}>{AddProductForm.errors.title}</p>
              ) : null}
            </div>
            <div className="providerProductCategory">
              <label>Category</label>
              <select
                id="category"
                name="category"
                onChange={AddProductForm.handleChange}
                onBlur={AddProductForm.handleBlur}
                value={AddProductForm.values.category}
              >
                {categories.map((item, index) => (
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
                onChange={AddProductForm.handleChange}
                onBlur={AddProductForm.handleBlur}
                value={AddProductForm.values.price}
              />
            </div>
            {AddProductForm.touched.price && AddProductForm.errors.price ? (
              <p style={{ color: "red" }}>{AddProductForm.errors.price}</p>
            ) : null}
            <div className="providerProductImage">
              <label>Image URL</label>
              <input
                type="text"
                id="thumbnail"
                name="thumbnail"
                placeholder="URL "
                className="login-input"
                onChange={AddProductForm.handleChange}
                onBlur={AddProductForm.handleBlur}
                value={AddProductForm.values.thumbnail}
              />
            </div>
            {AddProductForm.touched.thumbnail &&
            AddProductForm.errors.thumbnail ? (
              <p style={{ color: "red" }}>{AddProductForm.errors.thumbnail}</p>
            ) : null}
            <div className="button-container">
              <Button
                typeButton="submit"
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
