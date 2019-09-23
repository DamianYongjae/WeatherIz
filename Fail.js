import React from "react";
import {StyleSheet, Text, View, ImageBackground, Image } from "react-native";

export default class Fail extends React.Component{
    constructor(props) {
        super(props);
        // console.log(this.props.temp)
    }

    // state = {
        // a: temp
    // }
    
    render(){
        // const a = this.state;
        // console.log(a);
        return (
                    <ImageBackground style = {styles.background} imageStyle={{resizeMode: 'stretch'}} source={{url:"https://images.unsplash.com/photo-1516246843873-9d12356b6fab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"}}>
                        <View style = {styles.container}>
                            <Text style = {styles.text}>Oops! I cound't Find you</Text>
                            <Text style = {styles.text}>Please Turn on Location Service</Text>
            
                        </View>
                    </ImageBackground>
                );
    }
}

// export default function fail(){
//     return (
//         <ImageBackground style = {styles.background} imageStyle={{resizeMode: 'stretch'}} source={{url:"https://images.unsplash.com/photo-1516246843873-9d12356b6fab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"}}>
//             <View style = {styles.container}>
//                 <Text style = {styles.text}>Oops! I cound't Find you</Text>
//                 <Text style = {styles.text}>Please Turn on Location Service</Text>

//             </View>
//         </ImageBackground>
//     );
    
// }

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width:"100%",
        height:null,        
    },
    container: {
        marginTop: 650,
        flex: 0.5,
        alignItems: 'center'
    },
    text: {
 
        color: "#93F1AF",
        fontSize: 30
    }
});