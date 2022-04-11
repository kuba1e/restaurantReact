import {
  setActiveForm,
  setEditedValues,
  setFilterValueType,
  setFilterValueCountry,
  setSearchValue,
} from "./dishesSlice";
import { sendDish, fetchDishes, updateDish, deleteDish } from "./dishesSlice";
import dishesReducer from "./dishesSlice";

export {
  setActiveForm,
  setEditedValues,
  setFilterValueType,
  setFilterValueCountry,
  setSearchValue,
};
export { sendDish, fetchDishes, updateDish, deleteDish };

export default dishesReducer;
