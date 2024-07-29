import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  ToastAndroid,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import ImageCropPicker from 'react-native-image-crop-picker';
import {useDispatch} from 'react-redux';
import {registerUser} from '../../redux/actions/userActions';
import validations from '../../utlis/validations';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');
  const [showPassword, setshowPassword] = useState(true);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const uploadImage = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.8,
      includeBase64: true,
    }).then((image: ImageOrVideo | null) => {
      if (image) {
        setAvatar('data:image/jpeg;base64,' + image.data);
      }
    });
  };
  const isValidData = () => {
    const check = validations({
      email,
      password,
      name,
    });
    if (check) {
      Alert.alert(check);
      return false;
    }
    return true;
  };
  const onRegister = () => {
    const isValid = isValidData();
    if (isValid) {
      if (!avatar) {
        Alert.alert('please upload photo');
      } else {
        setLoading(true);
        const formData = {email, password, name, avatar};
        registerUser(formData)(dispatch);
        navigation.navigate('Home');
        setLoading(false);
      }
    }
  };

  return (
    <ScrollView
      className="flex-1 bg-black "
      showsVerticalScrollIndicator={false}>
      <View className="items-center justify-center mt-44">
        <View className="w-[75%]">
          <Text className="text-white font-[600] text-[25px] text-center font-[Poppins-Bold]  ">
            Register Here.
          </Text>
          <TextInput
            placeholder="enter your name"
            value={name}
            onChangeText={text => setName(text)}
            placeholderTextColor={'gray'}
            className="w-full h-[45px] border border-gray-400 px-2 my-2 py-2 rounded-md text-white font-[Poppins-Medium]"
          />

          <TextInput
            placeholder="enter your email"
            value={email}
            onChangeText={text => setEmail(text)}
            placeholderTextColor={'gray'}
            className="w-full h-[45px] border border-gray-400 px-2 my-2 py-2 rounded-md text-white font-[Poppins-Medium]"
          />
          <View className="flex-row items-center justify-between w-full h-[45px] border border-gray-400 my-2 rounded-md text-white">
            <TextInput
              placeholder="enter your password"
              value={password}
              className="font-[Poppins-Medium]"
              onChangeText={text => setPassword(text)}
              placeholderTextColor={'gray'}
              secureTextEntry={showPassword == true ? true : false}
            />
            <TouchableOpacity
              onPress={() => setshowPassword(!showPassword)}
              className="mr-1">
              {showPassword == true ? (
                <Text className="text-white  font-[Poppins-SemiBold]">
                  Show
                </Text>
              ) : (
                <Text className="text-white  font-[Poppins-SemiBold]">
                  Hide
                </Text>
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={uploadImage}
            className="flex-row items-center my-2 bg-gray-700 rounded-md w-[60%] py-2">
            <Image
              source={{
                uri: avatar
                  ? avatar
                  : 'https://cdn-icons-png.flaticon.com/128/568/568717.png',
              }}
              className="w-[25px] h-[25px] ml-2 rounded-full"
            />
            <Text className="text-white pl-2 font-[Poppins-SemiBold]">
              upload image
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onRegister}
            activeOpacity={0.7}
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
              Already have an Account?
            </Text>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate('Login')}>
              <Text className="text-white text-[15px] font-[Poppins-SemiBold]">
                Login Here.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
