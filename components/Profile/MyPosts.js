import React,{Component} from 'react';
import {View,Text,SafeAreaView,ScrollView,Image,Dimensions,Platform,StyleSheet,FlatList,Alert} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Card} from 'react-native-elements';


const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default class MyPosts extends Component{
  constructor(props){
    super(props);

    this.state ={
      GridImages:[
        {img: require('../../assets/1.jpg')},
        {img: require('../../assets/2.jpg')},
        {img: require('../../assets/3.jpg')},
        {img: require('../../assets/4.jpg')},
        {img: require('../../assets/5.jpg')},
        {img: require('../../assets/6.jpg')},
        {img: require('../../assets/7.jpg')},
        {img: require('../../assets/1.jpg')},
        {img: require('../../assets/2.jpg')},
      ]
    };
  }
  GetGridViewItem(item){
    Alert.alert("item");
  }
  render(){
    return(
      <View style={styles.container}>
         <FlatList
            data={ this.state.GridImages }
            indica
            renderItem={ ({item}) =>
              <View style={styles.GridViewContainer}>
               <Image style={styles.GridViewImageLayout} source = {item.img}/>
              </View> }
            numColumns={3}
         />
       </View>
    )
  }



}


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "black"
  },
  GridViewContainer: {
   flex:1,
   justifyContent: 'center',
   alignItems: 'center',
   margin:1,
   
},
GridViewImageLayout: {
   height:screenWidth/3.05,
   width:screenWidth/3.05,
   flex:1,
   marginHorizontal:5,
   fontWeight: 'bold',
   justifyContent: 'center',
   color: '#fff',
 }
});