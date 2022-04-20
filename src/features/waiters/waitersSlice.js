import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RestaurantApiService from "../../services/RestaurantApiService";

const restaurantApi = new RestaurantApiService();

export const fetchWaiters = createAsyncThunk(
  "waiters/fetchWaiters",
  async (_, { rejectWithValue }) => {
    try {
      return await restaurantApi.fetchWaiters();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const sendWaiter = createAsyncThunk(
  "waiters/sendWaiter",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      await restaurantApi.sendWaiter(data);
      await dispatch(fetchWaiters());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateWaiter = createAsyncThunk(
  "waiters/createWaiter",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      await restaurantApi.updateWaiter(data);
      await dispatch(fetchWaiters());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteWaiter = createAsyncThunk(
  "waiters/deleteWaiter",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      await restaurantApi.deleteWaiter(data);
      await dispatch(fetchWaiters());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  loading: "idle",
  error: "",
  waitersData: [],
  editedValues: {},
  isFormActive: false,
  filterValuePosition: "",
  filterValueAppRole:'',
  searchingValue: "",
};

export const waitersSlice = createSlice({
  name: "waiters",
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
    [fetchWaiters.pending]: (state) => {
      state.loading = "pending";
    },
    [fetchWaiters.fulfilled]: (state, { payload }) => {
      state.waitersData = payload;
      state.loading = "idle";
    },
    [fetchWaiters.rejected]: (state, { payload }) => {
      state.loading = "failed";
      state.error = payload;
    },
    [sendWaiter.pending]: (state) => {
      state.loading = "pending";
    },
    [sendWaiter.rejected]: (state, { payload }) => {
      state.loading = "failed";
      state.error = payload;
    },
    [updateWaiter.pending]: (state) => {
      state.loading = "pending";
    },
    [updateWaiter.rejected]: (state, { payload }) => {
      state.loading = "failed";
      state.error = payload;
    },
    [deleteWaiter.pending]: (state) => {
      state.loading = "pending";
    },
    [deleteWaiter.rejected]: (state, { payload }) => {
      state.loading = "failed";
      state.error = payload;
    },
  },
});

export const { setActiveForm, setEditedValues, setFilterValuePosition, setFilterValueAppRole,setSearchValue } = waitersSlice.actions;
export default waitersSlice.reducer;
