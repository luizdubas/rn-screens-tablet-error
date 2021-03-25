import React, { useState } from "react";
import { StyleSheet, Text, Button, SafeAreaView, View } from "react-native";

const ColorCounter = ({title, value, onIncrease, onDecrease}) => {
    return (
        <View style={styles.card}>
            <Text>{title} ({value})</Text>
            <Button 
                title={`Increase ${title}`} 
                onPress={onIncrease}
            />
            <Button 
                title={`Decrease ${title}`}
                onPress={onDecrease}
            />
        </View>
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

export default ColorCounter;