import React from "react";
import { StyleSheet, View, Button } from "react-native";

const ColorsScreen = ({ navigation }) => {
    return (
        <View style={styles.view}>
            <Button title="Go to Random colors view" onPress={() => navigation.navigate('RandomColors')} />
            <Button title="Go to Color adjuster view" onPress={() => navigation.navigate('ColorAdjuster')} />
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

export default ColorsScreen;