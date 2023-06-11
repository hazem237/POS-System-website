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
    fetch("http://localhost:5000/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProductsData(data);
      });

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
    // getProducts();
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
