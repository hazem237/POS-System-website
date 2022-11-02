import React, { useState } from "react";
import "../../components-style/Form.css";
import { Button } from "../Reusable components/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddCategoryForm = ({ setOppen, categoriesData, setCategoriesData }) => {
 

  const categoryForm = useFormik({
    initialValues: {
      category: "",
      image: "",
    },
    validationSchema: Yup.object({
      category: Yup.string("Category Name should be string").required(
        "Required"
      ),
      image: Yup.string().url().required("Required"),
    }),
    onSubmit: (value) => {
      setCategoriesData([...categoriesData, value]);
      setOppen(false)
    },
  });

  return (
    <div className="modalBackground">
      <div className="modalContainer modalCategoryContainer">
        <div className="titleCloseBtn ">
          <Button text="X" onClick={() => setOppen(false)} />
        </div>
        <div className="title">
          <h2>
            Add new Category <i className="fa-solid fa-code-branch"></i>
          </h2>
        </div>

        <div className="body">
          <form onSubmit={categoryForm.handleSubmit}>
            <div className="providerCategoriesName">
              <div className="category-name-container">
                <label>Category Name</label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  placeholder="exp : Books "
                  className="login-input"
                  onChange={categoryForm.handleChange}
                  onBlur={categoryForm.handleBlur}
                  value={categoryForm.values.category}
                />
              </div>
              {categoryForm.touched.category && categoryForm.errors.category ? (
                <p style={{ color: "red" }}>{categoryForm.errors.category}</p>
              ) : null}
            </div>
            <div className="providerCategoryImage">
              <label>Image URL</label>
              <input
                type="text"
                id="image"
                name="image"
                placeholder="URL "
                className="login-input"
                onChange={categoryForm.handleChange}
                onBlur={categoryForm.handleBlur}
                value={categoryForm.values.image}
              />
            </div>
            {categoryForm.touched.image && categoryForm.errors.image ? (
              <p style={{ color: "red" }}>{categoryForm.errors.image}</p>
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
                onClick={() => setOppen(false)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryForm;
