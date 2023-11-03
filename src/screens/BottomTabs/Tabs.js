import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home, { MyDrawer } from '../HomeScreens/Home';
import Location from '../Location';
import Chat from '../Chat';
import Favourite from '../Favourite';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            borderTopWidth: 0,
            justifyContent: 'center',
            overflow: 'hidden',
            backgroundColor: 'white',
            height:'7%'
          },
        }}>
        <Tab.Screen
          name="MyDrawer"
          component={MyDrawer}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 25,
                  backgroundColor: focused
                    ? 'rgba(255,255,255,0.2)'
                    : 'rgba(0,0,0,0)',
                  width: '100%',
                  height: '100%',
                }}>
                <Image
                  style={{
                    height: focused ? 23 : 20,
                    width: focused ? 23 : 20,
                    tintColor: focused ? '#FEA051' : '#9F9F9F',
                  }}
                  source={require('../../assets/home.png')}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    color: focused ? '#FEA051' : '#9F9F9F',
                    fontSize: 10,
                  }}>
                  Home
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Location"
          component={Location}
          borderRadius={true}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 25,
                  backgroundColor: focused
                    ? 'rgba(255,255,255,0.2)'
                    : 'rgba(0,0,0,0)',
                  width: '100%',
                  height: '100%',
                }}>
                <Image
                  style={{
                    height: focused ? 23 : 20,
                    width: focused ? 23 : 20,
                    tintColor: focused ? '#FEA051' : '#9F9F9F',
                  }}
                  source={require('../../assets/pinLocation.png')}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    color: focused ? '#FEA051' : '#9F9F9F',
                    fontSize: 10,
                  }}>
                  Location
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 25,
                  backgroundColor: focused
                    ? 'rgba(255,255,255,0.2)'
                    : 'rgba(0,0,0,0)',
                  width: '100%',
                  height: '100%',
                }}>
                <Image
                  style={{
                    height: focused ? 23 : 20,
                    width: focused ? 23 : 20,
                    tintColor: focused ? '#FEA051' : '#9F9F9F',
                  }}
                  source={require('../../assets/chat.png')}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    color: focused ? '#FEA051' : '#9F9F9F',
                    fontSize: 10,
                  }}>
                  Chat
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Favourite"
          component={Favourite}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 25,
                  backgroundColor: focused
                    ? 'rgba(255,255,255,0.2)'
                    : 'rgba(0,0,0,0)',
                  width: '100%',
                  height: '100%',
                }}>
                <Image
                  style={{
                    height: focused ? 23 : 20,
                    width: focused ? 23 : 20,
                    tintColor: focused ? '#FEA051' : '#9F9F9F',
                  }}
                  source={require('../../assets/favourite.png')}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    color: focused ? '#FEA051' : '#9F9F9F',
                    fontSize: 10,
                  }}>
                  Favourite
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
