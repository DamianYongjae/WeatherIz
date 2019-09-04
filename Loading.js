import React from "react";
import {StyleSheet, Text, View, StatusBar, Image } from "react-native";

export default function Loading(){
    return (
        <View style = {styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.iconContainer}>
                <Image source={require('./assets/25.gif')} />
            </View>
            <View style={styles.textContainer}>
                <Text style = {styles.text}>Please wait for the Weather!!</Text>
            </View>
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FDF6AA"
    },
    iconContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textContainer:{
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
    },
    text: {
        color: "#2c2c2c",
        fontSize: 30
    }
});