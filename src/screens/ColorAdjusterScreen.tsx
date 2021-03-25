import React, { useState } from "react";
import { StyleSheet, Text, Button, SafeAreaView, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 5;

const ColorAdjusterScreen = () => {
    const [redTint, setRedTint] = useState(0);
    const [greenTint, setGreenTint] = useState(0);
    const [blueTint, setBlueTint] = useState(0);

    const setColor = (currentValue, operation, setValue) => {
        currentValue >= 255 || currentValue <= 0 ? 
            null : 
            setValue(currentValue + operation);
        return
    }

    return (
        <SafeAreaView>
            <ColorCounter 
                title="Red" 
                value={redTint} 
                onIncrease={() => { setColor(redTint, COLOR_INCREMENT, setRedTint) }}
                onDecrease={() => { setColor(redTint, -COLOR_INCREMENT, setRedTint) }}
            />
            <ColorCounter 
                title="Green" 
                value={greenTint} 
                onIncrease={() => { setColor(greenTint, COLOR_INCREMENT, setGreenTint) }}
                onDecrease={() => { setColor(greenTint, -COLOR_INCREMENT, setGreenTint) }}
            />
            <ColorCounter 
                title="Blue" 
                value={blueTint} 
                onIncrease={() => { setColor(blueTint, COLOR_INCREMENT, setBlueTint) }}
                onDecrease={() => { setColor(blueTint, -COLOR_INCREMENT, setBlueTint) }}
            />
            <View style={{ marginHorizontal: 12, height: 100, backgroundColor: `rgb(${redTint}, ${greenTint}, ${blueTint})`}}/>
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