import React from "react";
import { View, Text, StyleSheet, StatusBar, ImageBackground, Button } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        // gradient: ["#373B44", "#4286f4"],
        imageName: "https://images.unsplash.com/photo-1504792001904-7a52bab2ec06?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house",
        color: "white"
      },
      Drizzle: {
        iconName: "weather-hail",
        // gradient: ["#89F7FE", "#66A6FF"],
        imageName: "https://images.unsplash.com/photo-1488034976201-ffbaa99cbf5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        title: "Drizzle",
        subtitle: "Is like rain, but is not rain.",
        color: "#32FFB4"
      },
      Rain: {
        iconName: "weather-rainy",
        imageName: "https://images.unsplash.com/photo-1522681179166-dabb0c8bf805?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=586&q=80",
        title: "It's Raining",
        subtitle: "Don't forget the umbrella",
        color:"#FAA258"
      },
      Snow: {
        iconName: "weather-snowy",
        imageName: "https://images.unsplash.com/photo-1514327189585-748384587b3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        // gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Cold as balls",
        subtitle: "Do you wanna build a snowman? Nope.",
        color:"#A258FA"
      },
      Atmosphere: {
        iconName: "weather-fog",
        imageName: "https://images.unsplash.com/photo-1525177407778-715cf858c691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        // gradient: ["#89F7FE", "#66A6FF"]
        title: "Complicated weather! I can't explain.",
        color: "#587FFA"
      },
      Clear: {
        iconName: "weather-sunny",
        imageName: "https://images.unsplash.com/photo-1532706976289-64bb0a243605?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80",
        title: "Sunny. Good!",
        subtitle: "It is my favorite day!!",
        color: "#FFCFCF"
      },
      Clouds: {
        iconName: "weather-cloudy",
        imageName: "https://images.unsplash.com/photo-1515081774057-84dcf72d0cf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80",
        // gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "I know, boring and gloomy",
        color: "#F1E593"
      }
};

export default function Weather({temp, condition, description}) {
    checkID = (condition) => {
        result = "";
        if (condition >= 200 && condition <300)
            result = "Thunderstorm";
        else if (condition >= 300 && condition <400)
            result = "Drizzle";
        else if (condition >= 500 && condition <600)
            result = "Rain";
        else if (condition >=600 && condition <700)
            result = "Snow";
        else if (condition >700 && condition <800)
            result = "Atmosphere";
        else if (condition == 800)
            result = "Clear";
        else if (condition > 800)
            result = "Clouds";
        else
            result = "Something Wrong!!" 
        return result;
    };
   
    position = checkID(condition);
    weather = weatherOptions[position];
    return (
        <ImageBackground style={styles.backgroundImage} source={{url: weather.imageName}}>
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
      }

});