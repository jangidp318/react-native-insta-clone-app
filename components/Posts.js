import React,{useState} from 'react';
import {View,Text,Image,FlatList,TouchableOpacity,Dimensions } from 'react-native';
import {Card,CardItem, Thumbnail,Body,Left,Right,Icon,Button,} from 'react-native-paper';
import {Header} from 'react-native-elements';
import {Ionicons,FontAwesome,AntDesign,Entypo,Feather} from '@expo/vector-icons';

const Posts =()=>{
  
    return(
      <View>
      {/*Header*/}
        <Header
          placement ='left'
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content" // or directly
          leftComponent={<Image source = {require('../assets/1.jpg')} style={{height:40,width:40,borderRadius:40/2}}/>}
          centerComponent={<Text style={{color:'white',fontSize:16}}>{'sharmaji_318'}</Text>}
          rightComponent={
            <View style = {{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <TouchableOpacity>
                <Entypo name="dots-three-horizontal" size={18} color="white" />
              </TouchableOpacity>
            </View>
            }
          containerStyle={{
            backgroundColor: 'Black',
            justifyContent: 'space-around',
            borderBottomColor:'black'
            }}
        />
      {/*Body*/}
        <View style={{flex:1}}>
          <Image source={require('../assets/1.jpg')} style={{width: Dimensions.get('window').width,height:Dimensions.get('window').width }}/>
        </View>
      {/*Footer */}
        <View style={{flexDirection:'row',justifyContent:'space-between', }}>
          <View style={{flexDirection:'row',}}>
            <TouchableOpacity style={{margin:10}}>
              <AntDesign name="hearto" size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={{margin:10}}>
              <AntDesign name="message1" size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={{margin:10}}>
              <Feather name="send" size={25} color="white" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{margin:10}}>
            <Ionicons name="ios-bookmark-outline" size={25} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={{color:'white', marginLeft:10}}>{"54321 Likes"}</Text>
    </View>
    )
}
export default Posts;