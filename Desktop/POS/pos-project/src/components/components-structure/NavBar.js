import React, { useState, useEffect } from "react";
import { Button } from "../components-structure/Button.js";
import { Link } from "react-router-dom";
import "../components-style/NavBar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/dashboard"
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            HPOS <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/dashboard"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/product"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/catagories"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Categories
              </Link>
            </li>

            <li>
              <Link to="/" className="logOut-li" onClick={closeMobileMenu}>
                <Button buttonStyle="btn--outline" text="Log out">
                  Log Out
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
