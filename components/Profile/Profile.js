import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet,ImageBackground,RefreshControl, Text, View,Animated, Image,TextInput, Button, Pressable, TouchableOpacity, Alert, FlatList, SafeAreaView,ListView, ScrollView,SectionList,Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {SearchBar,} from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Card,Appbar } from 'react-native-paper';
import {Component,Content} from 'native-base'
import { Icon } from 'react-native-elements';
import {Ionicons,FontAwesome,AntDesign,Entypo,FontAwesome5,MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons';
import RBSheet from "react-native-raw-bottom-sheet";
import { createMaterialTopTabNavigator, crateAppContainer } from '@react-navigation/material-top-tabs';
import HideableView from '../HideableView';

import MyPosts from './MyPosts';
import Tags from './Tags'

const Tab = createMaterialTopTabNavigator(); 

const navigation = useNavigation
const _goBack = () => console.log('Went back');
const _handleSearch = () => console.log('Searching');
const _handleMore = () => console.log('Shown more');


function Posts() {
        var posts = "9";
        return posts;

}

function Followers(){
        var followers = "2M";
        return followers;
}

function  Following() {
        var following = "160";
        return following;

}

function  CloseFriends() {
        var closeFriends = "160";
        return closeFriends;

}


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const username = ()=>{
  let usn= "sharmaji_318";
  return usn;
}

const ProfilePicture =()=>{
  return require('../../assets/1.jpg');
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

const StoryHighlights = () => {
  const [shouldShow, setShouldShow] = useState(false);
  const highlightsList = [
    {img:require("../../assets/Icons/Plus_1000x.png"),title:'New',backgroundColor:''},
    {img:"",title:"",backgroundColor:'#222222'},
    {img:"",title:"",backgroundColor:'#222222'},
    {img:"",title:"",backgroundColor:'#222222'},
    {img:"",title:"",backgroundColor:'#222222'},
    {img:"",title:"",backgroundColor:'#222222'},
  ];
  return (<View style={{marginVertical:10}}>
          <TouchableOpacity 
          style={{marginHorizontal:20,flexDirection:'row',justifyContent:'space-between'}}
          onPress={()=>setShouldShow(!shouldShow)}>
            <Text style={{color:'white',fontSize:16}}>{"Story Highlights"}</Text>
            { shouldShow ?
            <Entypo name="chevron-up" size={24} style={{fontSize: 16,color: 'gray',}}/>:<Entypo name="chevron-down" size={24} style={{fontSize: 16,color: 'gray',}}/>}
          </TouchableOpacity>
      {shouldShow ? 
          (<>
            <Text style={{color:'white',marginHorizontal:20}}>{"Keep your favourite stories on your profile"}</Text>
            <View style={{flexDirection:'row'}}>
            <FlatList  
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                  style={{marginVertical:10}}
                  data={highlightsList}
                  horizontal
                  renderItem={(item)=>
                  
                  <View> 
              <TouchableOpacity>
              <View style={{marginVertical:5,marginHorizontal:10,}}>
                  <Image source={item.item.img} style={{borderRadius:60/2,tintColor:'white',height:60,width:60,borderWidth:0.6,borderColor:'#222222',backgroundColor:item.item.backgroundColor,}} onPress={() => {}} />
              </View>
                  <Text style={{justifyContent:'center',marginVertical:5,fontSize:12,color:"white",textAlign:'center',}}>{item.item.title}</Text>
                
              </TouchableOpacity>
            </View>
                    }
                  />
            </View>
           </>
          ):null} 
      </View>  
  );
}

export default class Profile extends React.Component{
  state={
    search:'',
     createList : [
           {icon:<MaterialIcons name="grid-on" size={25} color="white" />, title:'Post'},
           {icon:<Image source={require('../../assets/Icons/Story50.png')} style={{height:25, width:25,tintColor:'white'}}/>, title:'Story'},
           {icon:<Image source={require('../../assets/Icons/instaHighlights.png')} style={{height:25, width:25,tintColor:'white'}}/>, title:'Story highlight'},
           {icon:<Image source={require('../../assets/Icons/igtv50.png')} style={{height:25, width:25,tintColor:'white'}}/>, title:'IGTV video'},
           {icon:<Image source={require('../../assets/reel-o.png')} style={{height:25, width:25,tintColor:'white'}}/>, title:'Reels'},
           {icon:<Image source={require('../../assets/Icons/live48.png')} style={{height:25, width:25,tintColor:'white'}}/>, title:'Live'},
           {icon:<FontAwesome5 name="book" size={25} color="white" />, title:'Guide'},
          ],
     menuList : [
           {icon:<Ionicons name="ios-settings-sharp" size={25} color="white" />, title:'Setting'},
           {icon:<Image source={require('../../assets/Icons/arrowCircleTime48.png')} style={{height:25, width:25,tintColor:'white'}}/>, title:'Archive'},
           {icon:<Image source={require('../../assets/Icons/story32.png')} style={{height:25, width:25,tintColor:'white'}}/>, title:'Your Story'},
           {icon:<MaterialCommunityIcons name="qrcode-scan" size={25} color="white" />, title:'QR Code'},
           {icon:<Ionicons name="ios-bookmark-outline" size={25} color="white" />, title:'Saved'},
           {icon:<Image source={require('../../assets/Icons/staredList-50.png')} style={{height:25, width:25,tintColor:'white'}}/>, title:'Close friends'},
           {icon:<Image source = {require('../../assets/Icons/covidInfo.png')} style={{height:30, width:30,tintColor:'white',}}/>, title:'COVID-19 Information Center'},
          ],
    accounts :[
           {img:<Image source={ProfilePicture()} style={{height:60, width:60,borderRadius:60/2,borderColor:'#444444',borderWidth:0.4}}/>, usn:username()}
    ],
  };
  updateSearch = (search)=>{
    this.setState({search});
  };
  

  render(){
    const {search}= this.state;
    return(
    <View style={styles.container}>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
      <View>
        <TouchableOpacity style={{flexDirection:'row'}} onPress = {() => {this.RBSheet3.open()}}>
          <Text style={{marginLeft:10, color:'white',fontWeight:'bold',fontSize:26,marginVertical:5}}>sharmaji_318 </Text>
          <FontAwesome5 name="chevron-down" size={10} color="white"  style={{justifyContent:'center',alignSelf:'center'}}/>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity>
          <FontAwesome name="plus-square-o" size={25} style={{color:"white",marginHorizontal:10,}}  onPress ={()=>{this.RBSheet1.open()}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{alignSelf:'center',alignItems:'right'}}>
          <Ionicons name="ios-menu-sharp" size={25} color="white" style={{marginHorizontal:5}} onPress = {() => {this.RBSheet2.open()}}/>
        </TouchableOpacity>
      </View>
      </View>
      

      <View style={{flexDirection:'row'}}>
      <Card style={{marginHorizontal:10,marginVertical:10,height:130,width:120,backgroundColor:'black'}}>
        <View style={{marginHorizontal:10,marginVertical:10}}>
        <Image source={ProfilePicture()} style={{height:100,width:100,borderRadius:100/2}}/>
        <AntDesign name="pluscircle" size={24} color="#1167b1" style={{position:"absolute", top:70, left:70, borderWidth:3,borderRadius:28/2}}/>
        </View>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:16,color:'white'}}>SHARMAJI</Text>
      </Card>

          <SafeAreaProvider style={{backgroundColor:'black',marginVertical:20,marginHorizontal:5,alignItems:'center',justifyContent:'center',}}>
            <Text style={{color:'white', fontSize:20,textAlign:'center',fontWeight:'bold'}}>{Posts()}</Text>
            <Text style={{color:'white',textAlign:'center'}}>Posts</Text> 
          </SafeAreaProvider>
          <SafeAreaProvider style={{backgroundColor:'black',marginVertical:20,marginHorizontal:5,alignItems:'center',justifyContent:'center',}}>
            <Text style={{color:'white', fontSize:20,textAlign:'center',fontWeight:'bold'}}>{Followers()}</Text>
            <Text style={{color:'white',textAlign:'center'}}>Followers</Text> 
          </SafeAreaProvider>
          <SafeAreaProvider style={{backgroundColor:'black',marginVertical:20,marginHorizontal:5,marginRight:20,alignItems:'center',justifyContent:'center',}}>
            <Text style={{color:'white', fontSize:20,textAlign:'center',fontWeight:'bold'}}>{Following()}</Text>
            <Text style={{color:'white',textAlign:'center'}}>Following</Text> 
          </SafeAreaProvider>  
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Pressable 
                style={{alignItems:'center',justifyContent:'center',flex:1,paddingVertical:6,paddingHorizontal:32,borderRadius:4,elevation:3,backgroundColor:'black',marginVertical:10,borderWidth:0.5,borderColor:'#444444',marginLeft:20,}}
                onPress={()=>{alert('abcd')}}>
                <Text style={{fontSize: 14,lineHeight: 21,fontWeight: 'bold',letterSpacing: 0.25,color: 'white',}}>
                  {"Edit Profile"}
                </Text>
        </Pressable>
        <Pressable 
                style={{alignItems:'center',justifyContent:'center',paddingVertical:6,paddingHorizontal:8,borderRadius:4,elevation:3,backgroundColor:'black',marginVertical:10,borderWidth:0.5,borderColor:'#444444',marginHorizontal:10,marginRight:20}}
                onPress={()=>{alert('abcd')}}>
                <Entypo name="chevron-down" size={24} style={{fontSize: 16,lineHeight: 21,fontWeight: 'bold',letterSpacing: 0.25,color: 'white',}}/>
        </Pressable>
      </View>
      
        <StoryHighlights/>
      
        <Tab.Navigator style={{backgroundColor:'black',borderTopWidth:0.4,borderTopColor:'#444444',flex:1}}>
            <Tab.Screen 
                name="AllPosts" 
                component={MyPosts} 
                options ={{
                  tabBarShowLabel:false,
                  tabBarStyle: {backgroundColor:'black',},
                  tabBarIndicatorStyle:{backgroundColor:'white',height:0.5},
                  tabBarActiveTintColor : 'white',
                  tabBarInactiveTintColor :  'gray',
                  tabBarIcon: () => {
            return <MaterialIcons name="grid-on" size={25} color={'white'}/>;
          },
                }}/>
            <Tab.Screen 
                name="Tags" 
                component={Tags} 
                options={{
                  tabBarShowLabel:false,
                  tabBarStyle: {backgroundColor:'black',},
                  tabBarIndicatorStyle:{backgroundColor:'white',height:0.5},
                  tabBarActiveTintColor:'white',
                  tabBarInactiveTintColor: 'gray',
                  tabBarIcon: () => {
            return <Image source={require('../../assets/Icons/TagIcon.png')} style={{height:25, width:25,tintColor:'white'}}/>;
          },
                }}/>
        </Tab.Navigator>
        
        
      

{/* Create RB Sheete */}
        <RBSheet
          ref={ref => {
            this.RBSheet1 = ref;
          }}
          height={500}
          openDuration={250}
          closeOnDragDown={true}
          customStyles={{
            container: {
              borderTopEndRadius:20,
              borderTopStartRadius:20,
              backgroundColor: '#222222',
            }
          }}>
                <Text style={{color:'white',fontSize:20,marginVertical:10,alignSelf: "center",fontWeight:'bold'}}>Create</Text>
                <View style={{borderBottomColor: '#444444',borderBottomWidth: 0.5}}/>
                <FlatList  
                  scrollEnabled={false}
                  data={this.state.createList}
                  vertical
                  renderItem={(item)=>
                  <View > 
                  <TouchableOpacity style={{flexDirection:'row'}}>
                    <View style={{marginVertical:15,marginLeft:15}}>{item.item.icon}</View>
                    <Text style={{justifyContent:'center',marginVertical:20,fontSize:16,color:'white',marginHorizontal:20,}}>{item.item.title}</Text>
                  </TouchableOpacity>
                  <View style={{borderBottomColor: '#444444',borderBottomWidth: 0.5,marginLeft:55}}/>
                </View>}/>
        </RBSheet>

{/* Menu RB Sheete */}
        <RBSheet
          ref={ref => {
            this.RBSheet2 = ref;
          }}
          height={500}
          openDuration={250}
          closeOnDragDown={true}
          customStyles={{
            container: {
              borderTopEndRadius:20,
              borderTopStartRadius:20,
              backgroundColor: '#222222',
            }
          }}>
        <FlatList  
            scrollEnabled={false}
            data={this.state.menuList}
            vertical
            renderItem={(item)=>
            <View > 
              <TouchableOpacity style={{flexDirection:'row'}}>
                  <View style={{marginVertical:15,marginLeft:15}}>{item.item.icon}</View>
                  <Text style={{justifyContent:'center',marginVertical:20,fontSize:16,color:'white',marginHorizontal:20,}}>{item.item.title}</Text>
              </TouchableOpacity>
              <View style={{borderBottomColor: '#444444',borderBottomWidth: 0.5,marginLeft:55}}/>
            </View>}/>
        </RBSheet>

{/* Create RB Sheete */}
        <RBSheet
          ref={ref => {
            this.RBSheet3 = ref;
          }}
          
          openDuration={250}
          flex={1}
          closeOnDragDown={true}
          customStyles={{
            container: {
              borderTopEndRadius:20,
              borderTopStartRadius:20,
              backgroundColor: '#222222',
            }
          }}>
                <FlatList  
                  scrollEnabled={false}
                  data={this.state.accounts}
                  vertical
                  renderItem={(item)=>
                  <View> 
                  <TouchableOpacity style={{flexDirection:'row'}}>
                    <View style={{marginVertical:5,marginLeft:15}}>{item.item.img}</View>
                    <Text style={{justifyContent:'center',alignSelf:'center',fontSize:16,color:'white',marginHorizontal:20,}}>{item.item.usn}</Text>
                  </TouchableOpacity>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <Pressable 
                      style={{alignItems:'center',justifyContent:'center',paddingVertical:6,paddingHorizontal:32,borderRadius:4,elevation:3,backgroundColor:'#222222',marginVertical:5,borderWidth:0.5,borderColor:'#444444',marginHorizontal:10,}}
                      onPress={()=>{Alert.alert(Followers())}}>
                    <Text style={{fontSize: 14,lineHeight: 21,fontWeight: 'bold',letterSpacing: 0.25,color: 'white',}}>
                        {Followers() + " followers"}
                    </Text>
                  </Pressable>
                  <Pressable 
                      style={{alignItems:'center',justifyContent:'center',paddingVertical:6,paddingHorizontal:32,borderRadius:4,elevation:3,backgroundColor:'#222222',marginVertical:5,borderWidth:0.5,borderColor:'#444444',marginHorizontal:10,}}
                      onPress={()=>{Alert.alert(CloseFriends())}}>
                    <Text style={{fontSize: 14,lineHeight: 21,fontWeight: 'bold',color: 'white',}}>
                          {CloseFriends() + " close friends"}
                    </Text>
                  </Pressable>
                  </View>
                </View>}/>
                <View style={{borderBottomColor: '#444444',borderBottomWidth: 0.5,marginVertical:5}}/>
                <View style={{height:70,flexDirection:'row',}}>
                <AntDesign name="plus" size={30} color="white" style={{alignSelf:'center',justifyContent:'center',marginHorizontal:20}}/>
                <Text style={{color:'white',fontSize:14,alignSelf:'center',fontWeight:'bold'}}>{'Add Account'}</Text>
                </View>
        </RBSheet>
      
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


