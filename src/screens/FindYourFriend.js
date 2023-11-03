import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Primary } from '../utilities/color'

const FindYourFriend = ({navigation}) => {
  return (
    <View style={styles.container}> 
        <View style={styles.TitleTxt}>
            <Image
                source={require('../assets/friend.png')}
                style={{width: 135, height: 135, alignSelf: 'center', marginBottom:20, }}
                resizeMode= {'contain'}
            />
            <Text style={styles.title}>Find Your Friends</Text>
            <Text style={styles.subTitle}>Find your all friends in one place by syning your contact list</Text>
        </View>
        <View style={styles.friendlist}>
            <Image
                source={require('../assets/friendList.png')}
                style={{width: 244, height: 60, alignSelf: 'center', marginBottom:20, }}
                resizeMode= {'contain'}
            />
            <Text style={styles.friendList}>More than <Text style={{color:Primary}}>1M people</Text> using us</Text>
        </View>

        
        <View style={styles.loginRegisterBtns}>
            <TouchableOpacity style={styles.loginBtn} 
                // onPress={() => NavigationContainer.navigate('Login')}
            >
                <Text style={styles.loginTxt}>Sync Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerBtn} 
                onPress={() => navigation.navigate('Tabs')}
            >
                <Text style={styles.registerTxt}>Skip for now</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default FindYourFriend

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
        fontSize: 24,
        color: 'black',
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
        marginBottom:50,
    },
    friendList:{
        fontSize: 14,
        color: '#868686',
        alignSelf: 'center',
        textAlign: 'center',
        width:280,
        marginBottom:50,
    },
    usernameInputField:{
        flexDirection: 'row',
        width:315,
        height:65,
        marginTop:25,
        alignSelf: 'center',
        backgroundColor:'red',
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
    friendlist:{
        marginVertical:"10%",
    }
})