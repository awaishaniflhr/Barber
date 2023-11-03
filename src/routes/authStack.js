import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar} from 'react-native';
import Login from '../screens/Login';
import Register from '../screens/Register';
import ForgotPassword from '../screens/ForgotPassword';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
