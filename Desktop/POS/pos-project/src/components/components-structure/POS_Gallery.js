import React, { useContext } from "react";
import { DataContext } from "../../DataBase/DataContext";
import { Button } from "./Reusable components/Button";

const POS_Gallery = ({ clickedProduct }) => {
  const { usersData } = useContext(DataContext);

  return (
    <div className="POS-gallery">
      <nav className="user-input-container">
        <select>
          <option selected>No User</option>
          {usersData.map((user) => (
            <option>
              {user.first_name} {user.last_name}
            </option>
          ))}
        </select>
      </nav>
      <div className="sliders-container">
        <div className="slider cart-slider"></div>
        <div className="slider tax-slider"></div>
        <div className="slider user-slider"></div>
      </div>
      <div className="total-amount-container">
        <div className="total-amount"></div>
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
    </div>
  );
};

export default POS_Gallery;
