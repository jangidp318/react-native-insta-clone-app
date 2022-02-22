import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet,ImageBackground, Text, View, Image,TextInput, Button, TouchableOpacity, Alert, FlatList, SafeAreaView, ScrollView,SectionList} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {SearchBar,} from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Card,Appbar } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import {Ionicons,FontAwesome,AntDesign } from '@expo/vector-icons';



const navigation = useNavigation
const _goBack = () => console.log('Went back');
const _handleSearch = () => console.log('Searching');
const _handleMore = () => console.log('Shown more');

export default class Activity extends React.Component{
  state={
    search:'',
     StoryImages : [
           
          ],
    Locations:[
           
            ],
    
    Stays:[
            
            ]
  };
  updateSearch = (search)=>{
    this.setState({search});
  };
  

  render(){
    const {search}= this.state;
    return(
    <View style={styles.container}>
      <Text style={{color:'white',fontSize:25,marginVertical:5,marginHorizontal:20,marginTop:30,fontWeight:'bold'}}>Activity</Text>
    

        <ScrollView 
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>

                  
            
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


