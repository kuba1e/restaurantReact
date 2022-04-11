import React from "react";
import DishItem from "../../Item/DishItem";
import ItemList from "../ItemList";

const DishItemList = ({ items }) => {
  return <ItemList items={items} ItemComponent={DishItem} />;
};

export default DishItemList;
