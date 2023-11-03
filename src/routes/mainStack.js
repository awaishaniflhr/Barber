import {StyleSheet} from 'react-native';
import {StatusBar} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../screens/Profile';
import BarberDetailScreen from '../screens/BarberDetailScreen';
import SignupwithFacebook from '../screens/SignupwithFacebook';
import FindYourFriend from '../screens/FindYourFriend';
import Tabs from '../screens/BottomTabs/Tabs';

const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="SignupwithFacebook" component={SignupwithFacebook} />
      <Stack.Screen name="FindYourFriend" component={FindYourFriend} />
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen
        name="HoBarberDetailScreenme"
        component={BarberDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
