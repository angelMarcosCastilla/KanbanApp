import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginReducer: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { loginReducer } = userSlice.actions;
export default userSlice.reducer;
