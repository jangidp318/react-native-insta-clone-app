import { StatusBar } from 'expo-status-bar';
import React,{useState,Component} from 'react';
import { StyleSheet,RefreshControl,ImageBackground, Text, View, Image,TextInput, Button, TouchableOpacity, Alert, FlatList, SafeAreaView, ScrollView,SectionList,Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {SearchBar,Header} from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Card,Appbar } from 'react-native-paper';
import {Ionicons,FontAwesome,AntDesign, } from '@expo/vector-icons';
import { Icon ,Container, Content} from 'native-base';
import IGStoryCircle from "expo-instagram-story-circle";

import Messanger from './Messanger';
import Posts from './Posts'

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
    wait(1000).then(() => setRefreshing(false));
  }, []);

  return (
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor='white'
          />     
  );
}


export default class Home extends Component{
  
  state={
    search:'',
     StoryImages : [
            {img:require('../assets/1.jpg'),title: 'Your story',color:'gray', hasStory: false},
            {img:require('../assets/2.jpg'),title: 'radhika_1',color:'white',hasStory: true},
            {img:require('../assets/3.jpg'),title: 'kashyap_07',color:'white',hasStory: false},
            {img:require('../assets/4.jpg'),title: 'ritesh_77',color:'white',hasStory: true},
            {img:require('../assets/5.jpg'),title: 'sumit439',color:'white',hasStory: true},
            {img:require('../assets/6.jpg'),title: 'risky',color:'white',hasStory: false},
            {img:require('../assets/7.jpg'),title: 'iamyusufaehmad',color:'white',hasStory: true},
           
          ],
  };
  updateSearch = (search)=>{
    this.setState({search});
  };
  
  render(){
    const {search}= this.state;

    return(
    <View style={styles.container}>
    <Header
    placement ='left'
  statusBarProps={{ barStyle: 'light-content' }}
  barStyle="light-content" // or directly
  leftComponent={<Text style={{fontFamily:'Noteworthy-Bold', color:'white',fontSize:25,}}>Instagram</Text>}
  rightComponent={
      <View style = {{flexDirection:'row',justifyContent:'center'}}>
        <TouchableOpacity>
          <FontAwesome name="plus-square-o" size={25} style={{color:"white",marginHorizontal:15,marginTop:10}} />
        </TouchableOpacity>
        <TouchableOpacity onPress = {()=>{this.props.navigation.navigate(Messanger)}}>
          <Image source={require('../assets/Icons/messenger-50.png')} style={{tintColor:'white', height:25,width:25, marginHorizontal:10, marginTop:10}}/>
        </TouchableOpacity>
        </View>
        }
  containerStyle={{
    backgroundColor: 'Black',
    justifyContent: 'space-around',
    borderBottomColor:'black'
  }}
      />

        <ScrollView 
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
        refreshControl={<Refresh/>}
        >
          <FlatList  
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                  data={this.state.StoryImages}
                  horizontal
                  renderItem={(item)=>
                  <View> 
              <TouchableOpacity>
              <View style={{marginVertical:5,marginHorizontal:5,}}>
                  <IGStoryCircle source={item.item.img} hasStory={item.item.hasStory} onPress={() => {}} />
              </View>
                  <Text style={{justifyContent:'center',marginVertical:5,fontSize:12,color:item.item.color,textAlign:'center',}}>{item.item.title}</Text>
                
              </TouchableOpacity>
            </View>
                    }
                  />
          <Posts/>
          <Posts/>
          <Posts/>
        </ScrollView>
      
    </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
  },
})


