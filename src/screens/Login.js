import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Primary, Secondary,  } from '../utilities/color'

const Login = ({navigation}) => {

    const [selectedId, setSelectedId] = useState();
    

    
  return (
    <View style={styles.container}> 
        <View style={styles.titleSection}> 
            <Text style={styles.title}>barbar</Text>
            <Text style={styles.subTitle}>we guaranteed your handsome</Text>
        </View>
        <View style={{ marginBottom:150,
            // alignItems: 'center', 
            }}>
            <View style={styles.usernameInputField}>
                <TextInput style={styles.inputText}
                placeholder="Zlatan Lukaku" 
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
            <TouchableOpacity><Text style={styles.forgotText}>Forgot Password?</Text></TouchableOpacity>
        </View>
        
        <View style={styles.loginRegisterBtns}>
            <TouchableOpacity style={styles.loginBtn} 
                onPress={() => navigation.navigate('Profile')}
            >
                <Text style={styles.loginTxt}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerBtn} 
                onPress={() => navigation.navigate('Register')}
            >
                <Text style={styles.registerTxt}>Register</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1,
        padding:20,
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
        backgroundColor:Secondary,
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal:20,
    },
    inputText:{
        width:220,
        fontSize:16,
        color: '#fff',
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
        // position: 'absolute',
        // bottom:10,
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
})