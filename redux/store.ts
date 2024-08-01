import {configureStore} from '@reduxjs/toolkit';
// import {userReducer} from './reducers/userReducer';
// import cartReducer from './reducers/cartReducer';
import todoReducer from './reducers/todoReducer';
const store = configureStore({
  reducer: {
    // user: userReducer,
    // cart: cartReducer,
    todo: todoReducer,
  },
});
export default store;
