import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [data, setData] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      const storedData = await AsyncStorage.getItem('userData');
      if (storedData !== null) {
        setData(JSON.parse(storedData));
      } else {
        setData(null);
      }
    };

    fetchData();
  }, []);
  const logout = async () => {
    await AsyncStorage.removeItem('userData');
    navigation.navigate('Login');
  };
  return (
    <View className="bg-black flex-1">
      <TouchableOpacity
        onPress={logout}
        activeOpacity={0.7}
        className="w-full h-12 bg-white items-center rounded-3xl mr-12 flex-row justify-center">
        <Text className="text-black font-[Poppins-SemiBold] ml-2">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
