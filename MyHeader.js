import React from "react";
import { View, Text, StyleSheet, StatusBar, ImageBackground } from "react-native";
import { Header } from 'react-native-elements'
import PropTypes from "prop-types";
import { FontAwesome, Feather } from "@expo/vector-icons";
import checkID from './CheckID';
import weatherOptions from './WeatherOptions';
import Fail from './Fail'
import { Alert } from "react-native";
import getWeather from './GetWeather';
import { AdMobBanner } from "expo";
 
export default function MyHeader(){
    return (
        <Header style = {styles.header}
                    containerStyle={{
                        backgroundColor: "#569BE5",
                        borderColor: "#569BE5",
                        opacity: 0.8
                    }}
                    leftComponent={<FontAwesome.Button style={styles.button} 
                        name={'refresh'} 
                        size={20} 
                        borderRadius={20}
                        onPress={ async ()=> {
                            const value = await getWeather();
    
                            // this.setState({weather: value.weather,description: value.description, temp:Math.round(value.currentTemp)});
                            <Weather temp={Math.round(value.currentTemp)} condition={value.condition} description={value.description} />
    
                        }}
                        iconStyle={
                            {paddingLeft:10,
                            paddingBottom: 5}
                    }/>}
                    centerComponent={{ text: 'weatherIz', 
                                        style: { 
                                            color: '#DADBE5', 
                                            fontSize: 26, 
                                            fontFamily:'permanentMarker-regular',
                                            textShadowColor:'#565150',
                                            textShadowOffset: {
                                                width:-2,
                                                height:2
                                            },
                                            textShadowRadius:2 } 
                                    }}
                    rightComponent={<FontAwesome.Button style={styles.button} 
                    name={'info'} 
                    size={20} 
                    borderRadius={20}
                    onPress={()=> {
                        // return <Fail temp={Math.round(temp)} condition={condition} description={description}/>
                        // Alert.alert("Image credit", "Thunderstorm: Fábio Hanashiro\nDrizzle: Matthew Henry\nRain: Alex J\nSnow: Andre Benz\nAtmosphere: Connor McSheffrey\nClear: Foad Roshan\nClouds: Jiri Benedikt\nFrom unsplash.com");
                        // this.fail();    
                        this.props.navigation.navigate('Fail');

                    }}
                    iconStyle={
                        {paddingLeft:10,
                        paddingBottom: 5}
                }/>}
                />
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    backgroundImage: {
        flex:1,
        width: '100%',
        height: '100%'
    },
    header: {
        backgroundColor: "#569BE5",
        borderColor: "#569BE5"
    }
})