import {
  ActivityIndicator,
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTodos} from '../../redux/reducers/todoReducer';

const TodoSCreen = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  if (state.todo.isLoading) {
    return (
      <View className="items-center justify-center flex-1 bg-black">
        <ActivityIndicator color={'white'} size={'large'} />
      </View>
    );
  }
  console.log('todo Data', state.todo.data);
  return (
    <View className="flex-1 bg-black">
      <View className=" w-[70%] mx-auto mt-10">
        <Button
          title="Fetch"
          color="#841584"
          onPress={e => dispatch(fetchTodos())}
        />
      </View>

      {state.todo.data &&
        state.todo.data.map((item, index) => (
          <React.Fragment key={index}>
            <Text className="text-white">{item.title}</Text>
          </React.Fragment>
        ))}
    </View>
  );
};

export default TodoSCreen;

const styles = StyleSheet.create({});
