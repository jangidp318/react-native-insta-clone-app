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

export default class Search extends React.Component{
  state={
    search:'',
  };
  updateSearch = (search)=>{
    this.setState({search});
  };
  

  render(){
    const {search}= this.state;
    return(
    <View style={styles.container}>
        <SearchBar
        darkTheme
        containerStyle={{backgroundColor:'black',marginTop:20}}
        inputContainerStyle={{borderRadius:10,height:35,marginHorizontal:10}}
        inputStyle={{fontSize:16,color:'white'}}
        style={styles.searchBarStyle}
        placeholder="Search "
        onChangeText={this.updateSearch}
        loadingProps={true}
        value={search}/>
    

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
  searchBarStyle: { 
    marginHorizontal:30,
    borderRadius:40,
  },
})


