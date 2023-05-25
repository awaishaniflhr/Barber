import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Width = Dimensions.get('window').width;
const Header = ({navigation}) => {
  return (
    <View style={{ alignItems: 'center'}}>
    <View
    style={{
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      justifyContent: 'space-between',
    }}>
    <TouchableOpacity
      onPress={() => {
        navigation.openDrawer();
        // navigation.goBack();
      }}
      style={styles.header}>
      <Image
        resizeMode="contain"
        style={[styles.icon, {tintColor: '#fff'}]}
        source={require('../../assets/more.png')}
      />
    </TouchableOpacity>
    <Text
      style={{
        color: '#fff',
        fontSize: 16,
        fontWeight: '400',
      }}>
      {text}
    </Text>
    <Image
      style={{height: 20, width: 20, tintColor: '#fff'}}
      source={require('../../assets/bell.png')}
      resizeMode={'contain'}
    />
  </View>
  </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        height: 60,
        flexDirection: 'row',
    
        alignItems: 'center',
      },
      icon: {
        height: 22,
        width: 22,
      },
})