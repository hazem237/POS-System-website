import React, { useContext, useState } from "react";
import { DataContext } from "../../DataBase/DataContext";
import "../components-style/Statistics.css";

const Statistics = () => {
  const [buttonWelcome, setButtonWelcome] = useState(true);

  const { usersData, productsData, categoriesData } = useContext(DataContext);

  return (
    <div className="DashBoard">
      <div className="statistics-container">
        <div className="Data-catcher">
          {/* Greeting Part */}

          <section className="hey-part">
            {buttonWelcome && (
              <div className="welcome-dashboard">
                <i
                  className="fa-solid fa-xmark welcomeCancel"
                  onClick={() => setButtonWelcome(false)}
                ></i>
                <h2 className="welcome-header">
                  Welcome to Dashboard <i className="fa-solid fa-gauge"></i>
                </h2>
                <p>
                  On this page, you can take a quick look at your system data
                </p>
              </div>
            )}
            {/* <div className="greeting"></div> */}
          </section>

          {/*  System Information Part*/}

          <section className="information-part">
            <div className="Data-wrapper">
              <div className="Data-container users-number">
                <i className="fa fa-user" aria-hidden="true"></i>
                <h2>Users :</h2>
                <h6>Number of Users is </h6>
                <h1>{usersData.length}</h1>
              </div>
              <div className="Data-container products-number">
                <i className="fa-solid fa-tag"></i>
                <h2>Products :</h2>
                <h6>Number of Products is </h6>
                <h1>{productsData.length}</h1>
              </div>
              <div className="Data-container categories-number">
                <i className="fa-solid fa-sitemap"></i>
                <h2>Categories :</h2>
                <h6>Number of Categories is </h6>
                <h1>{categoriesData.length}</h1>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
