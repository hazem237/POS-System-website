import React, { useState } from "react";
import "../components-style/Statistics.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import USERS_DATA from "../Data/USERS_DATA.json";
import PRODUCTS_DATA from "../Data/PRODUCTS_DATA.json"

const Statistics = () => {
  const [buttonWelcome, setButtonWelcome] = useState(true);
  return (
    <div className="DashBoard">
      <div className="statistics-container">
        <div className="Data-catcher">
          {buttonWelcome && (
            <div className="welcome-dashboard">
              <i
                className="fa-solid fa-xmark"
                onClick={() => setButtonWelcome(false)}
              ></i>
              <h2 className="welcome-header">
                Welcome to Dashboard <i className="fa-solid fa-gauge"></i>
              </h2>
              <p>On this page, you can take a quick look at your system data</p>
            </div>
          )}
          <div className="Data-wrapper">
            <div className="Data-container users-number">
              <i className="fa fa-user" aria-hidden="true"></i>
              <h2>Users :</h2>
              <h6>Number of Users is </h6>
              <h1>{USERS_DATA.length}</h1>
            </div>
            <div className="Data-container products-number">
              <i className="fa-solid fa-tag"></i>
              <h2>Products :</h2>
              <h6>Number of Products is </h6>
              <h1>{PRODUCTS_DATA.length}</h1>
            </div>
            <div className="Data-container categories-number">
              <i className="fa-solid fa-sitemap"></i>
              <h2>Categories :</h2>
              <h6>Number of Categories is </h6>
              <h1>13</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
