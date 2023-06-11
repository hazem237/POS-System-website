import React, { useContext, useState } from "react";
import { DataContext } from "../../../../DataBase/DataContext";
import { Button } from "../../Reusable components/Button";
import OpenCart from "../../Pop-Up/OpenCart"
import Bill from "../../Pop-Up/Bill";

const POS_Gallery = ({ clickedProduct, setClickProduct }) => {
  /* clickedProduct && setClickProduct are  array with all clicked product  */

  /* Get userData to select The current selected user's Discount */
  const { usersData } = useContext(DataContext);

  /*Control variables  */
  const [openCartWindow, setOpenCartWindow] = useState(false);
  const [openEditTax, setOpenEditTax] = useState(false);
  const [taxValue, setTaxValue] = useState(4.5);
  const [keyCheckDiscount, setKeyCheckDiscount] = useState("No User");
  const [openBillWindow , setOpenBillWindow]=useState(false);

  /* Handlers && Functions */
  const handleEditTax = () => {
    setOpenEditTax(false);
  };
  const handleCancelPurchase = () => {
    setClickProduct([]);
    setKeyCheckDiscount("No User");
    setTaxValue(4.5);
  };
  const isEmpty = () => {
    return clickedProduct.length === 0;
  };
  const getDiscount = () => {
    return keyCheckDiscount && keyCheckDiscount != "No User"
      ? usersData.filter((u) => u.first_name === keyCheckDiscount)[0]
          .discount_percentage
      : 0;
  };
  const getTotal = () => {
    return (
      +taxValue +
      +clickedProduct.reduce((acc, curr) => acc + curr.price, 0) -
      (+taxValue + +clickedProduct.reduce((acc, curr) => acc + curr.price, 0)) *
        (+getDiscount() / 100)
    ).toFixed(2);
  };

  return (
    <div className="POS-gallery">
      <nav className="user-input-container">
        <select
          value={keyCheckDiscount}
          onChange={(e) => setKeyCheckDiscount(e.target.value)}
        >
          <option selected>No User</option>
          {usersData.map((user, index) => (
            <option key={index}>{user.first_name}</option>
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

          <div className="money-numbers">
            {clickedProduct.reduce(
              (acc, curr) => acc + curr.price * curr.quantity,
              0
            )}{" "}
            $
          </div>
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
          <div className="money-numbers">{taxValue} $</div>
          <div className="tax-slider">
            {openEditTax && (
              <div className="tax-edit">
                <input
                  type="number"
                  placeholder="Edit"
                  onChange={(e) => setTaxValue(e.target.value)}
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
          <div className="money-numbers">{getDiscount()} %</div>
        </div>
      </div>
      <div className="total-amount-container">
        <p>
          Total <i className="fa-solid fa-sack-dollar"></i>{" "}
        </p>
        <div className="money-numbers">{getTotal()} $</div>
      </div>
      <div className="POS-buttons-container">
        <Button
          text="Cancel"
          buttonStyle="btn--outline btn--cancel"
          buttonSize="btn--medium"
          onClick={() => handleCancelPurchase()}
        />
        <Button
          text="Purchase"
          buttonStyle="btn--outline btn--purchase"
          buttonSize="btn--medium "
          onClick={()=> setOpenBillWindow(true)}
        />
      </div>
      {openCartWindow && (
        <OpenCart
          cartWindow={setOpenCartWindow}
          setClickProduct={setClickProduct}
          clickedProduct={clickedProduct}
        />
      )}
      { openBillWindow &&
        <Bill
          userName={keyCheckDiscount}
          Bill={clickedProduct.reduce(
            (acc, curr) => acc + curr.price * curr.quantity,
            0
          )}
          Discount={getDiscount()}
          Tax={taxValue}
          Total={getTotal()}
          setOpenBillWindow ={setOpenBillWindow}
          cancelProccess ={handleCancelPurchase}
        />
      }
    </div>
  );
};

export default POS_Gallery;
