import React from "react";
import TableItem from "../../Item/TableItem";
import ItemList from "../ItemList";

const TableItemList = ({items}) => {
  
  return <ItemList items = {items}  ItemComponent = {TableItem}/>
};

export default TableItemList;
