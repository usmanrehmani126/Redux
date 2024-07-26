import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ToastAndroid,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import validations from '../../utlis/validations';
import { loginUser } from '../../redux/actions/userActions';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setshowPassword] = useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { loading } = useSelector((state: any) => state.user);
  const isValidData = () => {
    const error = validations({
      email,
      password,
    });
    if (error) {
      Alert.alert(error);
      return false;
    }
    return true;
  };

  const loginFunc = () => {
    const checkValiFields = isValidData();
    if (checkValiFields) {
      dispatch(loginUser(email, password));
      navigation.navigate('Home');
    }
  };
  return (
    <View className="flex-[1] items-center justify-center bg-black">
      <View className="w-[75%]">
        <Text className="text-white font-[600] text-[25px] text-center font-[Poppins-Bold]  ">
          Login
        </Text>
        <TextInput
          placeholder="enter your email"
          value={email}
          onChangeText={txt => setEmail(txt)}
          placeholderTextColor={'gray'}
          className="w-full h-[45px] border border-gray-400 px-2 my-2 py-2 rounded-md text-white font-[Poppins-Medium]"
        />
        <View className="flex-row items-center justify-between w-full h-[45px] border border-gray-400 my-2 rounded-md text-white">
          <TextInput
            placeholder="enter your password"
            placeholderTextColor={'gray'}
            secureTextEntry={showPassword == true ? true : false}
            value={password}
            className="font-[Poppins-Medium]"
            onChangeText={txt => setPassword(txt)}
          />
          <TouchableOpacity
            onPress={() => setshowPassword(!showPassword)}
            className="mr-1">
            {showPassword == true ? (
              <Text className="text-white  font-[Poppins-SemiBold]">Show</Text>
            ) : (
              <Text className="text-white  font-[Poppins-SemiBold]">Hide</Text>
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={loginFunc}
          className="w-full h-12 bg-white items-center rounded-3xl mr-12 flex-row justify-center">
          {loading ? (
            <ActivityIndicator size="small" color="black" />
          ) : (
            <Text className="text-black font-[Poppins-SemiBold] ml-2">
              Sign Up
            </Text>
          )}
        </TouchableOpacity>

        <View className="items-center mt-8">
          <Text className="text-gray-400 font-[Poppins-Medium]">
            Don't have an Account
          </Text>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('Register')}>
            <Text className="text-white text-[15px] font-[Poppins-SemiBold]">
              Register Here.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
