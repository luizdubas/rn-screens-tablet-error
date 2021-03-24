import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, FlatList, View } from 'react-native'

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    const addColor = () => {
        setColors([...colors, randomRgb()]);
    };

    return (
        <SafeAreaView>
            <Button title="Add a color" onPress={addColor}/>
            <FlatList 
                keyExtractor={(item) => { return item }}
                data={colors}
                renderItem={ ({ item }) => {
                    return (
                        <View style={{ height: 100, width: 100, backgroundColor: item}}/>
                    )
                }}
            />
        </SafeAreaView>
    );
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({});

export default ColorScreen