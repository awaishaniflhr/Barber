import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Black, White, Primary } from '../utilities/color'

const ForgotPassword = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ForgotPassword</Text>
      <Text style={styles.subTitle}>Enter email address associated with your account and we’ll send an email with instructions to reset your password</Text>
      <View style={styles.usernameInputField}>
            <TextInput style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="#CACACC"/>
            <TouchableOpacity>
                {/* <Image
                    source={require('../assets/check.png')}
                    style={{width: 20, height: 20,  }}
                    resizeMode= {'contain'}
                /> */}
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginBtn} 
                onPress={() => navigation.navigate('CreateNewPassword')}
            >
                <Text style={styles.loginTxt}>Send instruction</Text>
            </TouchableOpacity>
    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: White,
        justifyContent: 'center',

    },
    title:{
        fontSize: 24,
        color: Black,
        alignSelf: 'center',
        textAlign: 'center',
        marginBottom:15,

    },
    subTitle:{
        fontSize: 14,
        color: '#868686',
        alignSelf: 'center',
        textAlign: 'center',
        width:280,
    },
    usernameInputField:{
        flexDirection: 'row',
        width:315,
        height:65,
        alignSelf: 'center',
        backgroundColor: '#F9F9FB',
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal:20,
        marginVertical:100,
    },
    inputText:{
        width:220,
        fontSize:16,
        color: 'gray',
        fontWeight: '500',
    },
    loginBtn:{
        backgroundColor: Primary,
        width:315,
        height:65,
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    loginTxt:{
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        
    },
    
})