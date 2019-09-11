import React from 'react';
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "198e5d625b96da2777e9518b06bc91b7";

export default class extends React.Component {
  
  state = {
    isLoading: true
  };

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=imperial`);
    this.setState({
      isLoading: false,
      condition: weather[0].id,
      temp,
      description: weather[0].description,
    });
    
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude,longitude);
    }catch (error){
      Alert.alert("Problem","Location service needed.");
    }
  }

  componentDidMount(){
    this.getLocation();
  }

  render() {
    const {isLoading, temp, condition, description} = this.state;
    
      return isLoading ? (
        <Loading />
      ) : (
        <Weather temp={Math.round(temp)} condition={condition} description={description} />
      );
    }
  
}
