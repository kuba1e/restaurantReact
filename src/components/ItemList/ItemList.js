import React from "react";
import './ItemList.css'

const ItemList = ({ items, ItemComponent }) => {
  return (
    <ul className="items-list">
      {items.map((item) => {
        return (
          <li key={item.id}>
            <ItemComponent item={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
