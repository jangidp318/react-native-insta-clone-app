import React from 'react';
import {View,Text,Image} from 'react-native';

const Tags = () => {
    return(
      <View style={{backgroundColor:'black',flex:1,justifyContent:'center',alignItems:'center'}}>
      <Image source={require('../../assets/Icons/TagIconBackground.png')} style={{justifyContent:'center',alignSelf:'center',marginVertical:10,tintColor:'white',height:100, width:100}}/>
      <Text style={{color:'white',fontSize:22,fontWeight:'bold',marginVertical:10}}>{"Photos and Videos of you"}</Text>
      <Text style={{color:'gray',fontSize:16,textAlign:'center'}}>{"When people tag you in photos and videos,\nthey'll appear here."}</Text>
    </View>);
}

export default Tags;