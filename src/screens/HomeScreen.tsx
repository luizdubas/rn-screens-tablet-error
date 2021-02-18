import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
    const name = 'Luiz';
    return (
        <View style={styles.view}>
            <Text style={styles.largeText}>Getting started with React Native!</Text>
            <Text style={styles.text}>My name is {name}</Text>
            <Button title="Go to Detail" onPress={() => navigation.navigate('Chats', { screen: 'Detail' })} />
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    largeText: {
        fontSize: 45
    },
    text: {
        fontSize: 20
    }
});

export default HomeScreen;