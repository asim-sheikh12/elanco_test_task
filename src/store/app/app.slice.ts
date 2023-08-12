import { createSlice } from '@reduxjs/toolkit';

interface IState {
  isLoading: boolean;
}

const initialState: IState = {
  isLoading: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    isLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { isLoading } = appSlice.actions;
