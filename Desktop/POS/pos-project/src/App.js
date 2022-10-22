import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import DashBoard from "./pages/DashBoard";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Categories from "./pages/Categories";
import { useState, useEffect } from "react";


function App() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [d, setD] = useState([]);

  useEffect(() => {
    console.log("useEffect executed");
    const getUsers = async () => {
      const userFromServer = await fetchUsers();
      setUsers(userFromServer);
    };
    const getProducts = async () => {
      const userFromServer = await fetchProducts();
      setProducts(userFromServer);
    };
    const getCategories = async () => {
      const userFromServer = await fetchCategories();
      setCategories(userFromServer);
    };
    const fetchUsers = async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();

      return data;
    };
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();

      return data;
    };
    const fetchCategories = async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();

      return data;
    };

    getUsers();
    getProducts();
    getCategories();
  }, []);

  // console.log(users);
  const add = () => {
    const newUser = {
      id: 9110,
      "first-name": "Tripp",
      "last-name": "Pelfer",
      gender: "Male",
      phone: "108-232-2211",
      "Subscription-date": "10/2/2019",
      "discount-percentage": 10.9,
    };
    setUsers([...users, newUser]);
    console.log(users);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route
            path="/dashboard"
            element={
              <DashBoard
                productsData={products}
                categoriesData={categories}
                userData={users}
                onClick={() => add()}
              />
            }
          />
          <Route
            path="/product"
            element={<Products productsData={products} />}
          />
          <Route
            path="/catagories"
            element={<Categories categoriesData={categories} />}
          />
          <Route path="/users" element={<Users userData={users} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
