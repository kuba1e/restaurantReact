import React, { Fragment } from "react";
import TableItem from "../../Item/TableItem";
import ItemList from "../ItemList";

const TableItemList = () => {
  return (
    <Fragment>
      <ItemList ItemComponent={TableItem} />
    </Fragment>
  );
};

export default TableItemList;
