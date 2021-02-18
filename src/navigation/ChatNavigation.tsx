import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, StyleSheet, Text, View } from 'react-native';


function ListScreen({ navigation }) {
    return (
        <View style={styles.view}>
            <Text>List!</Text>
            <Button title="Go to Detail" onPress={() => navigation.navigate('Detail')} />
        </View>
    );
}

function DetailScreen({ navigation }) {
    function goBack() {
        let state = navigation.dangerouslyGetState();
        if (state.index == 0) {
            navigation.reset({ index: 0, routes: [{ name: 'List' }] });
        } else {
            navigation.goBack()
        }
    }
    return (
        <View style={styles.view}>
            <Text>Detail!</Text>
            <Button title="Go back" onPress={() => goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const Stack = createStackNavigator();

const ChatNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="home">
            <Stack.Screen
                name="List"
                component={ListScreen} />
            <Stack.Screen
                name="Detail"
                component={DetailScreen} />
        </Stack.Navigator>
    );
};

export default ChatNavigation;