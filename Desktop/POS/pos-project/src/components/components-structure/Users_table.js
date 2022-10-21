import React, { useEffect, useState } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import { USER_COLUMNS } from "./Reusable components/Columns";
import Table from "./Reusable components/Table";

const Users_table = ({ usersData }) => {
  const tableInstance = useTable(
    {
      columns: USER_COLUMNS,
      data: usersData,
    },
    useGlobalFilter,
    usePagination
  );

  return (
    <div>
      <Table tableInstance={tableInstance} numberOfRows={usersData.length} />
    </div>
  );
};

export default Users_table;
