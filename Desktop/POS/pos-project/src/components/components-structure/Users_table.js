import React, { useMemo, useEffect, useState } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./Users_columns";
import PRODUCTS_DATA from "../Data/USERS_DATA.json";
import "../components-style/Users_table.css";

const Products_table = () => {


  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => PRODUCTS_DATA, []);


  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  // console.log(headerGroups);
  //   console.log(headerGroups);
  return (
    <div className="user-page">
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
                {row.cells.map((cell ,index) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Products_table;
