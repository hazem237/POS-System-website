import React from "react";
import "../../components-style/Form.css";
import { Button } from "../Reusable components/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddUserForm = ({ setOpen, userData, setUserData }) => {
  const closeForm = () => {
    setOpen(false);
  };
  const userForm = useFormik({
    initialValues: {
      id: Math.floor(Math.random() * 1000 + 1),
      first_name: "",
      last_name: "",
      phone: "",
      Subscription_date: new Date().toJSON().slice(0, 10),
      discount_percentage: "",
      gender: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string(" First Name should be string").required(
        "Required"
      ),
      last_name: Yup.string(" Last Name should be string").required("Required"),
      // phone: Yup.number("Phone should be number").required("Required"),
      // gender : Yup.string().required(),
      // discount_percentage: Yup.number().required("Required"),
    }),
    onSubmit: (value) => {
      setUserData([...userData, value]);
      closeForm();
    },
  });
  console.log(userForm.values);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn ">
          <Button text="X" onClick={() => closeForm()} />
        </div>
        <div className="title">
          <h2>
            Add new User <i class="fa-solid fa-user"></i>
          </h2>
        </div>
        <div className="body">
          <form onSubmit={userForm.handleSubmit}>
            <div className="providerUserName">
              <div className="first-name-container">
                <label>First Name</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="First Name "
                  className="login-input"
                  onChange={userForm.handleChange}
                  onBlur={userForm.handleBlur}
                  value={userForm.values.first_name}
                />
                {userForm.touched.first_name && userForm.errors.first_name ? (
                  <p style={{ color: "red" }}>{userForm.errors.first_name}</p>
                ) : null}
              </div>

              <div className="last-name-container">
                <label>Last Name</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="Last Name "
                  className="login-input"
                  onChange={userForm.handleChange}
                  onBlur={userForm.handleBlur}
                  value={userForm.values.last_name}
                />
                {userForm.touched.last_name && userForm.errors.last_name ? (
                  <p style={{ color: "red" }}>{userForm.errors.last_name}</p>
                ) : null}
              </div>
            </div>

            <div className="providerUserPhone">
              <label>Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone "
                className="login-input"
                onChange={userForm.handleChange}
                onBlur={userForm.handleBlur}
                value={userForm.values.phone}
              />
              {userForm.touched.phone && userForm.errors.phone ? (
                <p style={{ color: "red" }}>{userForm.errors.phone}</p>
              ) : null}
            </div>
            <div className="providerUserDiscount">
              <div className="dis-container">
                {" "}
                <lable>Discount percentage</lable>
                <input
                  type="number"
                  id="discount_percentage"
                  name="discount_percentage"
                  className="login-input discount_percentage"
                  onChange={userForm.handleChange}
                  onBlur={userForm.handleBlur}
                  value={userForm.values.discount_percentage}
                />
                {userForm.touched.discount_percentage &&
                userForm.errors.discount_percentage ? (
                  <p style={{ color: "red" }}>
                    {userForm.errors.discount_percentage}
                  </p>
                ) : null}
              </div>
              <div className="percentage">%</div>
            </div>
            <div className="providerUserGender">
              <select
                id="gender"
                name="gender"
                onChange={userForm.handleChange}
                onBlur={userForm.handleBlur}
                value={userForm.values.gender}
              >
                <option>Male</option>
                <option>Female</option>
              </select>
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

export default AddUserForm;
