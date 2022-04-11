import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RestaurantApiService from "../../services/RestaurantApiService";

const restaurantApi = new RestaurantApiService();

export const fetchTables = createAsyncThunk(
  "tables/fetchTables",
  async (_, { rejectWithValue }) => {
    try {
      return await restaurantApi.fetchTables();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const sendTable = createAsyncThunk(
  "tables/sendTable",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      await restaurantApi.sendTable(data);
      await dispatch(fetchTables());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTable = createAsyncThunk(
  "tables/createTable",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      await restaurantApi.updateTable(data);
      await dispatch(fetchTables());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTable = createAsyncThunk(
  "tables/deleteTable",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      await restaurantApi.deleteTable(data);
      await dispatch(fetchTables());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  loading: "idle",
  error: "",
  tablesData: [],
  editedValues: {},
  isFormActive: false,
  filterValueLocation: "",
  filterValueSitsQuantity:'',
  searchingValue: "",
};

export const tablesSlice = createSlice({
  name: "tables",
  initialState,
  reducers: {
    setActiveForm: (state) => {
      state.isFormActive = !state.isFormActive;
      if (!state.isFormActive) {
        state.editedValues = {};
      }
    },
    setEditedValues: (state, { payload }) => {
      state.editedValues = payload;
    },
    setSearchValue:(state, {payload})=>{
      state.searchingValue = payload
    },
    setFilterValueLocation:(state, {payload})=>{
      state.filterValueLocation = payload
    },
    setFilterValueSitsQuantity:(state, {payload})=>{
      state.filterValueSitsQuantity = payload
    }
  },
  extraReducers: {
    [fetchTables.pending]: (state) => {
      state.loading = "pending";
    },
    [fetchTables.fulfilled]: (state, { payload }) => {
      state.tablesData = payload;
      state.loading = "idle";
    },
    [fetchTables.rejected]: (state, { payload }) => {
      state.loading = "failed";
      state.error = payload;
    },
    [sendTable.pending]: (state) => {
      state.loading = "pending";
    },
    [sendTable.rejected]: (state, { payload }) => {
      state.loading = "failed";
      state.error = payload;
    },
    [updateTable.pending]: (state) => {
      state.loading = "pending";
    },
    [updateTable.rejected]: (state, { payload }) => {
      state.loading = "failed";
      state.error = payload;
    },
    [deleteTable.pending]: (state) => {
      state.loading = "pending";
    },
    [deleteTable.rejected]: (state, { payload }) => {
      state.loading = "failed";
      state.error = payload;
    },
  },
});

export const { setActiveForm, setEditedValues, setFilterValueLocation, setFilterValueSitsQuantity,setSearchValue } = tablesSlice.actions;
export default tablesSlice.reducer;
