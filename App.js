import 'react-native-gesture-handler';
import {
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Platform,
  ScrollView,
  BackHandler,
} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Navigation from './components/Navigation';

import SplashScreen from './components/SplashScreen';
import HomePage from './components/HomePage';
import Search from './components/Search';
import Reels from './components/Reels';
import Activity from './components/Activities';
import Profile from './components/Profile/Profile';
import Messanger from './components/Messanger';

const Stack = createStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
      <Navigation options={{ headerShown: false }}/>
  );
};

const App = () => {
  //const navigation = useNavigation()
  return ( 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{ headerShown: false }}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Messanger"
          component={Messanger}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
};
export default App;