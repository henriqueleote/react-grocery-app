import React from 'react';
import { StyleSheet, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../src/screens/HomeScreen';
import HomeScreen1 from '../src/screens/HomeScreen1';
import HomeScreen2 from '../src/screens/HomeScreen2';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 70,
                }
            }}
        >
            <Tab.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false, tabBarIcon: ({ focused }) => (<Image source={require('../assets/icons/home.png')} style={{ width: 30, height: 30, tintColor: focused ? '#2a324b' : '#2a324b' }} />) }} />
            <Tab.Screen name='HomeScreen1' component={HomeScreen1} options={{ headerShown: false, tabBarIcon: ({ focused }) => (<Image source={require('../assets/icons/home.png')} style={{ width: 30, height: 30, tintColor: focused ? '#2a324b' : '#2a324b' }} />) }} />
            <Tab.Screen name='HomeScreen2' component={HomeScreen2} options={{ headerShown: false, tabBarIcon: ({ focused }) => (<Image source={require('../assets/icons/home.png')} style={{ width: 30, height: 30, tintColor: focused ? '#2a324b' : '#2a324b' }} />) }} />
        </Tab.Navigator>
    )
}

export default Tabs;