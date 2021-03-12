import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeNavigation';
import ChatNavigation from './ChatNavigation';
import ListScreen from '../screens/ListScreen';
import CounterScreen from '../screens/CounterScreen';

const Tab = createBottomTabNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen
                    name="Home"
                    component={HomeNavigation} />
                <Tab.Screen
                    name="List"
                    component={ListScreen} />
                <Tab.Screen
                    name="Counter"
                    component={CounterScreen} />
                <Tab.Screen
                    name="Chats"
                    component={ChatNavigation} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default RootNavigation;