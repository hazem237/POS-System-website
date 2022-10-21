import React, { useEffect, useState } from "react";
import { useTable } from "react-table";
import { CATEGORIES_COLUMNS } from "./Columns";
import Table from "./Table";

const Categories_table = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const userFromServer = await fetchUsers();
      setCategories(userFromServer);
    };

    getUsers();
  }, []);

  //Fetch Users
  const fetchUsers = async () => {
    const res = await fetch("http://localhost:5000/categories");
    const data = await res.json();

    return data;
  };

  const tableInstance = useTable({
    columns: CATEGORIES_COLUMNS,
    data: categories,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className="user-page">
      <Table tableInstance={tableInstance} />
    </div>
  );
};

export default Categories_table;
