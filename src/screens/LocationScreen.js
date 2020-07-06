import React, { Component } from "react";
import {View,Text} from "react-native";

export default class LocationScreen extends Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text>This is the Location Screen</Text>
            </View>
        )
    }
}