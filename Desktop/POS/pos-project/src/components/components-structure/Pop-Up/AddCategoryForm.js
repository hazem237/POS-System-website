import React, { useState } from "react";
import "../../components-style/Add_Form.css";
import { Button } from "../Reusable components/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddCategoryForm = ({
  setOppen,
  categoriesData,
  setCategoriesData,
  update,
}) => {
  const [stroeData, setStoreData] = useState(categoriesData);

  const AddCategoryForm = useFormik({
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
      //   console.log(value);
      setStoreData([...stroeData, value]);
      console.log(stroeData);
      localStorage.setItem("categories", JSON.stringify(stroeData));
      const newCategories = JSON.parse(localStorage.getItem("categories"));
      setCategoriesData(newCategories);

      //   update();
    },
  });

  const closeForm = () => {
    setOppen(false);
  };
  //   console.log(AddCategoryForm.values);
  //   console.log(AddCategoryForm.errors.category);
  //   console.log(AddCategoryForm.touched.category);
  //    console.log(AddCategoryForm.touched.image);
  const categories = JSON.parse(localStorage.getItem("categories"));
  return (
    <div className="modalBackground">
      <div className="modalContainer modalCategoryContainer">
        <div className="titleCloseBtn ">
          <Button text="X" onClick={() => closeForm()} />
        </div>
        <div className="title">
          <h2>
            Add new Category <i className="fa-solid fa-code-branch"></i>
          </h2>
        </div>

        <div className="body">
          <form onSubmit={AddCategoryForm.handleSubmit}>
            <div className="providerCategoriesName">
              <div className="category-name-container">
                <label>Category Name</label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  placeholder="exp : Books "
                  className="login-input"
                  onChange={AddCategoryForm.handleChange}
                  onBlur={AddCategoryForm.handleBlur}
                  value={AddCategoryForm.values.category}
                />
              </div>
              {AddCategoryForm.touched.category &&
              AddCategoryForm.errors.category ? (
                <p style={{ color: "red" }}>
                  {AddCategoryForm.errors.category}
                </p>
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
                onChange={AddCategoryForm.handleChange}
                onBlur={AddCategoryForm.handleBlur}
                value={AddCategoryForm.values.image}
              />
            </div>
            {AddCategoryForm.touched.image && AddCategoryForm.errors.image ? (
              <p style={{ color: "red" }}>{AddCategoryForm.errors.image}</p>
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

export default AddCategoryForm;
