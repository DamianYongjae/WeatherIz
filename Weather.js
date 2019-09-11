import React from "react";
import { View, Text, StyleSheet, StatusBar, ImageBackground } from "react-native";
import { Header } from 'react-native-elements'
import PropTypes from "prop-types";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import checkID from './CheckID';
import weatherOptions from './WeatherOptions';
import { Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "198e5d625b96da2777e9518b06bc91b7";

getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=imperial`);

    condition = weather[0].id;
    currentTemp = temp;
    description = weather[0].description;

    // console.log(condition, currentTemp, description);
    return {condition, currentTemp, description};
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      information = await getWeather(latitude,longitude);
    //   console.log(information);
    //   return {latitude, longitude};
      return information;
    }catch (error){
      Alert.alert("Problem","Location service needed.");
    }
  }

export default function Weather({temp, condition, description}) {
    position = checkID(condition);
    weather = weatherOptions[position];
    return (
        <ImageBackground style={styles.backgroundImage} source={{url: weather.imageName}}>
            <Header style = {styles.header}
                containerStyle={{
                    backgroundColor: "#569BE5"
                }}
                leftComponent={<FontAwesome.Button style={styles.button} 
                    name={'refresh'} 
                    size={20} 
                    borderRadius={20}
                    onPress={ async ()=> {
                        const value = await getLocation();
                        // const {latitude, longitude} = getLocation();
                        // console.log(latitude,longitude);
                        // const {condition, temp, description} = getWeather(latitude,longitude);
                        console.log(value);
                        <Weather temp={Math.round(value.currentTemp)} condition={value.condition} description={value.description} />

                    }}
                    iconStyle={
                        {paddingLeft:10,
                        paddingBottom: 5}
                }/>}
                centerComponent={{ text: 'WeatherIz', style: { color: '#fff', fontSize: 26 } }}
                rightComponent={<FontAwesome.Button style={styles.button} 
                name={'info'} 
                size={20} 
                borderRadius={20}
                onPress={()=> {
                    Alert.alert("Image credit", "Thunderstorm: Fábio Hanashiro\nDrizzle: Matthew Henry\nRain: Alex J\nSnow: Andre Benz\nAtmosphere: Connor McSheffrey\nClear: Foad Roshan\nClouds: Jiri Benedikt\nFrom unsplash.com");
                }}
                iconStyle={
                    {paddingLeft:10,
                    paddingBottom: 5}
            }/>}
            />
            <View style={styles.container}>
                
                <StatusBar barStyle="light-content" />
                <View style={styles.halfContainer}>
                    
                    
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
    header: {
        backgroundColor: "#569BE5"
    },
    halfContainer: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        paddingTop: 10
    },
    textContainer: {
        paddingTop: 10,
        alignItems: "flex-start",
        paddingHorizontal: 40,
        justifyContent: "center",
        flex: 1
      },
    button:{
        width: 40,
        height: 40,
        justifyContent: "center",
        alignContent: "center",
        borderRadius:30,
        padding:0,
        margin: 0,
        backgroundColor: "#569BE5"
    }
});