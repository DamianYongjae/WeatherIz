import React from 'react';
import { View, Text, StyleSheet} from "react-native";

export default function Thanks(){
    console.log("function invoked");
    return (
        <View style = {styles.container}>
            <Text>Thanks page!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        width: "80%",
        height: "60%",
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "gray",
        zIndex:0,
        opacity: 0.5
    }
   
});