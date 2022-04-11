import React, { useContext, useEffect } from "react";
import Page from "../Page";
import {
  setActiveForm,
  setFilterValueType,
  setFilterValueCountry,
  setSearchValue,
  fetchDishes,
} from "../../../features/dishes/dishesSlice";
import DishForm from "../../AddForm/DishForm";
import AppContext from "../../../AppContext";
import { useDispatch, useSelector } from "react-redux";

export const DishesPage = () => {
  const {
    dishesData,
    isFormActive,
    filterValueCountry,
    filterValueType,
    searchingValue,
  } = useSelector(({ dishes }) => dishes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);

  const {dishesOptions, dishesLabels} = useContext(AppContext)

  const form = isFormActive ? <DishForm /> : null;

  const preparedData = dishesData
    .filter((dish) => {
      switch (filterValueCountry) {
        case "ukraine":
          return dish.country === "ukraine";
        case "italy":
          return dish.country === "italy";
        case "georgia":
          return dish.country === "georgia";
        case "mexican":
          return dish.country === "mexican";
        case "eastern":
          return dish.country === "eastern";
        default:
          return dish;
      }
    })
    .filter((dish) => {
      switch (filterValueType) {
        case "main dishes":
          return dish.type === "main dishes";
        case "salads":
          return dish.type === "salads";
        case "desserts":
          return dish.type === "desserts";
        case "drinks":
          return dish.type === "drinks";
        default:
          return dish;
      }
    })
    .filter((dish) => {
      return dish.description
        .toLowerCase()
        .includes(searchingValue.toLowerCase());
    });

  const onToggleForm = () => dispatch(setActiveForm());
  const onSelectChange = [
    (value) => dispatch(setFilterValueType(value)),
    (value) => dispatch(setFilterValueCountry(value)),
  ];
  const onTextChange = (value) => dispatch(setSearchValue(value));

  return (
    <Page
      form={form}
      onToggleForm={onToggleForm}
      onSelectChange={onSelectChange}
      onTextChange={onTextChange}
      preparedData={preparedData}
      options={dishesOptions}
      labelsObj ={dishesLabels}
    />
  );
};
