import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Profile';
import { White } from '../../utilities/color';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <View style={styles.container}>
        <Tab.Navigator 
            screenOptions={{
                tabBarLabelStyle: { fontSize: 14 },
                tabBarStyle: { backgroundColor: '#fff' },
                tabBarIndicatorStyle: { backgroundColor: '#61aa47'},
                tabBarPressColor: { backgroundColor: 'red' },
                tabBarActiveTintColor: '#000',
                }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Profile} />
        </Tab.Navigator>
    </View>
  )
}

export default HomeTab

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: White,
    }
})