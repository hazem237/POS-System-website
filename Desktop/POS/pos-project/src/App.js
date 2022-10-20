import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import DashBoard from "./pages/DashBoard";
import Products from "./pages/Products";
import { useEffect, useState } from "react";
function App() {
  const [productsData, setProducts] = useState([]);
  const [productCategories, setProductCategories] = useState([
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ]);

  useEffect(() => {
    const getProducts = async () => {
      const productFromServer = await fetchProducts();
      setProducts(productFromServer);
    };

    getProducts();
  }, []);
  //
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    return data;
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/product" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
