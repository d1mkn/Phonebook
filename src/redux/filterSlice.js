import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    addFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { addFilter } = filterSlice.actions;
