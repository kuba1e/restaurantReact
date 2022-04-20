import React, { Fragment } from "react";
import Item from '../Item'
import ErrorBoundry from "../../ErrorBoundry";
import Loader from "../../Loader";
import ItemRecord from "../ItemRecord";
import { useDispatch, useSelector } from "react-redux";
import { deleteWaiter, setActiveForm, setEditedValues } from "../../../features/waiters";

const WaiterItemRecord = ()=>{
  return (
    <Fragment>
      <ItemRecord label="First Name" field="firstName"/>
      <ItemRecord label="Last Name" field="lastName"/>
      <ItemRecord label="Position" field="position"/>
      <ItemRecord label="App Role" field="appRole"/>
    </Fragment>
  )
}

const WaiterItem = ({ item, ...props }) => {
  const loading = useSelector(({ waiters: { loading } }) => loading);
  const dispatch = useDispatch();

  const leftBtnHandler = (e) => {
    dispatch(setEditedValues(item));
    dispatch(setActiveForm());
  };

  const rightBtnHandler = (e) => {
    dispatch(deleteWaiter(item));
  };

  const loadingWidget = loading === "pending" ? <Loader /> : null;
  const itemBody =
    loading === "idle" ? (
      <Item
        rightBtnHandler={rightBtnHandler}
        leftBtnHandler={leftBtnHandler}
        item={item}
      >
        {WaiterItemRecord().props.children}
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

export default WaiterItem;
