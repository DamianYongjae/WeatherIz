import React from 'react';
import Loading from "./Loading";
import Weather from "./Weather";
import * as Font from 'expo-font';
import getWeather from './GetWeather';
import Fail from "./Fail";
import { createAppContainer, navigation } from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';

const Root = createStackNavigator({
  Home: Weather,
  Fail: Fail,
  },
  
  {
      initialRouteName:'Home',
      defaultNavigationOptions: {
        title: 'weatherIz',
        headerStyle: {
            backgroundColor: "#569BE5",
            borderColor: "#569BE5",
            opacity: 0.8            
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#DADBE5', 
            fontSize: 26, 
            fontFamily:'permanentMarker-regular',
            textShadowColor:'#565150',
            textShadowOffset: {
                width:-2,
                height:2
            },
            textShadowRadius:2             
        },
      }
      
});

const AppContainer = createAppContainer(Root);

export default class extends React.Component {
  
  state = {
    isLoading: true
  };

  performMainAction = async () => {
    const value = await getWeather();

    this.setState({
      isLoading: false,
      // condition: value.condition,
      // temp: value.currentTemp,
      // description: value.description
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
    const {isLoading} = this.state;
      return isLoading ? (
        <Loading />
      ) : (
        <AppContainer />
        // <AppContainer condition={condition} temp={temp} description={description}  />
        // <Weather temp={Math.round(temp)} condition={condition} description={description} navigation={navigation}/>
          // <Fail temp={Math.round(temp)} condition={condition} description={description}/>
      );
    }
  
}
