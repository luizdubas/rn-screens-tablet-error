import React, { useState, useReducer } from "react";
import { StyleSheet, Text, Button, SafeAreaView, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 5;

const reducer = (state, action) => {
    const isChangeValid = (value, amount) => {
        return value + amount >= 0 && value + amount <= 255;
    }
    const { type, payload } = action;
    switch (type) {
        case 'change_red':
            return isChangeValid(state.red, payload)
                ? { ...state, red: state.red + payload } 
                : state;
        case 'change_green':
            return isChangeValid(state.green, payload)
                ? { ...state, green: state.green + payload } 
                : state;
        case 'change_blue':
            return isChangeValid(state.blue, payload)
                ? { ...state, blue: state.blue + payload } 
                : state;
        default:
            return state
    }
}

const ColorAdjusterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state

    return (
        <SafeAreaView>
            <ColorCounter 
                title="Red" 
                value={red} 
                onIncrease={() => { dispatch({ type: 'change_red', payload: COLOR_INCREMENT }) }}
                onDecrease={() => { dispatch({ type: 'change_red', payload: -COLOR_INCREMENT }) }}
            />
            <ColorCounter 
                title="Green" 
                value={green} 
                onIncrease={() => { dispatch({ type: 'change_green', payload: COLOR_INCREMENT }) }}
                onDecrease={() => { dispatch({ type: 'change_green', payload: -COLOR_INCREMENT }) }}
            />
            <ColorCounter 
                title="Blue" 
                value={blue} 
                onIncrease={() => { dispatch({ type: 'change_blue', payload: COLOR_INCREMENT }) }}
                onDecrease={() => { dispatch({ type: 'change_blue', payload: -COLOR_INCREMENT }) }}
            />
            <View style={{ marginHorizontal: 12, height: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 12,
        padding: 12,    
        borderRadius: 6,
        borderColor: 'grey',
        borderWidth: 1
    },
});

export default ColorAdjusterScreen;