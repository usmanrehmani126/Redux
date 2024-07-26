import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  loading: false,
  user: {},
  error: null,
};

export const userReducer = createReducer({initialState}, builder => {
  builder.addCase('userRegisterRequest', (state, action) => {
    state.loading = true;
    state.isAuthenticated = false;
  });
  builder.addCase('userRegisterSuccess', (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
  });
  builder.addCase('userRegisterFailed', (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  });
  builder.addCase('userLoginRequest', (state, action) => {
    state.loading = true;
    state.isAuthenticated = false;
  });
  builder.addCase('userLoginSuccess', (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
  });
  builder.addCase('userLoginFailed', (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.user = {};
  });

  builder.addCase('userLogoutRequest', (state, action) => {
    state.loading = true;
  });
  builder.addCase('userLogoutSuccess', (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.user = {};
  });
  builder.addCase('userlogoutFailed', (state, action) => {
    state.loading = false;
  });
});
