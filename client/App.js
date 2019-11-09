import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const windowSize = Dimensions.get('window');
const background = '#5c4d48';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Mountain Finder</Text> 
            </View>
            <Image style={styles.backgroundImage} source={require('./assets/pink-mountains.jpg')}></Image>
            <Text>Project 4!😎</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: background,
        alignItems: 'center',
    },
    titleContainer: {
        position: 'absolute',
        width: windowSize.width,
        zIndex: 3,
        alignItems: 'center',
    },
    title: {  
        fontSize: 70,
        color: background,
        fontFamily: 'DancingScript-Bold',
    },
    backgroundImage: {
        width: windowSize.width,
        height: vh(40),
        minHeight: 300,
        resizeMode: 'stretch',   
    },
});

/* text-shadow: 2px 2px #5c4d4840; */