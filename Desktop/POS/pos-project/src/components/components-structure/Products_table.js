import React, { useEffect, useState } from "react";
import { useTable } from "react-table";
import { PRODUCT_COLUMNS } from "./Reusable components/Columns";
import Table from "./Reusable components/Table";

const Products_table = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const userFromServer = await fetchUsers();
      setProducts(userFromServer);
    };

    getUsers();
  }, []);

  //Fetch Users
  const fetchUsers = async () => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();

    return data;
  };

  const tableInstance = useTable({
    columns: PRODUCT_COLUMNS,
    data: products,
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return <Table tableInstance={tableInstance} />;
};

export default Products_table;
