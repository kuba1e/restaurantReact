import React, { Fragment } from 'react'
import Loader from '../../Loader';
import Item from '../Item';
import ErrorBoundry from '../../ErrorBoundry';
import ItemRecord from '../ItemRecord';
import { setActiveForm, setEditedValues,  } from '../../../features/dishes';
import { deleteDish } from '../../../features/dishes';
import { useSelector, useDispatch } from 'react-redux';

const DishItemRecord = ()=>{
  return (
    <Fragment>
      <ItemRecord label="Country" field="country"/>
      <ItemRecord label="Dishes" field="type"/>
      <ItemRecord label="Price" field = "price"/>
      <ItemRecord label="Description" field = 'description'/>
    </Fragment>
  )
}


export const DishItem = ({item, ...props}) => {
  const loading = useSelector(({ tables: { loading } }) => loading);
  const dispatch = useDispatch();

  const leftBtnHandler = (e) => {
    dispatch(setEditedValues(item));
    dispatch(setActiveForm());
  };

  const rightBtnHandler = (e) => {
    dispatch(deleteDish(item));
  };

  const loadingWidget = loading === "pending" ? <Loader /> : null;
  const itemBody =
    loading === "idle" ? (
      <Item
        rightBtnHandler={rightBtnHandler}
        leftBtnHandler={leftBtnHandler}
        item={item}
      >
        {DishItemRecord().props.children}
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
}
