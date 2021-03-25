import React, { useState, useReducer } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native'

const COUNT_INCREMENT = 1;

const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'change_value':
            return { ...state, count: state.count + payload };
        default:
            return state;
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    const { count } = state;

    return (
        <View style={styles.view}>
            <Button title="Increase" onPress={() => { dispatch({ type: 'change_value', payload: COUNT_INCREMENT }) }}/>
            <Button title="Decrease" onPress={() => { dispatch({ type: 'change_value', payload: -COUNT_INCREMENT }) }}/>
            <Text>Current count: {count}</Text>
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