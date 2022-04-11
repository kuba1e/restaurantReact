import { setEditedValues, setActiveForm, setFilterValueLocation, setFilterValueSitsQuantity,setSearchValue } from "./tablesSlice";
import { fetchTables, sendTable, updateTable, deleteTable } from "./tablesSlice";
import tablesReducer from "./tablesSlice"

export { setEditedValues, setActiveForm, setFilterValueLocation, setFilterValueSitsQuantity,setSearchValue }
export { fetchTables, sendTable, updateTable, deleteTable } 
export default tablesReducer