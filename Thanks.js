import React from "react";
import { Feather } from "@expo/vector-icons";

import {StyleSheet, Text, View, ImageBackground} from "react-native";

export default class Thanks extends React.Component{
    
    static navigationOptions = ({navigation}) => {

        return {
            navigationOptions: () => ({
                headerBackTitle: null
            })
            
        };
    }
    
    render(){

        return (
                    <ImageBackground style = {styles.background} imageStyle={{resizeMode: 'stretch'}} source={{url:"https://images.unsplash.com/photo-1557395120-d48fc38063d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"}}>
                        <View style={styles.container}>
                            <View style = {styles.titleContainer}>
                                <Text style = {styles.title}>Thank you for Images</Text>
                            </View>

                            <View style = {styles.contentContainer}>
                                <Text style = {styles.text}>Thanks Page: Jon Tyson</Text>
                                <Text style = {styles.text}>Thunderstorm Page: Fábio Hanashiro</Text>
                                <Text style = {styles.text}>Drizzle Page: Matthew Henry</Text>
                                <Text style = {styles.text}>Rain Page: Alex J</Text>
                                <Text style = {styles.text}>Snow Page: Andre Benz</Text>
                                <Text style = {styles.text}>Atmosphere Page: Connor McSheffrey</Text>
                                <Text style = {styles.text}>Clear Page: Foad Roshan</Text>
                                <Text style = {styles.text}>Clouds Page: Nick Dietrich</Text>
                                <Text style = {styles.text}>From unsplash.com</Text>

                            </View>
                        </View>
                        
                    </ImageBackground>
                );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width:"100%",
        height:"100%", 
    },
    container:{
        flex: 0.9,

    },
    titleContainer: {
        opacity: 0.3,
        flex: 0.2,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 50,
        margin: 20,
        borderRadius: 10
    },
    contentContainer: {
        flex: 0.5,
        backgroundColor: '#E8E1E1',
        opacity: 0.6,
        marginTop: 50,
        margin: 20,
        padding: 20,
        borderRadius: 20,
        alignContent: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: 'pacifico-regular',
        color: "red",
        fontSize: 30
    },
    text: {
        fontFamily: 'chilanka-regular',
        color: "black",
        fontSize: 16
    }
});