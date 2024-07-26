import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [data, setData] = useState(null);
  const navigation=useNavigation()
 
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
    navigation.navigate("Login")
  };
  return (
    <View className="bg-black flex-1">
      <View className="items-center justify-center -mt-14">
        <Image
          source={{
            uri: data?.avatar?.url
              ? data?.avatar?.url
              : 'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZvb3RiYWxsJTIwcGxheWVyJTIwaW1hZ2VzfGVufDB8fDB8fHww',
          }}
          className="w-24 h-24 rounded-full mt-40"
        />

        <Text className=" text-gray-100 font-[Poppins-Medium]  text-md mt-3 ">
          {data?.name}
        </Text>
        <View className="flex-row items-center justify-center gap-2 mb-2">
          <Text className=" text-white font-[Poppins-Regular] text-sm">
            {data?.email}
          </Text>
        </View>
      </View>
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
