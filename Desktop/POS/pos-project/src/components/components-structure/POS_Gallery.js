import React, { useContext, useState } from "react";
import { DataContext } from "../../DataBase/DataContext";
import { Button } from "./Reusable components/Button";
import OpenCart from "../../components/components-structure/Pop-Up/OpenCart";
import { useFormik } from "formik";

const POS_Gallery = ({ clickedProduct, productsCost, setClickProduct }) => {
  const { usersData } = useContext(DataContext);
  const [openCartWindow, setOpenCartWindow] = useState(false);
  const [openEditTax, setOpenEditTax] = useState(false);
  const [texValue, setTextValue] = useState(0);
  const [userDiscount, setUserDiscount] = useState(0);

  const handleEditTax = () => {
    setOpenEditTax(false);
  };
  const isEmpty = () => {
    return clickedProduct.length === 0;
  };
  console.log(productsCost);
  return (
    <div className="POS-gallery">
      <nav className="user-input-container">
        <select id="discount">
          <option selected>No User</option>
          {usersData.map((user, index) => (
            <option key={index} value={user.discount_percentage}>
              {user.first_name} {user.last_name}
            </option>
          ))}
        </select>
      </nav>
      <div className="sliders-container">
        <div className="slider  ">
          <p className={`${isEmpty() ? "slider-paragraph" : "notEmpty"}`}>
            {" "}
            Cart <i className="fa-solid fa-cart-shopping"></i>{" "}
            {clickedProduct.length}
          </p>

          <div className="money-numbers">{productsCost} $</div>
          <div className="cart-slider">
            <i
              class="fa-solid fa-arrow-up-right-from-square"
              onClick={() => setOpenCartWindow(true)}
            ></i>
          </div>
        </div>
        <div className="slider ">
          <p className="slider-paragraph">
            Tax <i className="fa-solid fa-coins"></i>
          </p>
          <div className="money-numbers">{texValue} $</div>
          <div className="tax-slider">
            {openEditTax && (
              <div className="tax-edit">
                <input
                  type="number"
                  placeholder="Edit"
                  onChange={(e) => setTextValue(e.target.value)}
                />
                <Button
                  text="Done"
                  buttonSize="btn--small"
                  buttonStyle="btn--outline"
                  onClick={() => handleEditTax()}
                />
              </div>
            )}
            <i
              class="fa-regular fa-pen-to-square"
              onClick={() => setOpenEditTax(true)}
            ></i>
          </div>
        </div>
        <div className="slider user-slider">
          <p className="slider-paragraph">
            User Discount <i class="fa-solid fa-user"></i>
          </p>
          <div className="money-numbers"> </div>
        </div>
      </div>
      <div className="total-amount-container">
        <p>
          Total <i className="fa-solid fa-sack-dollar"></i>{" "}
        </p>
      </div>
      <div className="POS-buttons-container">
        <Button
          text="Cancel"
          buttonStyle="btn--outline btn--cancel"
          buttonSize="btn--medium"
        />
        <Button
          text="Purchase"
          buttonStyle="btn--outline btn--purchase"
          buttonSize="btn--medium "
        />
      </div>
      {openCartWindow && (
        <OpenCart
          cartWindow={setOpenCartWindow}
          setClickProduct={setClickProduct}
          clickedProduct={clickedProduct}
        />
      )}
    </div>
  );
};

export default POS_Gallery;
