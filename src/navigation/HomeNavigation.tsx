import * as React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ImageScreen from '../screens/ImageScreen';

const Stack = createNativeStackNavigator();

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