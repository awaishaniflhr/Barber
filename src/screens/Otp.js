import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { White } from '../utilities/color'
import OTPInputView from '@twotalltotems/react-native-otp-input'



const Otp = () => {
  return (
    <View style={styles.container}>
        <Text>Otp</Text>
        <OTPInputView pinCount={4}></OTPInputView>
    </View>
  )
}

export default Otp

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: White,
    },
})