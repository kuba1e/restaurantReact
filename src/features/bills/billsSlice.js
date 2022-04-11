import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RestaurantApiService from "../../services/RestaurantApiService";

const restaurantApi = new RestaurantApiService()



const initialState = {
  loading: "idle",
  error: "",
  billsData: [],
  editedValues: [],
  isFormActve: false,
};

export const billsSlice = createSlice({
  name: "bills",
  initialState,
  reducers: {},
  extraReducers: {},
});
