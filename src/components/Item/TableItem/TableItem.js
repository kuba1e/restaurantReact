import React, { Fragment } from "react";
import Item from '../Item'
import ErrorBoundry from "../../ErrorBoundry";
import Loader from "../../Loader";
import ItemRecord from "../ItemRecord";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTable,
  setActiveForm,
  setEditedValues,
} from "../../../features/tables";

const TableItemRecord = ()=>{
  return (
    <Fragment>
      <ItemRecord label="Table num" field="tableNumber"/>
      <ItemRecord label="Sits quantity" field="sitsQuantity"/>
      <ItemRecord label="Location" field="location"/>
      <ItemRecord label="Description" field="description"/>
    </Fragment>
  )
}

const TableItem = ({ item, ...props }) => {
  const loading = useSelector(({ tables: { loading } }) => loading);
  const dispatch = useDispatch();

  const leftBtnHandler = (e) => {
    dispatch(setEditedValues(item));
    dispatch(setActiveForm());
  };

  const rightBtnHandler = (e) => {
    dispatch(deleteTable(item));
  };

  const loadingWidget = loading === "pending" ? <Loader /> : null;
  const itemBody =
    loading === "idle" ? (
      <Item
        rightBtnHandler={rightBtnHandler}
        leftBtnHandler={leftBtnHandler}
        item={item}
      >
        {TableItemRecord().props.children}
      </Item>
    ) : null;

  return (
    <ErrorBoundry>
      <div className="list__item-inner">
        {loadingWidget}
        {itemBody}
      </div>
    </ErrorBoundry>
  );
};

export default TableItem;
