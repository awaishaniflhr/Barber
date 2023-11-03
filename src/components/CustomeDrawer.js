import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Black, Primary} from '../utilities/color';

const CustomeDrawer = props => {
  return (
    <View style={{flex: 1,}}>
      <View style={styles.header}>
        <Image
          source={require('../assets/friend.png')}
          style={{width: 50, height: 50}}
          resizeMode={'contain'}
        />
        <View style={styles.profileTitle}>
          <Text style={styles.welcomeTxt}>Welcome</Text>
          <Text style={styles.nameTxt}>Zlatan Lukakus</Text>
        </View>
      </View>
      <View style={{width:'60%', height:1, backgroundColor:'lightgray', alignSelf:'center', marginBottom:'7%'}}/>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
        <Text style={[styles.nameTxt,{color:Primary, alignSelf:'center', marginVertical:'10%'}]}>Barber</Text>
      </View>
    </View>
  );
};

export default CustomeDrawer;

const styles = StyleSheet.create({
  header: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    marginVertical:'10%',
    alignItems: 'center',
    justifyContent:'center',
    
  },
  profileTitle: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginStart: '20%',
  },
  welcomeTxt: {
    color: '#A3A3A3',
    fontSize: 12,
  },
  nameTxt: {
    color: Black,
    fontSize: 16,
  },
});
