import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Black, White, Primary, Secondary } from '../utilities/color'

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.TitleTxt}>
            <Text style={styles.title}>Profile</Text>
            <Image
                source={require('../assets/fbnewuser.png')}
                style={{width: 135, height: 80, alignSelf: 'center', marginBottom:20, }}
                resizeMode= {'contain'}
            />
            <Text style={styles.title}>Sign up with facebook</Text>
            <Text style={styles.subTitle}>Find your friends in one place by registing using Facebook</Text>
        </View>
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
        <View style={[styles.usernameInputField,{backgroundColor:'#F9F9FB'}]}>
            <TextInput style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="#CACACC"/>
            <TouchableOpacity>
                {/* <Image
                    source={require('../assets/check.png')}
                    style={{width: 20, height: 20,  }}
                    resizeMode= {'contain'}
                /> */}
            </TouchableOpacity>
        </View>
        <TouchableOpacity><Text style={styles.forgotText}>Forgot Password?</Text></TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} 
                onPress={() => navigation.navigate('FindYourFriend')}
            >
                <Text style={styles.loginTxt}>Get Access</Text>
            </TouchableOpacity>
    </View>
  )
}

export default Profile

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
        backgroundColor: Secondary,
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
        marginBottom:"5%",
    },
    forgotText:{
        color: '#CCCCCC',
        fontSize:16,
        marginTop:30,
        marginStart:20,
        fontWeight:'500',
        marginStart:40,
        
    },
    
})