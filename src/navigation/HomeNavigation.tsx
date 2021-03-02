import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ImageScreen from '../screens/ImageScreen';

const Stack = createStackNavigator();

const HomeNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="home"
                component={HomeScreen} />
            <Stack.Screen
                name="ImageScreen"
                component={ImageScreen} />
        </Stack.Navigator>
    );
};

export default HomeNavigation;