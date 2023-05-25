import { StyleSheet, Text, View, Image, TouchableOpacity, Button, FlatList, StatusBar, Dimensions} from 'react-native'
import React from 'react'

import Onboarding from 'react-native-onboarding-swiper';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Primary, Secondary, White } from '../utilities/color';

const DATA = [
    {
      id: '1',
      image: require('../assets/onboarding1Img.png'),
      title: 'Find Your Best Barber Shop Nearby',
      subTitle: 'Easily search your best and favorite barber shops anywhere nearby',
    },
    {
      id: '2',
      image: require('../assets/onboarding2Img.png'),
      title: 'No Need to Do a Boring Queue, Just Stay Home!',
      subTitle: 'Waiting for your turn comfortably at home and we will inform you for your turn',
    },
    {
      id: '3',
      image: require('../assets/onboarding3Img.png'),
      title: 'All you need for your barber needs ',
      subTitle: 'Feel comfortable ordering and waiting for your turn with Barbar',
      button: 'Get Started',
    },
  ];


const SplashScreen = ({navigation}) => {

  const Item = ({item}) => (
    <View style={styles.item}>
       <Image style={styles.profileImg} source={item.image}></Image> 
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subTitle}</Text>
      
        {item.id==3?
          <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.nextBtnTxt}>{item.button}</Text>
          </TouchableOpacity>:
          <TouchableOpacity style={styles.nextBtn} >
              <Text style={styles.nextBtnTxt}>Next</Text>
          </TouchableOpacity>
        }
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        horizontal={true}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id} 
        navigation={navigation}
        pagingEnabled
      />
    </View>

  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
      },
      item: {
        backgroundColor: White,
        padding: 10,
        width:Dimensions.get("window").width,
      },
      profileImg:{
        width:282,
        height:162,
        alignSelf: 'center',
        marginTop:"30%",
        marginBottom: "20%",
        resizeMode: 'contain',
        
    },
      title: {
        fontSize: 20,
        color: '#3B3B3B',
        fontWeight:'500',
        alignSelf: 'center',
        textAlign: 'center',
        marginBottom: 10,
        width:300,

      },
      subtitle:{
        fontSize:14,
        color: '#8F8F8F',
        fontWeight:'400',
        alignSelf: 'center',
        textAlign: 'center',
        marginBottom: "10%",
        width:300,
      },
    nextBtn:{
        width:315,
        height:65,
        backgroundColor: Primary,
        borderRadius:8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:30,
        alignSelf: 'center',
    },
    nextBtnTxt:{
        color: '#fff',
        fontSize:16,
        fontWeight:'400',
    },
    
})