import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SplashScreen from './src/screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import ForgotPassword from './src/screens/ForgotPassword';
import CreateNewPassword from './src/screens/CreateNewPassword';
import Otp from './src/screens/Otp';
import SignupwithFacebook from './src/screens/SignupwithFacebook';
import FindYourFriend from './src/screens/FindYourFriend';
import Profile from './src/screens/Profile';
import BottomMenu from './src/components/BottomMenu';
import Home from './src/screens/HomeScreens/Home';
import HomeTab from './src/screens/HomeScreens/HomeTab';
import BarberDetailScreen from './src/screens/BarberDetailScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="SignupwithFacebook" component={SignupwithFacebook} />
        <Stack.Screen name="FindYourFriend" component={FindYourFriend} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="BottomMenu" component={BottomMenu} />
        <Stack.Screen name="HomeTab" component={HomeTab} />
        <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="HoBarberDetailScreenme" component={BarberDetailScreen} />
        

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})