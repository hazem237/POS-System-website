import React from "react";
import "../../components-style/Add_Form.css";
import { Button } from "../Reusable components/Button";

const AddUserForm = ({ setOppen, userData, setUserData }) => {
  const closeForm = () => {
    setOppen(false);
  };
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
          <form>
            <div className="providerUserName">
              <div className="first-name-container">
                <label>First Name</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="First Name "
                  className="login-input"
                />
              </div>
              <div className="last-name-container">
                <label>Last Name</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="Last Name "
                  className="login-input"
                />
              </div>
            </div>
            <div className="providerUserPhone">
              <label>Phone</label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Phone "
                className="login-input"
              />
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
                />
              </div>
              <div className="percentage">%</div>
            </div>
            <div className="providerUserGender">
              <div className="male">
                <input
                  type="radio"
                  id="gender"
                  name="gender"
                  className="login-input"
                />
                <label>Male</label>
              </div>
              <div className="female">
                <input
                  type="radio"
                  id="gender"
                  name="gender"
                  className="login-input"
                />
                <label>Female</label>
              </div>
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
