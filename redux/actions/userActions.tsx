import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dispatch} from 'react';
import {URI} from '../../src/URI';
export const registerUser =
  (formData: any) => async (dispatch: Dispatch<any>) => {
    try {
      dispatch({
        type: 'userRegisterRequest',
      });
      const {data} = await axios.post(`${URI}/registration`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      dispatch({
        type: 'userRegisterSuccess',
        payload: data.user,
      });
      await AsyncStorage.setItem('userData', JSON.stringify(data.user));
    } catch (error) {
      console.log(error);
    }
  };

export const loginUser =
  (email: string, password: string) => async (dispatch: Dispatch<any>) => {
    try {
      dispatch({
        type: 'userLoginRequest',
      });
      const {data} = await axios.post(
        `${URI}/login`,
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      dispatch({
        type: 'userLoginSuccess',
        payload: data.user,
      });
      await AsyncStorage.setItem('userData', JSON.stringify(data.user));
    } catch (error: any) {
      console.log(error.message);
    }
  };
