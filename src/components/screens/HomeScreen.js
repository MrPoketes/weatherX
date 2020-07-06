import React, { Component } from "react";
import {Text,View} from "react-native";
import {connect} from "react-redux";
import {fetchWeatherData} from "../../actions/index.js";
import * as apiKey from '../../../apiKey.json';
import Geolocation from "@react-native-community/geolocation";

// Global variables

var latitude = null;
var longitude = null;
// Getting the location
Geolocation.getCurrentPosition((info)=>{
  latitude = info.coords.latitude
  longitude = info.coords.longitude
});

class HomeScreen extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        if(latitude!==null && longitude!==null){
            this.props.fetchWeatherData(latitude,longitude,apiKey.apiKey);
        }
        console.log(this.props.weatherData);
    }
    render(){
        return(
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text>This is home</Text>
            </View>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        weatherData:state.data.weather
    }
}
const mapDispatchToProps = {
    fetchWeatherData,
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);
