import React, { useEffect, useState } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import { CATEGORIES_COLUMNS } from "./Reusable components/Columns";
import Table from "./Reusable components/Table";

const Categories_table = ({ categoriesData }) => {
  const tableInstance = useTable(
    {
      columns: CATEGORIES_COLUMNS,
      data: categoriesData,
    },
    useGlobalFilter,
    usePagination
  );

  return (
    <div>
      <Table tableInstance={tableInstance} numberOfRows={categoriesData} />
    </div>
  );
};

export default Categories_table;
