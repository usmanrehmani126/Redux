import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from './src/screens/HomeScreen';
// import RegisterScreen from './src/screens/RegisterScreen';
// import LoginScreen from './src/screens/LoginScreen';
import {Provider} from 'react-redux';
import store from './redux/store';
import CartScreen from './src/screens/CartScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Cart"
        >
          {/* <Login/SignUp with Redux Toolkit> */}
          {/* <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} /> */}
          {/* <Login/SignUp with Redux Toolkit> */}

          {/* <Shopping Cart with Redux Toolkit> */}
          <Stack.Screen name="Cart" component={CartScreen} />

          {/* <Shopping Cart with Redux Toolkit> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
