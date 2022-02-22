import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { EvilIcons,Entypo,FontAwesome } from '@expo/vector-icons';

import IonicIcon from 'react-native-vector-icons/Ionicons';

import { Text, Dimensions, Image } from 'react-native';

import HomePage from './HomePage';
import Search from './Search';
import Reels from './Reels';
import Activity from './Activities';
import Profile from './Profile/Profile';
import Messanger from './Messanger';

const fullScreenWidth = Dimensions.get('window').width;

const Stack =createStackNavigator()

function HomeStackScreen() {
  return(
    <Stack.Navigator>
      <Stack.Screen name = 'Home' component = {HomePage} options={{ headerShown: false,}}/>
    </Stack.Navigator>
  );
}

function SearchsStackScreen() {
  return(
    <Stack.Navigator>
      <Stack.Screen name = 'Search' component = {Search} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

function ReelsStackScreen() {
  return(
    <Stack.Navigator>
      <Stack.Screen name = 'Reels' component = {Reels} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

function ActivityStackScreen() {
  return(
    <Stack.Navigator>
      <Stack.Screen name = 'Activity' component = {Activity} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

function ProfileStackScreen() {
  return(
    <Stack.Navigator>
      <Stack.Screen name = 'Profile' component = {Profile} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

function MessangerStackScreen() {
  return(
    <Stack.Navigator>
      <Stack.Screen name = 'Messanger' component = {Messanger} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return(
    <Tab.Navigator>
      <Tab.Screen 
          name="Home" 
          component={HomeStackScreen} 
           
          options={{ 
                  headerShown: false, 
                  tabBarShowLabel:false,
                  tabBarActiveTintColor:'white',
                  tabBarBorderColor:'black',
                  tabBarStyle: {backgroundColor:'black',borderTopColor:'black'},
                  tabBarIcon : ({color, size, focused}) => (
                    <IonicIcon 
                    name = {focused ? 'home-sharp': 'home-outline'} 
                    color = {color} size ={30} />
                    ) }}
          />
      <Tab.Screen 
          name="Search" 
          component={SearchsStackScreen} 
          options={{ 
                  headerShown: false,
                  tabBarShowLabel:false,
                  tabBarActiveTintColor:'white',
                  tabBarStyle: {backgroundColor:'black',borderTopColor:'black'},
                  tabBarIcon : ({color, size}) => (
                    <IonicIcon name = 'ios-search' color = {color} size ={30} />
                    )
                  }}
          />
      <Tab.Screen 
          name="Reels" 
          component={ReelsStackScreen}
          style={{borderColor:'black'}} 
          options={{ 
                  headerShown: false,
                  tabBarShowLabel:false,
                  tabBarActiveTintColor:'white',
                  tabBarStyle: {backgroundColor:'black',borderTopColor:'black'},
                  tabBarIcon : ({color, size, focused}) => (
                    focused ?
                    <Image source ={require('../assets/reel-f.png')} style={{tintColor:'white',width:30,height:30}}/>:
                    <Image source ={require('../assets/reel-o.png')} style={{tintColor:'gray',width:30,height:30}}/>
                    // <Entypo name="video-o" size={30} color={color} />
                    ) 
                  }}
          />
      <Tab.Screen 
          name="Activity" 
          component={ActivityStackScreen} 
          options={{ 
                  headerShown: false,
                  tabBarShowLabel:false,
                  tabBarActiveTintColor:'white',
                  tabBarStyle: {backgroundColor:'black',borderTopColor:'black'},
                  tabBarIcon : ({color, size, focused}) => (
                    <IonicIcon name = {focused ? 'md-heart-sharp':'md-heart-outline'} color = {color} size ={30} />
                    ) 
                  }}
          />
      <Tab.Screen 
          name="Profile" 
          component={ProfileStackScreen} 
          options={{ 
                  headerShown: false,
                  tabBarShowLabel:false,
                  tabBarActiveTintColor:'white',
                  tabBarStyle: {backgroundColor:'black',borderTopColor:'black'},
                  tabBarIcon : ({color, size}) => (
                    <FontAwesome name="user-circle-o" size={26} color={color} />
                    ) 
                  }}
          />
    </Tab.Navigator>
    );
}




