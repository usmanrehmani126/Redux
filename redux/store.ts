import {configureStore} from '@reduxjs/toolkit';
// import {userReducer} from './reducers/userReducer';
import cartReducer from './reducers/cartReducer';
const store = configureStore({
  reducer: {
    // user: userReducer,
    cart: cartReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
export default store;
