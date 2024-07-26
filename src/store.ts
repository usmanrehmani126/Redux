import {configureStore} from '@reduxjs/toolkit';
import { userReducer } from '../redux/reducers/userReducer';
const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
export default store;
