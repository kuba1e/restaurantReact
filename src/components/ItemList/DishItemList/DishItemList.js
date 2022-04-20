import React, {Fragment} from "react";
import DishItem from "../../Item/DishItem";
import ItemList from "../ItemList";

const DishItemList = () => {
  return (
    <Fragment>
      <ItemList ItemComponent={DishItem} />
    </Fragment>
  );
};

export default DishItemList;
