import React from "react";
import "./ItemList.css";

const ItemList = ({ preparedData, ItemComponent }) => {
  return (
    <ul className="items-list">
      {preparedData.map((item) => {
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
