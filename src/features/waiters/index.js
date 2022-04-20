import {
  setActiveForm,
  setEditedValues,
  setFilterValuePosition,
  setFilterValueAppRole,
  setSearchValue,
} from "./waitersSlice";

import {
  fetchWaiters,
  sendWaiter,
  updateWaiter,
  deleteWaiter,
} from "./waitersSlice";

import waitersReducer from "./waitersSlice";

export {  setActiveForm,
  setEditedValues,
  setFilterValuePosition,
  setFilterValueAppRole,
  setSearchValue,}

  export {
    fetchWaiters,
    sendWaiter,
    updateWaiter,
    deleteWaiter,
  }
  export default waitersReducer