import React from "react";
import "../../components-style/Table.css";
import { Button } from "./Button";
import FilteringTable from "./FilteringTable";

const Table = ({ tableInstance, numberOfRows }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    state,
    prepareRow,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter, pageIndex, pageOption } = state;
  const numberOfPages = numberOfRows > 10 ? Math.ceil(numberOfRows / 10) : 1;

  return (
    <>
      <FilteringTable filter={globalFilter} setFilter={setGlobalFilter} />
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
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, index) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <span>
        Page{" "}
        <strong>
          {pageIndex + 1} of {numberOfPages}
        </strong>
      </span>
      <Button onClick={nextPage} text="Next" disable={!canNextPage} />
      <Button
        onClick={previousPage}
        text="Previous"
        disable={!canPreviousPage}
        buttonStyle="next-pre"
      />
    </>
  );
};

export default Table;
