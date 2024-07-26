import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen';
import { Provider } from 'react-redux';
import store from './src/store';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
<NavigationContainer>
      <Stack.Navigator 
      screenOptions={{headerShown:false}} initialRouteName='Register'>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App
