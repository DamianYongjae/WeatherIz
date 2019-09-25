import React from "react";
import { View, Text, StyleSheet, StatusBar, ImageBackground } from "react-native";
import { Header, Button } from 'react-native-elements'
import PropTypes from "prop-types";
import { FontAwesome, Feather } from "@expo/vector-icons";
import checkID from './CheckID';
import weatherOptions from './WeatherOptions';
import Fail from './Fail'
import { Alert } from "react-native";
import getWeather from './GetWeather';
import MyHeader from './MyHeader';
import { AdMobBanner } from "expo";

export default class Weather extends React.Component {
    constructor(props){
        super(props);
    }

    static navigationOptions = ({navigation}) => {

        return {

        
        // title: 'weatherIz',
        // headerStyle: {
        //     backgroundColor: "#569BE5",
        //     borderColor: "#569BE5",
        //     opacity: 0.8            
        // },
        // headerTintColor: '#fff',
        // headerTitleStyle: {
        //     color: '#DADBE5', 
        //     fontSize: 26, 
        //     fontFamily:'permanentMarker-regular',
        //     textShadowColor:'#565150',
        //     textShadowOffset: {
        //         width:-2,
        //         height:2
        //     },
        //     textShadowRadius:2             
        // },
        headerRight: (
            <Button
                onPress={() => {
                    navigation.navigate('Fail');
                }}
                icon = {
                    <FontAwesome
                        name="info"
                        size={20}
                        color="white" />
                } 
                marginRight={20}
                
            />),

            
            // <FontAwesome.Button style={styles.button} 
            //         name={'info'} 
            //         size={20} 
            //         borderRadius={20}
            //         onPress={()=> {
            //             // return <Fail temp={Math.round(temp)} condition={condition} description={description}/>
            //             // Alert.alert("Image credit", "Thunderstorm: Fábio Hanashiro\nDrizzle: Matthew Henry\nRain: Alex J\nSnow: Andre Benz\nAtmosphere: Connor McSheffrey\nClear: Foad Roshan\nClouds: Jiri Benedikt\nFrom unsplash.com");
            //             // this.fail();    
            //             this.props.navigation.navigate('Fail');}}
            //             iconStyle={
            //                 {paddingLeft:10,
            //                 paddingBottom: 5}
            // }/>

            };
    }

    fail() {
        console.log("press");
        // return <Fail />
        this.props.navigation.navigate('Fail')
    }

    performAction = async () => {
        const value = await getWeather();
        
        temp = Math.round(value.currentTemp);
        return {condition, temp, description};
    }
    

    render(){
        const value = this.performAction();
        console.log(currentTemp);
        
        let temp= Math.round(currentTemp);

        let position = checkID(condition);
        let weather = weatherOptions[position];

        return (
            
            <ImageBackground style={styles.backgroundImage} source={{uri: weather.imageName}} resizeMode='cover' >
                {/* <Header style = {styles.header}
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
                /> */}
                <View style={styles.container}>
                    
                    <StatusBar barStyle="light-content" />
                    <View style={styles.halfContainer}>
                        
                        
                        <Feather 
                            size={96}
                            name={weather.iconName}
                            color={weather.color}
                            paddingBottom={20}
                        />
                        <Text style={
                            {fontSize: 50, 
                            color:weather.color,
                            marginTop: 10,
                            fontFamily: 'indieFlower'}
                        }>{temp}°</Text>
                        <Text style={
                            {fontSize: 44,
                            marginBottom: 10,
                            textAlign: "left",
                            color:weather.color,
                            fontFamily: 'chilanka-regular'}
                        }>{(description).charAt(0).toUpperCase()+(description).slice(1)}</Text>   
                    </View>
    
                    <View style={styles.textContainer}>
                        <Text style={
                            {fontSize: 34,
                            fontWeight: "400",
                            color:weather.color,
                            fontFamily: 'pacifico-regular'
                            }
                        }>{weather.title}</Text>
                        <Text style={
                            {fontWeight: "600",
                            fontSize: 24,
                            textAlign: "left",
                            color:weather.color,
                            fontFamily: 'indieFlower'}
                        }>{weather.subtitle}</Text>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

// export default function Weather({temp, condition, description}) {
//     position = checkID(condition);
//     weather = weatherOptions[position];
//     return (
//         <ImageBackground style={styles.backgroundImage} source={{uri: weather.imageName}} resizeMode='cover' >
//             <Header style = {styles.header}
//                 containerStyle={{
//                     backgroundColor: "#569BE5",
//                     borderColor: "#569BE5",
//                     opacity: 0.8
//                 }}
//                 leftComponent={<FontAwesome.Button style={styles.button} 
//                     name={'refresh'} 
//                     size={20} 
//                     borderRadius={20}
//                     onPress={ async ()=> {
//                         const value = await getWeather();

//                         <Weather temp={Math.round(value.currentTemp)} condition={value.condition} description={value.description} />

//                     }}
//                     iconStyle={
//                         {paddingLeft:10,
//                         paddingBottom: 5}
//                 }/>}
//                 centerComponent={{ text: 'weatherIz', 
//                                     style: { 
//                                         color: '#DADBE5', 
//                                         fontSize: 26, 
//                                         fontFamily:'permanentMarker-regular',
//                                         textShadowColor:'#565150',
//                                         textShadowOffset: {
//                                             width:-2,
//                                             height:2
//                                         },
//                                         textShadowRadius:2 } 
//                                 }}
//                 rightComponent={<FontAwesome.Button style={styles.button} 
//                 name={'info'} 
//                 size={20} 
//                 borderRadius={20}
//                 onPress={()=> {
//                     Alert.alert("Image credit", "Thunderstorm: Fábio Hanashiro\nDrizzle: Matthew Henry\nRain: Alex J\nSnow: Andre Benz\nAtmosphere: Connor McSheffrey\nClear: Foad Roshan\nClouds: Jiri Benedikt\nFrom unsplash.com");
//                 }}
//                 iconStyle={
//                     {paddingLeft:10,
//                     paddingBottom: 5}
//             }/>}
//             />
//             <View style={styles.container}>
                
//                 <StatusBar barStyle="light-content" />
//                 <View style={styles.halfContainer}>
                    
                    
//                     <Feather 
//                         size={96}
//                         name={weather.iconName}
//                         color={weather.color}
//                         paddingBottom={20}
//                     />
//                     <Text style={
//                         {fontSize: 50, 
//                         color:weather.color,
//                         marginTop: 10,
//                         fontFamily: 'indieFlower'}
//                     }>{temp}°</Text>
//                     <Text style={
//                         {fontSize: 44,
//                         marginBottom: 10,
//                         textAlign: "left",
//                         color:weather.color,
//                         fontFamily: 'chilanka-regular'}
//                     }>{(description).charAt(0).toUpperCase()+(description).slice(1)}</Text>   
//                 </View>

//                 <View style={styles.textContainer}>
//                     <Text style={
//                         {fontSize: 34,
//                         fontWeight: "400",
//                         color:weather.color,
//                         fontFamily: 'pacifico-regular'
//                         }
//                     }>{weather.title}</Text>
//                     <Text style={
//                         {fontWeight: "600",
//                         fontSize: 24,
//                         textAlign: "left",
//                         color:weather.color,
//                         fontFamily: 'indieFlower'}
//                     }>{weather.subtitle}</Text>
//                 </View>
//             </View>
//         </ImageBackground>
//     );
// }

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
        height: '100%'
    },
    header: {
        backgroundColor: "#569BE5",
        borderColor: "#569BE5"
    },
    halfContainer: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        paddingTop: 10
    },
    textContainer: {
        marginTop: 60,
        marginBottom: 80,
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 10,
        alignItems: "flex-start",
        paddingHorizontal: 40,
        justifyContent: "center",
        flex: 1,
        backgroundColor: '#046BF0',
        opacity: 0.5,
        borderRadius: 20,
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