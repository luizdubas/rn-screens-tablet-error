import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({title, imageSource, score}) => {
    return (
        <View style={styles.detail}>
            <Image source={imageSource}/>
            <View style={styles.textView}>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.text}>Image score: {score}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 24,
        marginVertical: 8
    },
    textView: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginHorizontal: 0,
        marginVertical: 8
    },
    text: {
        fontSize: 20
    }
});

export default ImageDetail;