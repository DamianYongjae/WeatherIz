import React from 'react';
import Loading from "./Loading";
import Weather from "./Weather";
import * as Font from 'expo-font';
import getWeather from './GetWeather';
import Fail from "./Fail";

export default class extends React.Component {
  
  state = {
    isLoading: true
  };

  performMainAction = async () => {
    const value = await getWeather();

    this.setState({
      isLoading: false,
      condition: value.condition,
      temp: value.currentTemp,
      description: value.description
    })
  }

  componentDidMount(){
    Font.loadAsync({
      'permanentMarker-regular': require('./assets/fonts/PermanentMarker-Regular.ttf'),
      'barlow-bold': require('./assets/fonts/Barlow-Bold.ttf'),
      'barlow-regular': require('./assets/fonts/Barlow-Regular.ttf'),
      'chilanka-regular': require('./assets/fonts/Chilanka-Regular.ttf'),
      'indieFlower': require('./assets/fonts/IndieFlower.ttf'),
      'pacifico-regular': require('./assets/fonts/Pacifico-Regular.ttf')
    });
    this.performMainAction();
    
  }

  render() {
    const {isLoading, temp, condition, description} = this.state;
      return isLoading ? (
        <Loading />
      ) : (
        <Weather temp={Math.round(temp)} condition={condition} description={description} />
          // <Fail temp={Math.round(temp)} condition={condition} description={description}/>
      );
    }
  
}
