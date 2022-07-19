import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface VehicleState {
  list: any[];
}

// Define the initial state using that type
const initialState: VehicleState = {
  list: [],
};

export const vehicleSlice = createSlice({
  name: "vehicles",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { getList } = vehicleSlice.actions;

export const vehiclesReducer = vehicleSlice.reducer;

export default vehiclesReducer;
