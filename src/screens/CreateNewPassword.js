import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Black, White, Primary } from '../utilities/color'

const CreateNewPassword = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.TitleTxt}>
            <Text style={styles.title}>Create new password</Text>
            <Text style={styles.subTitle}>Your password must be different from previous used password</Text>
        </View>
      <View style={styles.usernameInputField}>
            <TextInput style={styles.inputText}
            placeholder="New password" 
            placeholderTextColor="#CACACC"/>
            <TouchableOpacity>
                {/* <Image
                    source={require('../assets/check.png')}
                    style={{width: 20, height: 20,  }}
                    resizeMode= {'contain'}
                /> */}
            </TouchableOpacity>
        </View>
        <View style={styles.usernameInputField}>
            <TextInput style={styles.inputText}
            placeholder="Confirm new password" 
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
                onPress={() => navigation.navigate('SignupwithFacebook')}
            >
                <Text style={styles.loginTxt}>Reset Password</Text>
            </TouchableOpacity>
    </View>
  )
}

export default CreateNewPassword

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
        marginTop:30,
        
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
        marginTop:"20%",
    },
    loginTxt:{
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        
    },
    TitleTxt:{
        marginBottom:"15%",
    }
    
})