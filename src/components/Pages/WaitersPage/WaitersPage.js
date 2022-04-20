import React, { useContext, useEffect } from "react";
import Page from "../Page";
import {
  setActiveForm,
  fetchWaiters,
  setFilterValuePosition,
  setFilterValueAppRole,
  setSearchValue,
} from "../../../features/waiters";
import WaiterForm from "../../AddForm/WaiterForm";
import WaiterItemList from "../../ItemList/WaiterItemList";
import AppContext from "../../../AppContext";
import { useDispatch, useSelector } from "react-redux";

export const WaitersPage = () => {
  const {
    waitersData,
    isFormActive,
    filterValueAppRole,
    filterValuePosition,
    searchingValue,
  } = useSelector(({ waiters }) => waiters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWaiters());
  }, [dispatch]);

  const { waitersOptions, waitersLabels } = useContext(AppContext);

  const form = isFormActive ? <WaiterForm /> : null;

  const preparedData = waitersData
    .filter((waiter) => {
      switch (filterValueAppRole) {
        case "ukraine":
          return waiter.appRole === "ukraine";
        case "italy":
          return waiter.appRole === "italy";
        case "georgia":
          return waiter.appRole === "georgia";
        case "mexican":
          return waiter.appRole === "mexican";
        case "eastern":
          return waiter.appRole === "eastern";
        default:
          return waiter;
      }
    })
    .filter((waiter) => {
      switch (filterValuePosition) {
        case "main dishes":
          return waiter.position === "main dishes";
        case "salads":
          return waiter.position === "salads";
        case "desserts":
          return waiter.position === "desserts";
        case "drinks":
          return waiter.position === "drinks";
        default:
          return waiter;
      }
    })
    .filter((waiter) => {
      return waiter.description
        .toLowerCase()
        .includes(searchingValue.toLowerCase());
    });

  const onToggleForm = () => dispatch(setActiveForm());
  const onSelectChange = [
    (value) => dispatch(setFilterValueAppRole(value)),
    (value) => dispatch(setFilterValuePosition(value)),
  ];
  const onTextChange = (value) => dispatch(setSearchValue(value));

  return (
    <Page
      form={form}
      onToggleForm={onToggleForm}
      onSelectChange={onSelectChange}
      onTextChange={onTextChange}
      preparedData={preparedData}
      options={waitersOptions}
      labelsObj={waitersLabels}
    >
      {WaiterItemList().props.children}
    </Page>
  );
};
