import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Primary, Secondary,  } from '../utilities/color'

const Register = ({navigation}) => {
  return (
    <View style={styles.container}> 
        <View style={styles.titleSection}> 
            <Text style={styles.title}>barbar</Text>
            <Text style={styles.subTitle}>we guaranteed your handsome</Text>
        </View>

        <View style={{ marginBottom:"20%",}}>
        <View style={styles.signInBtns}>
            <TouchableOpacity style={styles.googleBtn} 
                // onPress={() => NavigationContainer.navigate('Login')}
            >
                <Text style={styles.googleTxt}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.facebookBtn} 
                // onPress={() => NavigationContainer.navigate('Login')}
            >
                <Text style={styles.facebookTxt}>Facebook</Text>
            </TouchableOpacity>

        </View>
            <View style={styles.usernameInputField}>
                <TextInput style={styles.inputText}
                placeholder="User name" 
                placeholderTextColor="#CACACC"/>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/check.png')}
                        style={{width: 20, height: 20,  }}
                        resizeMode= {'contain'}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.usernameInputField}>
                <TextInput style={styles.inputText}
                placeholder="Email" 
                placeholderTextColor="#CACACC"/>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/check.png')}
                        style={{width: 20, height: 20,  }}
                        resizeMode= {'contain'}
                    />
                </TouchableOpacity>
            </View>
            <View style={[styles.usernameInputField,{backgroundColor: '#F9F9FB'}]}>
                <TextInput style={[styles.inputText,{color: 'gray'}]}
                placeholder="Password" 
                placeholderTextColor="#CACACC"/>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/view.png')}
                        style={{width: 20, height: 20,  }}
                        resizeMode= {'contain'}
                    />
                </TouchableOpacity>
            </View>
            
        </View>
        
        <View style={styles.loginRegisterBtns}>
            <TouchableOpacity style={styles.loginBtn} 
                onPress={() => navigation.navigate('ForgotPassword')}
            >
                <Text style={styles.loginTxt}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerBtn} 
                onPress={() => navigation.navigate('ForgotPassword')}
            >
                <Text style={styles.registerTxt}>Login</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1,
        padding:30,
        justifyContent: 'center',
        
    
    },
    titleSection:{
        width: "100%",
        marginVertical:50,

    },
    title:{
        fontSize:48,
        color: Primary,
        textAlign: 'center',
        fontWeight: 'normal',
    },
    subTitle:{
        fontSize:14,
        color: '#B3B3B3',
        textAlign: 'center',
        fontWeight: 'normal',
    },
    usernameInputField:{
        flexDirection: 'row',
        width:315,
        height:65,
        marginTop:25,
        alignSelf: 'center',
        backgroundColor: '#F9F9FB',
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal:20,
    },
    inputText:{
        width:220,
        fontSize:16,
        color: 'gray',
        fontWeight: '500',
    },
    forgotText:{
        color: '#CCCCCC',
        fontSize:16,
        marginTop:30,
        marginStart:20,
        fontWeight:'500',
    },
    loginRegisterBtns:{
        alignSelf:  'center'
    },
    loginBtn:{
        backgroundColor: Primary,
        width:315,
        height:65,
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginTxt:{
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },
    registerBtn:{
        width:100,
        borderRadius:10,
        alignSelf: 'center',
    },
    registerTxt:{
        color: '#333333',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '500',
        marginVertical:30,
    },
    signInBtns:{
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-around'

    },
    googleBtn:{
        backgroundColor: '#F9F9FB',
        width:147,
        height:65,
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    googleTxt:{
        color: '#000',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },
    facebookBtn:{
        backgroundColor: '#3B5998',
        width:147,
        height:65,
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    facebookTxt:{
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },
})