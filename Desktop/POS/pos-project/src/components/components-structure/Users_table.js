import React, { useEffect, useState } from "react";
import { useTable , useGlobalFilter , usePagination} from "react-table";
import { USER_COLUMNS } from "./Reusable components/Columns";
import Table from "./Reusable components/Table";


const Products_table = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const userFromServer = await fetchUsers();
      setUsers(userFromServer);
    };

    getUsers();
  }, []);

  //Fetch Users
  const fetchUsers = async () => {
    const res = await fetch("http://localhost:5000/users");
    const data = await res.json();

    return data;
  };

  const tableInstance = useTable({
    columns: USER_COLUMNS,
    data: users,
  } , useGlobalFilter , usePagination);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div>
      <Table tableInstance={tableInstance} numberOfRows={users.length} />
    </div>
  );
};

export default Products_table;
