import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native'

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View style={styles.view}>
            <Button title="Increase" onPress={() => { setCounter(counter + 1) }}/>
            <Button title="Decrease" onPress={() => { setCounter(counter - 1) }}/>
            <Text>Current count: {counter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20
    }
});

export default CounterScreen;