import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
    const name = 'Luiz';
    return (
        <View style={styles.view}>
            <Text style={styles.largeText}>Getting started with React Native!</Text>
            
            <Text>Enter name:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                // value=''
                // onChangeText={}
            />
            <Button title="Go to Image view" onPress={() => navigation.navigate('ImageScreen')} />
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        margin: 12,
        borderEndColor: 'gray',
        borderEndWidth: 1
    },
    largeText: {
        fontSize: 45
    },
    text: {
        fontSize: 20
    }
});

export default HomeScreen;