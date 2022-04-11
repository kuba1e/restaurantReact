import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RestaurantApiService from "../../services/RestaurantApiService";

const restaurantApi = new RestaurantApiService();

export const fetchDishes = createAsyncThunk(
  "dishes/fetchDishes",
  async (_, { rejectWithValue }) => {
    try {
      return await restaurantApi.fetchDishes();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const sendDish = createAsyncThunk(
  "dishes/sendDish",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      await restaurantApi.sendDish(data);
      await dispatch(fetchDishes());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateDish = createAsyncThunk(
  "dishes/createDish",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      await restaurantApi.updateDish(data);
      await dispatch(fetchDishes());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteDish = createAsyncThunk(
  "dishes/deleteDish",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      await restaurantApi.deleteDish(data);
      await dispatch(fetchDishes());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  loading: "idle",
  error: "",
  dishesData: [],
  editedValues: {},
  isFormActive: false,
  filterValueCountry: "",
  filterValueType: "",
  searchingValue: "",
};

export const dishesSlice = createSlice({
  name: "dishes",
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
    setSearchValue: (state, { payload }) => {
      state.searchingValue = payload;
    },
    setFilterValueCountry: (state, { payload }) => {
      state.filterValueCountry = payload;
    },
    setFilterValueType: (state, { payload }) => {
      state.filterValueType = payload;
    },
  },
  extraReducers: {
    [fetchDishes.pending]: (state) => {
      state.loading = "pending";
    },
    [fetchDishes.fulfilled]: (state, { payload }) => {
      state.dishesData = payload;
      state.loading = "idle";
    },
    [fetchDishes.rejected]: (state, { payload }) => {
      state.loading = "failed";
      state.error = payload;
    },
    [sendDish.pending]: (state) => {
      state.loading = "pending";
    },
    [sendDish.rejected]: (state, { payload }) => {
      state.loading = "failed";
      state.error = payload;
    },
    [updateDish.pending]: (state) => {
      state.loading = "pending";
    },
    [updateDish.rejected]: (state, { payload }) => {
      state.loading = "failed";
      state.error = payload;
    },
    [deleteDish.pending]: (state) => {
      state.loading = "pending";
    },
    [deleteDish.rejected]: (state, { payload }) => {
      state.loading = "failed";
      state.error = payload;
    },
  },
});

export const {
  setActiveForm,
  setEditedValues,
  setFilterValueType,
  setFilterValueCountry,
  setSearchValue,
} = dishesSlice.actions;
export default dishesSlice.reducer;
