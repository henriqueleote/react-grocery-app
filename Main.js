import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tabs from './navigation/tabs';
import HomeScreen from './src/screens/HomeScreen';



const Stack = createStackNavigator();

const MainActivity = () => {
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    );
}

export default MainActivity;