import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, FlatList} from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Profile';
import { Black, White, Secondary } from '../../utilities/color';


const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <Image
          source={require('../../assets/friend.png')}
          style={{width:50, height:50}}
          resizeMode={'contain'}
        />
        <View style={styles.profileTitle}>
          <Text style={styles.welcomeTxt}>Welcome</Text>
          <Text style={styles.nameTxt}>Zlatan Lukakus</Text>
        </View>
        <Image
          source={require('../../assets/notification.png')}
          style={{width:50, height:50, position: 'absolute', right:20}}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.searchField}>
        <Image
          source={require('../../assets/search.png')}
          style={{width: 20, height: 20, }}
          resizeMode= {'contain'}
        />
        <TextInput style={styles.inputText}
        placeholder="Search barber" 
        placeholderTextColor="#CACACC"/>
      </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: White,
        padding:20,
    },
    header:{
      width: "100%",
      alignSelf:'center',
      flexDirection: 'row',
    },
    profileTitle:{
      flexDirection: 'column',
      justifyContent: 'center',
      marginStart:20,
    },
    welcomeTxt:{
      color: '#A3A3A3',
      fontSize:12,
    },
    nameTxt:{
      color: Black,
      fontSize: 16,
    },
    searchField:{
      flexDirection: 'row',
      width: "100%",
      height:65,
      marginTop:40,
      alignSelf: 'center',
      backgroundColor: '#F9F9FB',
      borderRadius:10,
      alignItems: 'center',
      paddingHorizontal:20,
  },
  inputText:{
    fontSize:16,
    color: '#CACACC',
    fontWeight: '500',
    width: "100%",
    marginStart:10,
},
titleTxt:{
  color: '#000',
  fontSize:16,
}

})