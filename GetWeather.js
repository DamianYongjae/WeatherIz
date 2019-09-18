import * as Location from "expo-location";
import axios from "axios";
import {Alert} from "react-native";

const API_KEY = "198e5d625b96da2777e9518b06bc91b7";

export default async function getWeather() {


    try {
        await Location.requestPermissionsAsync();
        const {
            coords: {latitude, longitude}
        } = await Location.getCurrentPositionAsync();

        const {
            data: {
                main: { temp },
                weather
            }
            } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=imperial`);
    
            condition = weather[0].id;
            currentTemp = temp;
            description = weather[0].description;
            return {condition, currentTemp, description};

    }catch (error){
        Alert.alert("Problem","Location service needed.");
    }
    
}