import React, { useContext, useEffect } from "react";
import "./TablesPage.css";
import TableForm from "../../AddForm/TableForm";
import Page from "../Page";
import TableItemList from "../../ItemList/TableItemList";
import AppContext from "../../../AppContext";
import {
  fetchTables,
  setActiveForm,
  setSearchValue,
  setFilterValueLocation,
  setFilterValueSitsQuantity,
} from "../../../features/tables";
import { useDispatch, useSelector } from "react-redux";

const TablesPage = (props) => {
  const {
    tablesData,
    isFormActive,
    filterValueLocation,
    filterValueSitsQuantity,
    searchingValue,
  } = useSelector(({ tables }) => tables);

  const dispatch = useDispatch();

  const { tableOptions, tableLabels } = useContext(AppContext);

  useEffect(() => {
    dispatch(fetchTables());
  }, [dispatch]);

  const form = isFormActive ? <TableForm /> : null;

  const preparedData = tablesData
    .filter((table) => {
      switch (filterValueSitsQuantity) {
        case "one person":
          return table.sitsQuantity === "one person";
        case "two person":
          return table.sitsQuantity === "two person";
        case "three person":
          return table.sitsQuantity === "three person";
        case "four person":
          return table.sitsQuantity === "four person";
        case "six person":
          return table.sitsQuantity === "six person";
        default:
          return table;
      }
    })
    .filter((table) => {
      switch (filterValueLocation) {
        case "center":
          return table.location === "center";
        case "terrasa":
          return table.location === "terrasa";
        case "near the window":
          return table.location === "near the window";
        case "in the corner":
          return table.location === "in the corner";
        default:
          return table;
      }
    })
    .filter((table) => {
      return table.description
        .toLowerCase()
        .includes(searchingValue.toLowerCase());
    });

  const onToggleForm = () => dispatch(setActiveForm());
  const onSelectChange = [
    (value) => dispatch(setFilterValueLocation(value)),
    (value) => dispatch(setFilterValueSitsQuantity(value)),
  ];
  const onTextChange = (value) => dispatch(setSearchValue(value));

  return (
    <Page
      form={form}
      onToggleForm={onToggleForm}
      onSelectChange={onSelectChange}
      onTextChange={onTextChange}
      preparedData={preparedData}
      options={tableOptions}
      labelsObj = {tableLabels}
    >
      {TableItemList().props.children}
    </Page>
  );
};

export default TablesPage;
