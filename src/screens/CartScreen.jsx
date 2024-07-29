import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../../redux/reducers/cartReducer';

const CartScreen = () => {
  const cart = useSelector(state => state.cart.cart);
  console.log(cart);
  const dispatch = useDispatch();
  const images = [
    {
      id: '0',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqg_OBzcVDnKHv1d3hyVk_WlCo43pzit4CJQ&usqp=CAU',
      name: 'icecream',
    },
    {
      id: '1',
      image:
        'https://cdn.pixabay.com/photo/2021/07/16/15/03/cookies-6471073_1280.jpg',
      name: 'biscuit',
    },
    {
      id: '2',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicQWeRoxxLEr1RLIp8dJtw-NQvSE4xtlhwA&usqp=CAU',
      name: 'chocolate',
    },
  ];
  const addItemToCart = item => {
    dispatch(addToCart(item));
  };
  const removeItemFromCart = item => {
    dispatch(removeFromCart(item));
  };
  const increaseQuantity = item => {
    dispatch(incrementQuantity(item));
  };
  const decreaseQuantity = item => {
    if (item.quantity == 1) {
      dispatch(removeFromCart(item));
    } else {
      dispatch(decrementQuantity(item));
    }
  };
  return (
   <ScrollView style={{flex:1,backgroundColor:"black"}}>
     <>
      <Text style={{textAlign: 'center', fontSize: 16}}>Redux cart system</Text>
      {images.map(item => (
        <Pressable
          key={item.id}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{margin: 10}}>
            <Image
              style={{width: 100, height: 100, borderRadius: 8}}
              source={{uri: item.image}}
            />
          </View>
          <View>
            <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
            {cart.some(value => value.id == item.id) ? (
              <Pressable onPress={() => removeItemFromCart(item)}>
                <Text
                  style={{
                    borderColor: 'gray',
                    borderWidth: 1,
                    marginVertical: 10,
                    padding: 5,
                  }}>
                  REMOVE FROM CART
                </Text>
              </Pressable>
            ) : (
              <Pressable onPress={() => addItemToCart(item)}>
                <Text
                  style={{
                    borderColor: 'gray',
                    borderWidth: 1,
                    marginVertical: 10,
                    padding: 5,
                  }}>
                  ADD TO CART
                </Text>
              </Pressable>
            )}
          </View>
        </Pressable>
      ))}

      {cart.map((item, index) => (
        <View style={{padding: 10}} key={index}>
          <Text>{item.name}</Text>
          <Image
            style={{width: 100, height: 100, borderRadius: 8, marginTop: 6}}
            source={{uri: item.image}}
          />
          <Pressable
            style={{
              flexDirection: 'row',
              marginTop: 20,
              alignItems: 'center',
              backgroundColor: '#FF3366',
              borderRadius: 5,
              width: 120,
            }}>
            <Pressable onPress={() => decreaseQuantity(item)}>
              <Text
                style={{
                  fontSize: 25,
                  color: 'white',
                  paddingHorizontal: 10,
                }}>
                -
              </Text>
            </Pressable>

            <Pressable>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  paddingHorizontal: 10,
                }}>
                {item.quantity}
              </Text>
            </Pressable>

            <Pressable onPress={() => increaseQuantity(item)}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  paddingHorizontal: 10,
                }}>
                +
              </Text>
            </Pressable>
          </Pressable>
        </View>
      ))}
    </>
   </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
