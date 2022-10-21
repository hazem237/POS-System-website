import React, { useMemo, useEffect, useState } from "react";
import { useTable } from "react-table";
import { PRODUCT_COLUMNS } from "./Columns";
import PRODUCTS_DATA from "../Data/PRODUCTS_DATA.json";
import "../components-style/Users_table.css";
import { Button } from "./Button";

const Products_table = () => {
  const columns = useMemo(() => PRODUCT_COLUMNS, []);
  const data = useMemo(() => PRODUCTS_DATA, []);

  const tableInstance = useTable({
    columns,
    data,
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table>
    
      <table {...getTableProps()} className="user-table">
        <thead className="user-table-header">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="user-table-body">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </table>
  );
};

export default Products_table;
