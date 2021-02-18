import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ChatNavigation from './ChatNavigation';
import ListScreen from '../screens/ListScreen';

const Tab = createBottomTabNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen
                    name="Home"
                    component={HomeScreen} />
                <Tab.Screen
                    name="List"
                    component={ListScreen} />
                <Tab.Screen
                    name="Chats"
                    component={ChatNavigation} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default RootNavigation;