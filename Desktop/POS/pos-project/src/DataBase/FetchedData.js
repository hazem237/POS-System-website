import React, { useState, useEffect } from "react";

const FetchedData = () => {
  const [usersData, setUsersData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    console.log("useEffect executed");

    const getUsers = async () => {
      const userFromServer = await fetchUsers();
      setUsersData(userFromServer);
    };

    const fetchUsers = async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    };
    const getProducts = async () => {
      const userFromServer = await fetchProducts();
      setProductsData(userFromServer);
    };

    const fetchProducts = async () => {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      return data;
    };
    const getCategories = async () => {
      const userFromServer = await fetchCategories();
      setCategoriesData(userFromServer);
    };

    const fetchCategories = async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    };

    getCategories();
    getProducts();
    getUsers();
  }, []);

  return {
    usersData,
    setUsersData,
    productsData,
    setProductsData,
    categoriesData,
    setCategoriesData,
  };
};

export default FetchedData;
