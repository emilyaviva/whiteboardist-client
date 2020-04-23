import { createSlice } from '@reduxjs/toolkit';

const initialState = { loggedIn: false, user: {}, token: '' };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { user, token } = action;
      return { loggedIn: true, user, token };
    },
    logout: () => initialState,
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice;
