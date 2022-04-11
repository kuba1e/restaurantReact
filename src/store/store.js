import { configureStore } from "@reduxjs/toolkit";
import tablesReducer from "../features/tables";
import dishesReducer from "../features/dishes";

export const store = configureStore({
  reducer:{
    tables: tablesReducer,
    dishes: dishesReducer
  }
})