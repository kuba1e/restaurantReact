import { configureStore } from "@reduxjs/toolkit";
import tablesReducer from "../features/tables";
import dishesReducer from "../features/dishes";
import waitersReducer from "../features/waiters";

export const store = configureStore({
  reducer: {
    tables: tablesReducer,
    dishes: dishesReducer,
    waiters: waitersReducer,
  },
});
