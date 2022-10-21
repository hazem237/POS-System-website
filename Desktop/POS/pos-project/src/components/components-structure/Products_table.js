import React, { useEffect, useState } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import { PRODUCT_COLUMNS } from "./Reusable components/Columns";
import Table from "./Reusable components/Table";

const Products_table = ({ productsData }) => {
  const tableInstance = useTable(
    {
      columns: PRODUCT_COLUMNS,
      data: productsData,
    },
    useGlobalFilter,
    usePagination
  );

  return (
    <Table tableInstance={tableInstance} numberOfRows={productsData.length} />
  );
};

export default Products_table;
