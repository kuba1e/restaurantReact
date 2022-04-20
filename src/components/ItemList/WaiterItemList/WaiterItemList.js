import React, { Fragment } from "react";
import WaiterItem from "../../Item/WaiterItem";
import ItemList from "../ItemList";

const WaiterItemList = () => {
  return (
    <Fragment>
      <ItemList ItemComponent={WaiterItem} />
    </Fragment>
  );
};

export default WaiterItemList;
