import React, { useState,useEffect} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  View,
  StyleSheet,
  Image,
  Text,
  Animated,
  Header,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {navigation} from '@react-navigation/native'

const SplashScreen = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);
  const [fadeAnimation, setfadeAnimation] = useState(0);
  useEffect(() => {
    setfadeAnimation(1);

    setTimeout(() => {
      setAnimating(false);
      // AsyncStorage.getItem('user_status').then((value) =>{
      //     navigation.replace(
      //         value != 1 ? 'Auth' : 'HomeScreen'
      //     ),
      //     getIcons()
      //     //console.log("Spa---->",value)

      // });
      setfadeAnimation(0);
      navigation.replace('Auth');
      //     1 === 1 ? 'Auth' : 'DrawerNavigationRoutes')
    }, 5000);
  }, []);

  const fadeIn = () => {
    Animated.timing(setfadeAnimation, {
      toValue: 1,
      duration: 500,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(setfadeAnimation, {
      toValue: 0,
      duration: 1000,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logoStyle}>Instagram</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor : 'black'
  },
  logoStyle:{
    fontFamily: 'Noteworthy-Bold',
    color:'white',
    fontSize:80,
    textAlign:'center',
    fontWeight:'bold',
    
  }
 
});
