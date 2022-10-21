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

  useEffect(() => {
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

    getUsers();
    getProducts();
    getCategories();
  }, []);

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


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/product" element={<Products productsData={products} />} />
          <Route path="/catagories" element={<Categories categoriesData={categories}/>} />
          <Route path="/users" element={<Users userData={users} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
