import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet,ImageBackground, Text, Pressable,View, Image,TextInput, Button, RefreshControl,TouchableOpacity, Alert, FlatList, SafeAreaView, ScrollView,SectionList,BackHandler} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {SearchBar,} from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Card,Appbar } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import {Ionicons,FontAwesome,AntDesign,FontAwesome5,Entypo } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Tab = createMaterialTopTabNavigator();


const navigation = useNavigation
const _goBack = () => console.log('Went back');
const _handleSearch = () => console.log('Searching');
const _handleMore = () => console.log('Shown more');

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const Refresh = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor='white'
          />     
  );
}


export default class Messanger extends React.Component{
  state={
    search:'',
     StoryImages : [
           
          ],
  };
  updateSearch = (search)=>{
    this.setState({search});
  };
  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    //BackHandler.exitApp();
    return true;
  }
  

  render(){
    const {search}= this.state;
    return(
    <View style={styles.container}>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress ={()=>{this.handleBackButtonClick()}}>
          <Entypo name="chevron-thin-left" size={24} color="white" style={{marginLeft:20,marginVertical:10, marginHorizontal:5}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row'}}>
          <Text style={{color:'white',fontWeight:'bold',fontSize:20,marginVertical:10}}>sharmaji_318 </Text>
          <FontAwesome5 name="chevron-down" size={10} color="white"  style={{justifyContent:'center',alignSelf:'center'}}/>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={{marginHorizontal:10}}>
          <Ionicons name="ios-videocam-outline" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal:10}}>
          <Entypo name="new-message" size={26} color="white" />
        </TouchableOpacity>
      </View>
      </View>
      
        <Tab.Navigator style={{backgroundColor:'black'}}>
            <Tab.Screen 
                name="All" 
                component={AllChats} 
                options ={{
                  tabBarStyle: {backgroundColor:'black',borderBottomColor:'gray',borderBottomWidth:0.4},
                  swipeEnabled:false,
                  tabBarIndicatorStyle:{backgroundColor:'white'},
                  tabBarActiveTintColor:'white',
                  tabBarInactiveTintColor: 'gray',
                }}/>
            <Tab.Screen 
                name="Rooms" 
                component={Rooms} 
                options={{
                  tabBarStyle: {backgroundColor:'black',borderBottomColor:'gray',borderBottomWidth:0.4},
                  swipeEnabled:false,
                  tabBarIndicatorStyle:{backgroundColor:'white'},
                  tabBarActiveTintColor:'white',
                  tabBarInactiveTintColor: 'gray',
                }}/>
            <Tab.Screen 
                name="requests" 
                component = {Requests}
                options={{
                  tabBarStyle: {backgroundColor:'black',borderBottomColor:'gray',borderBottomWidth:0.4},
                  swipeEnabled:false,
                  tabBarIndicatorStyle:{backgroundColor:'white'},
                  tabBarActiveTintColor:'white',
                  tabBarInactiveTintColor: 'gray',
                }}/>
        </Tab.Navigator>
       
      
    </View>
    );
  }
}

const AllChats = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
      
      <View style={{flex:1,backgroundColor:'black'}}>
      <ScrollView 
          showsVerticalScrollIndicator={true}
          refreshControl={<Refresh/>}
        >
        <SearchBar
          darkTheme
          showCancel={true}
          containerStyle={{backgroundColor:'black',marginVertical:5}}
          inputContainerStyle={{borderRadius:10,height:35,marginHorizontal:10}}
          inputStyle={{fontSize:18,color:'white'}}
          style={styles.searchBarStyle}
          placeholder="Search "
          onChangeText={onChangeSearch}
          loadingProps={true}
          value={searchQuery}
        />
      </ScrollView> 
      </View>
      )
}
const Rooms = () => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'black'}}>
            <Text style={{color:'white',fontSize:25,fontWeight:'bold',marginVertical:10}}>{'Video chat with anyone'}</Text>
            <Text style={{color:'gray',fontSize:15,marginTop:10}}>{"Create a room to video chat with anyone,"}</Text>
            <Text style={{color:'gray',fontSize:15,marginBottom:10}}>{"even if they don't have Instagram."}</Text>
            <Pressable 
                style={{alignItems:'center',justifyContent:'center',paddingVertical:12,paddingHorizontal:32,borderRadius:4,elevation:3,backgroundColor:'#0096FF',marginVertical:10}}
                onPress={()=>{alert('abcd')}}>
                <Text style={{fontSize: 16,lineHeight: 21,fontWeight: 'bold',letterSpacing: 0.25,color: 'white',}}>
                  {"Create Room"}
                </Text>
            </Pressable>
        </SafeAreaView>
    )
}
const Requests = () => {
    return (<></>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
  },
})


