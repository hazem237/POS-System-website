import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import DashBoard from "./pages/DashBoard";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Categories from "./pages/Categories";
import { useState, useEffect } from "react";
import POS from "./pages/POS";

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/product" element={<Products />} />
          <Route path="/catagories" element={<Categories />} />
          <Route path="/users" element={<Users />} />
          <Route path="/pos" element={<POS />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
