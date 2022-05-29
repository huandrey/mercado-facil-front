import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  now: false,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    inProgress: (state) => ({
      now: true,
    }),
    finish: (state) => ({
      now: true,
    }),
  },
  extraReducers: {},
});

export const { inProgress, finish } = loadingSlice.actions;
export default loadingSlice.reducer;
