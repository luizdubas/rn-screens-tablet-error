import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ColorsScreen from '../screens/ColorsScreen';
import ColorScreen from '../screens/ColorScreen';
import ColorAdjusterScreen from '../screens/ColorAdjusterScreen';

const Stack = createStackNavigator();

const ColorNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Colors"
                component={ColorsScreen} />
            <Stack.Screen
                name="RandomColors"
                component={ColorScreen} />
            <Stack.Screen
                name="ColorAdjuster"
                component={ColorAdjusterScreen} />
        </Stack.Navigator>
    );
};

export default ColorNavigation;