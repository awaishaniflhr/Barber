import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Black, White } from '../utilities/color'

const BarberDetailScreen = () => {
  return (
    <View style={styles.container}>
        <Image
            source={require('../assets/barbermen.png')}
            style={{width: "100%", height: 284, }}
            resizeMode= {'contain'}
        />
      <Text style={styles.title}>Albert Barber Shop</Text>
      <Text style={styles.subtitle}>2972 Westheimer Rd, Illinois</Text>
    </View> 
  )
}

export default BarberDetailScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: White,
    },
    title:{
        color: Black,
        fontSize: 22,
    },
    subtitle:{
        color: '#666666',
        fontSize: 12,
    }
})