import React from "react";
import { View, Text, StyleSheet, StatusBar, ImageBackground, Button } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import checkID from './CheckID';
import weatherOptions from './WeatherOptions';

export default function Weather({temp, condition, description}) {

    position = checkID(condition);
    weather = weatherOptions[position];
    return (
        <ImageBackground style={styles.backgroundImage} source={{url: weather.imageName}}>
            
            <View style={styles.container}>
                
                <StatusBar barStyle="light-content" />
                <View style={styles.halfContainer}>
                    <View style={{flex:0.3, paddingLeft:"80%", marginTop:-100}}>
                        <FontAwesome.Button style={styles.button} 
                            name={'info'} 
                            size={35} 
                            color={"white"}
                            borderRadius={30}
                            onPress={()=> console.log('Button pressed')}
                            iconStyle={
                                {paddingLeft:10}
                        }/>
                    </View>
                    
                    <MaterialCommunityIcons 
                        size={96}
                        name={weather.iconName}
                        color={weather.color}
                    
                    />
                    <Text style={
                        {fontSize: 42, 
                        color:weather.color}
                    }>{temp}°</Text>
                    <Text style={
                        {fontSize: 34,
                        fontWeight: "300",
                        marginBottom: 10,
                        textAlign: "left",
                        color:weather.color}
                    }>{(description).charAt(0).toUpperCase()+(description).slice(1)}</Text>   
                </View>

                <View style={styles.textContainer}>
                    <Text style={
                        {fontSize: 34,
                        fontWeight: "400",
                        color:weather.color
                        }
                    }>{weather.title}</Text>
                    <Text style={
                        {fontWeight: "600",
                        fontSize: 24,
                        textAlign: "left",
                        color:weather.color}
                    }>{weather.subtitle}</Text>
                </View>
            </View>
        </ImageBackground>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    backgroundImage: {
        flex:1,
        width: '100%',
        height: '100%',
    },
    halfContainer: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        paddingTop: 50
    },
    textContainer: {
        paddingTop: 180,
        alignItems: "flex-start",
        paddingHorizontal: 40,
        justifyContent: "center",
        flex: 1
      },
    button:{
        width: 50,
        height: 50,
        justifyContent: "center",
        alignContent: "center",
        borderRadius:40,
        padding:0,
        margin: 0
        
    }

});