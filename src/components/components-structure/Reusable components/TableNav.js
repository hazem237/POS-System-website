import React from "react";
import { Button } from "./Button";
import "../../components-style/Table.css";

const Table_nav = ({
  addButtonHandler,
  deleteButtonHandler,
  EditButtonHandler,
}) => {
  /* This is Tables Nav Button Container For All pages support Tables */
  return (
    <div className="table-nav-buttons-container">
      <Button
        text="Add"
        onClick={addButtonHandler}
        buttonStyle="btn--outline add"
        buttonSize="btn--small"
        icon=<i class="fa-solid fa-plus"></i>
      />
      <Button
        text="Delete "
        onClick={deleteButtonHandler}
        buttonStyle="btn--outline add"
        buttonSize="btn--small"
        icon=<i class="fa-solid fa-trash"></i>
      />
      <Button
        text="Edit "
        onClick={EditButtonHandler}
        buttonStyle="btn--outline add"
        buttonSize="btn--small"
        icon=<i class="fa-solid fa-pen-to-square"></i>
      />
    </div>
  );
};

export default Table_nav;
